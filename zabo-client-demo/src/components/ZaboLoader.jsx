import React from 'react';
import ZaboProvider, { ZaboContext } from './ZaboProvider';

const ZaboLoader = ({ children }) => {
  return (
    <ZaboProvider>
      <ZaboContext.Consumer>
        {(zabo) => {
          if (zabo.loading) {
            return <p>Loading...</p>;
          } else if (zabo.error) {
            return <p>{zabo.error.toString()}</p>;
          } else {
            return children;
          }
        }}
      </ZaboContext.Consumer>
    </ZaboProvider>
  );
};

export default ZaboLoader;
