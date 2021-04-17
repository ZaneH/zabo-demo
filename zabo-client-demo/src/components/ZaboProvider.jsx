import React from 'react';
import { useAsync } from 'react-async-hook';
const Zabo = require('zabo-sdk-js');

// initialize Zabo async
const zabo = async () =>
  await Zabo.init({
    clientId: process.env.REACT_APP_ZABO_CLIENT_ID,
    env: 'sandbox',
  });

export const ZaboContext = React.createContext();

const ZaboProvider = ({ children }) => {
  const asyncZabo = useAsync(zabo, []);

  return (
    <ZaboContext.Provider value={asyncZabo}>{children}</ZaboContext.Provider>
  );
};

export default ZaboProvider;
