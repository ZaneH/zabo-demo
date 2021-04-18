import React from 'react';
import Draggable from 'react-draggable';
import { Anchor, Window, WindowContent, WindowHeader } from 'react95';
import zaboImg from '../img/zabo.png';

const Info = () => {
  return (
    <Draggable handle=".handle" defaultPosition={{ x: -160, y: -80 }}>
      <Window style={{ width: '300px' }}>
        <WindowHeader className="handle">Info.exe</WindowHeader>
        <WindowContent>
          <div style={{ textAlign: 'center' }}>
            <img src={zaboImg} alt="Zabo logo" width={30} />
            <h4>Zabo Demo</h4>
          </div>
          <p>
            A simple portfolio demo using the Zabo SDK. View the balance of any
            wallet and the balance/transactions of connected wallets.
            <br />
            <br />
            <Anchor href="https://github.com/zaneh/zabo-demo" target="_blank">
              Source on GitHub
            </Anchor>
          </p>
        </WindowContent>
      </Window>
    </Draggable>
  );
};

export default Info;
