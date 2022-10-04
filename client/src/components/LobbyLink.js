import React from 'react';
import { Link } from 'react-router-dom';

function LobbyLink(props) {
    const page=props.page;
    const serverId=props.serverId;
    const display=props.display;

    return (
        <Link 
            hidden={page == 1} 
            className='create-lobby hex' 
            // to='/game-lobby'
            to={`/game-lobby` + serverId}
        >
            {display}
        </Link>
    );
}

export default LobbyLink;