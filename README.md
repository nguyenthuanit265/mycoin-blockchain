# MyCoin Blockchain
### Link demo: https://youtu.be/NUcAPSqsjRM

```
1. Phần giao diện và quá trình thao tác tương tự https://www.myetherwallet.com/wallet/create
a. Tạo Ví(Wallet) : Private key/ Passphrase/....
b. Xem thống kê tài khoản
c. Gởi coin cho một địa chỉ khác
d. Xem lịch sử giao dịch (build giống GUI https://etherscan.io/)
2. Sử dụng thuật toán Proof Of Stake: PoS là một thuật toán đồng thuận được sử dụng trong mạng blockchain để xác định ai sẽ thêm khối tiếp theo vào blockchain
```

### How to run and test app
Run 2 server and 2 UI with below cmd
- Instance 1:
```
yarn dev:client
yarn dev:server
```

- Instance 2:
```
PORT=3001 REACT_APP_API_PORT=4001 yarn dev:client
PORT=4001 P2P_PORT=6001 yarn dev:server
```

- Run cURL in Postman
```
curl --location 'localhost:4000/blockchain/addPeer' \
--header 'Content-Type: application/json' \
--data '{
    "peer": "ws://localhost:6001"
}'
```


``` Yarn install```

``` Yarn start:server``` to start server

``` Yarn start:client``` to start client