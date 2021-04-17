import React from 'react';
import Draggable from 'react-draggable';
import { Anchor, Window, WindowContent, WindowHeader } from 'react95';
import zaboImg from '../img/zabo.png';

const Info = () => {
  return (
    <Draggable handle=".handle" defaultPosition={{ x: -160, y: -100 }}>
      <Window style={{ width: '300px' }}>
        <WindowHeader className="handle">Info.exe</WindowHeader>
        <WindowContent>
          <div style={{ textAlign: 'center' }}>
            <img src={zaboImg} alt="Zabo logo" width={30} />
            <h4>Zabo Demo</h4>
          </div>
          <p>
            Using the Zabo API to display your wallet balances or the balances
            of other addresses.
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
