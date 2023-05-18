import React, { useState } from 'react';
import KafkaService from "../services/kafka.service";

function saveLike(e, status) {
  
    let data = {
      id: 0,
      status: status
    };
 
    console.log(JSON.stringify(data));
 
    KafkaService.reaction("haha-button");
    e.preventDefault();
}

function SadButton() {
    const [hahas, setLikes] = useState(0);
    const [hahad, setLiked] = useState(false);
    return (
        <div className="like-button-container">
            <button id="like"
                className={`like-button ${hahad ? 'liked' : ''}`}
                onClick={(e) => {
                    setLikes(hahas + 1);
                    setLiked(true);
                    e.preventDefault();
                    saveLike(e, 1)
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