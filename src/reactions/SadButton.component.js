import React, { useEffect, useState } from 'react';
import KafkaService from "../services/kafka.service";
import { useAuth } from '../context/AuthContext';

const MongoDBService = require('../services/MongoDb.service');

function SadButton({ pubId }) {
    const { user } = useAuth();
    const [sads, setLikes] = useState(0);
    const [saded, setLiked] = useState(false);

    useEffect(() => {
        const mongoDBService = new MongoDBService('http://localhost:3001');

        // Define los parámetros deseados para la llamada a getReactionsByObjectAndReaction
        const objectId = pubId;
        const reactionId = 'sad';

        const fetchData = async () => {
            try {
                const response = await mongoDBService.getReactionsByObjectAndReaction(objectId, reactionId);
                const data = response[0];
                setLikes(data.n);
            } catch (error) {
                console.error(error);
            }
        };
        // Llama a fetchData al montar o actualizar el componente
        fetchData();
    })

    function saveLike(e) {
        const uId = user.uid;
        const oId = pubId;
        const rId = "sad"
        KafkaService.reaction(uId, oId, rId);
        e.preventDefault();
    }

    
    return (
        <div className="like-button-container">
            <button id="like"
                className={`like-button ${saded ? 'liked' : ''}`}
                onClick={(e) => {
                    setLikes(sads + 1);
                    setLiked(true);
                    e.preventDefault();
                    saveLike(e, 1)
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
