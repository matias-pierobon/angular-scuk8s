const WebSocket = require('ws');

const port = process.env.PORT || 3000;
const WebSocketServer = WebSocket.Server;
const server = new WebSocketServer({ port: port });

const broadcast = data => {
  server.clients.forEach(client => {
    client.send(data);
  });
};

let clients = [];
server.on('connection', ws => {
  console.log('New connection arrived');
  client = [...clients, ws];
  ws.on('message', message => {
    try {
      const date = new Date();
      console.log(date, message);
      broadcast(JSON.stringify({ message, date }));
    } catch (e) {
      console.error(e.message);
    }
  });
});

console.log('Server is running on port', 3000);
