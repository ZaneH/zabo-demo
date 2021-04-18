import axios from 'axios';
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import {
  Button,
  Panel,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TextField,
  Window,
  WindowContent,
  WindowHeader,
} from 'react95';
import web3 from 'web3';
import { formatTicker } from '../utils/ticker';

const BalanceList = ({ balances, setBalances }) => {
  const [address, setAddress] = useState();
  const [error, setError] = useState();
  const [serverBalances, setServerBalances] = useState([]);

  return (
    <Draggable handle=".handle" defaultPosition={{ x: -100, y: 100 }}>
      <Window style={{ width: 400 }}>
        <WindowHeader className="handle">Balances.exe</WindowHeader>
        <WindowContent>
          {error && (
            <Panel
              variant="well"
              style={{
                padding: '0.1rem 0.25rem',
                marginBottom: '1rem',
                width: '100%',
              }}
            >
              {error.toString()}
            </Panel>
          )}
          <div style={{ display: 'flex' }}>
            <TextField
              style={{ marginBottom: '8px', width: '100%' }}
              placeholder="ETH address..."
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            ></TextField>
            <Button
              style={{ marginLeft: 6 }}
              onClick={async () => {
                axios
                  .get(`http://localhost:8080/balances/${address}`)
                  .then((result) => {
                    setBalances();
                    setServerBalances(result.data.balances ?? []);
                    setError();
                  })
                  .catch((err) => {
                    setError(err);
                  });
              }}
            >
              Search
            </Button>
          </div>
          <div style={{ height: '400px', overflowY: 'scroll' }}>
            <Table>
              <TableHead>
                <TableRow head>
                  <TableHeadCell>Ticker</TableHeadCell>
                  <TableHeadCell>Amount</TableHeadCell>
                  <TableHeadCell>USD</TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(balances ?? serverBalances)
                  .sort((a, b) => {
                    if (a.amount) {
                      return a.amount < b.amount;
                    } else {
                      return a.balance < b.balance;
                    }
                  })
                  .map((balance) => {
                    return (
                      <TableRow key={balance.ticker ?? balance.token.ticker}>
                        <TableDataCell>
                          $
                          {formatTicker(balance.ticker ?? balance.token.ticker)}
                        </TableDataCell>
                        <TableDataCell>
                          {Number(
                            balance.amount ??
                              web3.utils.fromWei(balance.balance, 'ether')
                          ).toFixed(6)}
                        </TableDataCell>
                        <TableDataCell>
                          {balance.fiat_value ?? 'N/A'}
                        </TableDataCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </div>
        </WindowContent>
      </Window>
    </Draggable>
  );
};

export default BalanceList;
