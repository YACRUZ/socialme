import React, { useState } from 'react';

function LikeButton() {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    return (
        <div className="like-button-container">
            <button id="like"
                className={`like-button ${liked ? 'liked' : ''}`}
                onClick={() => {
                    setLikes(likes + 1);
                    setLiked(true);
                }}
            >
                <img src={"https://i.pinimg.com/564x/e0/91/a3/e091a3f55033894f473f94344675a178.jpg"} className='img' width={38} height={38} alt="" /> <br/>
                like
                <br/>
                {likes}
            </button>
        </div>
    );
}
export default LikeButton
