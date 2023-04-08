const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 6660 });

wss.on('connection', function connection(ws) {
  console.log('Client connected');

  ws.on('message', function incoming(message) {
    console.log(`Received message: ${message}`);
    ws.send(`Echo: ${message}`);
  });

  ws.on('close', function close() {
    console.log('Client disconnected');
  });
});
