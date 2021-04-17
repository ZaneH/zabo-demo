# Zabo Demo
A simple demo to read the balance from a connected wallet or a specified Ethereum address.

## Preview
![GIF](https://i.imgur.com/72TCjiP.gif)

## Run Demo
1. Open 2 Terminal windows
2. `cd` into `zabo-backend-demo`
    - Create a .env file within
      - Add `ZABO_SECRET_KEY=your_secret_key`
      - Add `ZABO_API_KEY=your_api_key`
    - Run `npm i`
    - Run `npm run start`
3. `cd` into `zabo-client-demo`
    - Create a .env file within
      - Add `REACT_APP_ZABO_CLIENT_ID=your_client_id`
    - Run `npm i`
    - Run `npm run start`