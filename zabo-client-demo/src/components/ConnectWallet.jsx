import React from 'react';
import { Button, Window, WindowContent, WindowHeader } from 'react95';
import { ZaboContext } from './ZaboProvider';
import Draggable from 'react-draggable';

const ConnectWallet = ({ setBalances, setConnected, connected }) => {
  return (
    <ZaboContext.Consumer>
      {({ result: zabo }) => {
        return (
          <Draggable handle=".handle" defaultPosition={{ x: 10, y: -400 }}>
            <Window>
              <WindowHeader className="handle">Connect.exe</WindowHeader>
              <WindowContent>
                <Button
                  onClick={() => {
                    zabo.connect().onConnection(() => {
                      setConnected(connected + 1);

                      zabo.accounts
                        .getBalances()
                        .then((balances) => {
                          setBalances(balances.data);
                        })
                        .catch((err) => {
                          console.error(err);
                        });
                    });
                  }}
                >
                  Connect Wallet
                </Button>
              </WindowContent>
            </Window>
          </Draggable>
        );
      }}
    </ZaboContext.Consumer>
  );
};

export default ConnectWallet;
