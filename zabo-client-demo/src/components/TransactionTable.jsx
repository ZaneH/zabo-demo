import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'react95';
import checkImg from '../img/check.png';
import errorImg from '../img/error.png';
import { capitalizeFirstLetter } from '../utils/capitalize';
import { formatTicker } from '../utils/ticker';
import { ZaboContext } from './ZaboProvider';

const displayParts = (parts) => {
  var sign;

  if (parts.length === 1) {
    if (parts[0].direction === 'sent') {
      sign = '-';
    } else if (parts[0].direction === 'received') {
      sign = '+';
    }

    return (
      <>
        {sign}
        {Number(parts[0].amount).toFixed(2)} ${formatTicker(parts[0].ticker)}
      </>
    );
  } else if (parts.length === 2) {
    var sentPart;
    var receivedPart;

    if (parts[0].direction === 'sent') {
      sentPart = parts[0];
      receivedPart = parts[1];
    } else if (parts[0].direction === 'received') {
      receivedPart = parts[0];
      sentPart = parts[1];
    }

    return (
      <>
        {Number(sentPart.amount).toFixed(2)} ${formatTicker(sentPart.ticker)}{' '}
        {' → '}
        {Number(receivedPart.amount).toFixed(2)} $
        {formatTicker(receivedPart.ticker)}
      </>
    );
  }
};

const displayInfo = (tx) => {
  if (tx.parts.length === 1) {
    return (
      <>
        {capitalizeFirstLetter(tx.parts[0].direction)} (
        {moment(tx.initiated_at).format('l').toString()})
      </>
    );
  }

  return (
    <>
      {capitalizeFirstLetter(tx.transaction_type)} (
      {moment(tx.initiated_at).format('l').toString()})
    </>
  );
};

const TransactionTable = ({ connected }) => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCursors, setPageCursors] = useState({});
  const [maxPages, setMaxPages] = useState();
  const { result: zabo } = useContext(ZaboContext);

  useEffect(() => {
    zabo.transactions
      .getList({
        limit: 25,
        cursor: page === 0 ? undefined : pageCursors[page - 1],
      })
      .then(({ data, hasMore }) => {
        if (data[data.length - 1]) {
          setPageCursors({
            [page]: data[data.length - 1].id,
            ...pageCursors,
          });
        }

        setTransactions(data);

        if (!hasMore) {
          setMaxPages(page);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [connected, page]);

  useEffect(() => {
    setPage(0);
    setMaxPages(undefined);
  }, [connected]);

  return (
    <>
      <div style={{ textAlign: 'right', marginBottom: 6 }}>
        <Button
          onClick={() => {
            if (page !== 0) {
              setPage(page - 1);
            }
          }}
        >
          ◄
        </Button>
        <Button
          onClick={() => {
            if (page !== maxPages) {
              console.log(page, maxPages);
              setPage(page + 1);
            }
          }}
        >
          ►
        </Button>
      </div>
      <Table>
        <TableHead>
          <TableRow head>
            <TableHeadCell style={{ width: 200 }}>Info</TableHeadCell>
            <TableHeadCell style={{ width: 35 }}>Status</TableHeadCell>
            <TableHeadCell>Details</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((tx) => {
            return (
              <TableRow key={tx.id}>
                <TableDataCell>{displayInfo(tx)}</TableDataCell>
                <TableDataCell>
                  <div
                    style={{
                      textAlign: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '0.2rem 0',
                    }}
                  >
                    {tx.status === 'completed' ? (
                      <img width={22} height={22} src={checkImg} alt="Check" />
                    ) : tx.status === 'failed' ? (
                      <img width={22} height={22} src={errorImg} alt="Error" />
                    ) : null}
                  </div>
                </TableDataCell>
                <TableDataCell>{displayParts(tx.parts)}</TableDataCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default TransactionTable;
