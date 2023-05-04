import React, { useState } from 'react';

function SadButton() {
    const [hahas, setLikes] = useState(0);
    const [hahad, setLiked] = useState(false);
    return (
        <div className="like-button-container">
            <button id="like"
                className={`like-button ${hahad ? 'liked' : ''}`}
                onClick={() => {
                    setLikes(hahas + 1);
                    setLiked(true);
                }}
            >
                <img src={"https://i.pinimg.com/564x/da/28/74/da2874cfaa008b8611efdccdbb0681c1.jpg"} className='img' width={38} height={38} alt="" /> <br/>
                Jaja
                <br/>
                {hahas} 
            </button>
        </div>
    );
}
export default SadButton