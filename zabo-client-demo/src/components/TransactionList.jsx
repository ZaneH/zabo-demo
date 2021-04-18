import React from 'react';
import Draggable from 'react-draggable';
import { Window, WindowContent, WindowHeader } from 'react95';
import TransactionTable from './TransactionTable';

const TransactionList = ({ connected }) => {
  return (
    <Draggable handle=".handle" defaultPosition={{ x: -45, y: 40 }}>
      <Window style={{ width: 550 }}>
        <WindowHeader className="handle">Transactions.exe</WindowHeader>
        <WindowContent>
          <div style={{ height: 400, overflowY: 'scroll' }}>
            <TransactionTable connected={connected} />
          </div>
        </WindowContent>
      </Window>
    </Draggable>
  );
};

export default TransactionList;
