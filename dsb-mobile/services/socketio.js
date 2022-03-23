import io from 'socket.io-client';

const socket = io.connect('http://192.168.1.157:4000')// mudar para o endereço IP do seu PC
// const socket = io.connect('https://server-dsb.herokuapp.com');

export default socket;