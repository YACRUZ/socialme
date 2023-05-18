import React, { useState } from 'react';
import KafkaService from "../services/kafka.service";

function saveLike(e, status) {
  
    let data = {
      id: 0,
      status: status
    };
 
    console.log(JSON.stringify(data));
 
    KafkaService.reaction("wow-button");
    e.preventDefault();
}

function WowButton() {
    const [wows, setLikes] = useState(0);
    const [woww, setLiked] = useState(false);
    return (
        <div className="like-button-container">
            <button id="like"
                className={`like-button ${woww ? 'liked' : ''}`}
                onClick={(e) => {
                    setLikes(wows + 1);
                    setLiked(true);
                    e.preventDefault();
                    saveLike(e, 1)
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
