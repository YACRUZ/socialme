import React, { useState } from 'react';
import KafkaService from "../services/kafka.service";

function saveLike(e, status) {
  
    let data = {
      id: 0,
      status: status
    };
 
    console.log(JSON.stringify(data));
 
    KafkaService.reaction("love-button");
    e.preventDefault();
}

function LoveButton() {
    const [loves, setLikes] = useState(0);
    const [loved, setLiked] = useState(false);
    return (
        <div className="like-button-container">
            <button id="like"
                className={`like-button ${loved ? 'liked' : ''}`}
                onClick={(e) => {
                    setLikes(loves + 1);
                    setLiked(true);
                    e.preventDefault();
                    saveLike(e, 1)
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
