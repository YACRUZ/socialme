import React, { useEffect, useState } from 'react';
import KafkaService from "../services/kafka.service";
import { useAuth } from '../context/AuthContext';

const MongoDBService = require('../services/MongoDb.service');

function WowButton({ pubId }) {
    const { user } = useAuth();
    const [wows, setLikes] = useState(0);
    const [woww, setLiked] = useState(false);

    useEffect(() => {
        const mongoDBService = new MongoDBService('http://localhost:3001');

        // Define los parámetros deseados para la llamada a getReactionsByObjectAndReaction
        const objectId = pubId;
        const reactionId = 'wow';

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
        const rId = "wow"
        KafkaService.reaction(uId, oId, rId);
        e.preventDefault();
    }

    
    return (
        <div className="like-button-container">
            <button id="like"
                className={`like-button ${woww ? 'liked' : ''}`}
                onClick={(e) => {
                    e.preventDefault();
                    saveLike(e, 1)
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
