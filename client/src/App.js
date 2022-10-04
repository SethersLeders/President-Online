import './App.css';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Form from './components/Form';

const socket = io.connect('http://localhost:3001');

function App() {
  const [message, setMessage] = useState('');
  const [messageReceived, setMessageReceived] = useState('');
  const [lobbyId, setLobbyId] = useState('');

  const sendMessage = () => {
    socket.emit('send_message', { message });
  };

  const requestLobby = () => {
    socket.emit('request_lobby');
  }

  const findLobby = () => {
    socket.emit('find_lobby', { lobbyId });
  }

  // will run any time an event is thrown to us on the socket.io server
  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageReceived(data.message);
    })
  }, [socket]);

  return (
    <Routes>
      <Route 
        path='/'
        element={
          <div className='App'>
          <div className='lobby-container'>
            <main className='lobby-main'>
              <div>
              </div>
              <Form />
            </main>
          </div>
        </div>
        }
      >
      </Route>
      <Route
        path='/game-lobby'
        loader={async ({ request }) => {
          let url = new URL(request.url);
          let lobbyId = url.searchParams.get('q');
          return lobbyId;
        }}
        element={
          <div>
            <h1>Welcome to the lobby!</h1>
            <h3>Lobby ID: {lobbyId}</h3>
          </div>
        }
      >
      </Route>
      <Route
        path='/create-lobby' 
        element={
          <div>
            <h1>Create Lobby</h1>
          </div>
        }
      >
      </Route>
    </Routes>
  );
}

export default App;