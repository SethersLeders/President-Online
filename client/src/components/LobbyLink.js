import React from 'react';
import { Link } from 'react-router-dom';

function LobbyLink(props) {
    const page=props.page;
    const serverId=props.userId;
    const display=props.display;

    return (
        <Link 
            hidden={page == 1} 
            className='create-lobby hex' 
            to='/game-lobby'
        >
            Join <br></br> Lobby
        </Link>
    );
}

export default LobbyLink;