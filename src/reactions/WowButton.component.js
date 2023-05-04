import React, { useState } from 'react';

function WowButton() {
    const [wows, setLikes] = useState(0);
    const [woww, setLiked] = useState(false);
    return (
        <div className="like-button-container">
            <button id="like"
                className={`like-button ${woww ? 'liked' : ''}`}
                onClick={() => {
                    setLikes(wows + 1);
                    setLiked(true);
                }}
            >
                <img src={"https://i.pinimg.com/564x/e4/0b/5c/e40b5cf8afa8069bbba86b18892895fe.jpg"} className='img' width={38} height={38} alt="" /> <br/>
                Wow
                <br/>
                {wows}
            </button>
        </div>
    );
}
export default WowButton
