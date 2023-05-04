import React, { useState } from 'react';

function SadButton() {
    const [sads, setLikes] = useState(0);
    const [saded, setLiked] = useState(false);
    return (
        <div className="like-button-container">
            <button id="like"
                className={`like-button ${saded ? 'liked' : ''}`}
                onClick={() => {
                    setLikes(sads + 1);
                    setLiked(true);
                }}
            >
                <img src={"https://i.pinimg.com/564x/2a/88/9c/2a889c5a84baf0638f3def83a57605aa.jpg"} className='img' width={38} height={38} alt="" /> <br/>
                Sad
                <br/>
                {sads}
            </button>
        </div>
    );
}
export default SadButton
