import './App.css';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

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
    <Router>
      <Routes>
        <Route path='/'>
          <div className='App'>
            <div class='lobby-container'>
              <header class='lobby-header'>
                <h1>President Online</h1>
              </header>
              <main class='lobby-main'>
                <div>
                  <a class='create-lobby hex' onClick={requestLobby}>Create <br></br> Lobby</a>
                </div>
                <form>
                  <div class='form-control'>
                      <label for='lobby-id'>Join Lobby</label>
                      <input 
                        type='text' 
                        name='lobby-id' 
                        id='lobby-id' 
                        placeholder='Enter join code...'
                        onChange={(event) => {
                          setLobbyId(event.target.value);
                        }}
                      />
                      <button onClick={findLobby}>Join</button>
                  </div>
                </form>
              </main>
            </div>
          


            {/* <input 
              placeholder='type message here...' 
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
            <button onClick={sendMessage}>Send Message</button>
            <h1>Message:</h1>
            { messageReceived } */}
          </div>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
