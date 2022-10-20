import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LobbyLink from './LobbyLink';
import Slider from './Slider/Slider.js'

function Form() {
    const [page, setPage] = useState(0);

    const Titles = ['President Online', 'Create Lobby'];

    return (
        <div className='form'>
            <div className='form-container'>
                <header className='lobby-header'>
                    <h1>{Titles[page]}</h1>
                </header>
                <div className='body'>
                    <button
                        hidden={page == 1}
                        onClick={() => {
                            setPage((currPage) => currPage + 1);
                        }}
                        className='create-lobby'
                    >
                        Create <br></br>Lobby
                    </button>
                        <Slider
                            page={page}
                        ></Slider>
                </div>
                <div className='footer'>
                    <LobbyLink page={page} serverId={1234} display={`Join\nLobby`} />
                </div>
            </div>
        </div>
    )
};

export default Form;