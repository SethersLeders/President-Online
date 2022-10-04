import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                </div>
                <div className='footer'>
                    <Link 
                        hidden={page == 1} 
                        className='create-lobby hex' 
                        to='/game-lobby'
                    >
                        Join <br></br> Lobby
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Form;