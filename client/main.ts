const socket = new WebSocket('wss://vast-wave-92442.herokuapp.com');
const messages = self.document.getElementById('messages');
const message = self.document.getElementById('message') as HTMLInputElement;
const send = self.document.getElementById('send');

interface Payload {
  message: string;
  date: Date;
}

socket.onmessage = function(e: MessageEvent) {
  const payload = e.data;
  const { message, date } = JSON.parse(payload) as Payload;
  // TODO: show pong
  console.log({ message, date });
  const li = self.document.createElement('li');
  li.innerHTML = `${message} - ${date.toLocaleString()}`;
  messages.appendChild(li);
};

send.onclick = function() {
  socket.send(message.value);
  message.value = '';
};
