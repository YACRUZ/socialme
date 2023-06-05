import React, { useEffect, useState } from 'react';
import KafkaService from "../services/kafka.service";
import { useAuth } from '../context/AuthContext';

const MongoDBService = require('../services/MongoDb.service');

function SadButton({ pubId }) {
    const { user } = useAuth();
    const [hahas, setLikes] = useState(0);
    const [hahad, setLiked] = useState(false);

    useEffect(() => {
        const mongoDBService = new MongoDBService('http://localhost:3001');

        // Define los parámetros deseados para la llamada a getReactionsByObjectAndReaction
        const objectId = pubId;
        const reactionId = 'haha';

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
        const rId = "haha"
        KafkaService.reaction(uId, oId, rId);
        e.preventDefault();
    }




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
                <img src={"https://i.pinimg.com/564x/da/28/74/da2874cfaa008b8611efdccdbb0681c1.jpg"} className='img' width={38} height={38} alt="" /> <br />
                Jaja
                <br />
                {hahas}
            </button>
        </div>
    );
}
export default SadButton