import socketIOClient from 'socket.io-client';

const socket = socketIOClient("localhost:4000");
// const socket = socketIOClient("server-dsb.herokuapp.com");

export default socket;