import './App.css';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';

const socket = io.connect('http://localhost:3001');

function App() {
  const [message, setMessage] = useState('');
  const [messageReceived, setMessageReceived] = useState('');
  const sendMessage = () => {
    socket.emit('send_message', { message });
  };

  // will run any time an event is thrown to us on the socket.io server
  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageReceived(data.message);
    })
  }, [socket]);

  return (
    <div className='App'>
      <div class='lobby-container'>
        <header class='lobby-header'>
          <h1>President Online</h1>
          <p>Project by Seth Ledezma</p>
        </header>
        <main class='lobby-main'>
          <form>
            <div class='form-control'>
              <button class='create-lobby'>Create Lobby</button>
            </div>
          </form>
        </main>
      </div>


      <input 
        placeholder='type message here...' 
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}>Send Message</button>
      <h1>Message:</h1>
      { messageReceived }
    </div>
  );
}

export default App;
