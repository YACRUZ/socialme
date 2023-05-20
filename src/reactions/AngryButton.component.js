import React, { useState } from 'react';
import KafkaService from "../services/kafka.service";

function saveLike(e, status) {
  
    let data = {
      id: 0,
      status: status
    };
 
    console.log(JSON.stringify(data));
 
    KafkaService.reaction("angry-button");
    e.preventDefault();
}

function AngryButton() {
    const [angries, setLikes] = useState(0);
    const [angried, setLiked] = useState(false);
    return (
        <div className="like-button-container">
            <button id="like"
                className={`like-button ${angried ? 'liked' : ''}`}
                onClick={(e) => {
                    setLikes(angries + 1);
                    setLiked(true);
                    e.preventDefault();
                    saveLike(e, 1)
                }}
            >
                <img src={"https://i.pinimg.com/564x/77/ee/2f/77ee2fb5810d37ab98bb5d38e9a20568.jpg"} className='img' width={38} height={38} alt="" /> <br/>
                Angry
                <br/>
                {angries} 
            </button>
        </div>
    );
}
export default AngryButton