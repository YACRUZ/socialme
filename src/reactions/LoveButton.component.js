import React, { useState } from 'react';

function LoveButton() {
    const [loves, setLikes] = useState(0);
    const [loved, setLiked] = useState(false);
    return (
        <div className="like-button-container">
            <button id="like"
                className={`like-button ${loved ? 'liked' : ''}`}
                onClick={() => {
                    setLikes(loves + 1);
                    setLiked(true);
                }}
            >
                <img src={"https://i.pinimg.com/564x/89/80/75/8980753728325a58f659722bfcdf13bd.jpg"} className='img' width={38} height={38} alt="" /> <br/>
                Loves
                <br/>
                {loves}
            </button>
        </div>
    );
}
export default LoveButton
