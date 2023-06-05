import React, { useEffect, useState } from 'react';
import KafkaService from "../services/kafka.service";
import { useAuth } from '../context/AuthContext';

const MongoDBService = require('../services/MongoDb.service');

function LoveButton({ pubId }) {
    const { user } = useAuth();
    const [loves, setLikes] = useState(0);
    const [loved, setLiked] = useState(false);

    useEffect(() => {
        const mongoDBService = new MongoDBService('http://localhost:3001');

        // Define los parámetros deseados para la llamada a getReactionsByObjectAndReaction
        const objectId = pubId;
        const reactionId = 'love';

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
        const rId = "love"
        KafkaService.reaction(uId, oId, rId);
        e.preventDefault();
    }
    
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
