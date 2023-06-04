import React, { useEffect, useState } from 'react';
import KafkaService from "../services/kafka.service";
import { useAuth } from '../context/AuthContext';

const MongoDBService = require('../services/MongoDb.service');

function AngryButton({ pubId }) {
    const { user } = useAuth();
    const [angries, setLikes] = useState(0);
    const [angried, setLiked] = useState(false);

    useEffect(() => {
        const mongoDBService = new MongoDBService('http://localhost:3001');

        // Define los parámetros deseados para la llamada a getReactionsByObjectAndReaction
        const objectId = pubId;
        const reactionId = 'angry';

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

    function saveLike(e, status) {
        const uId = user.uid;
        const oId = pubId;
        const rId = "angry"
        KafkaService.reaction(uId, oId, rId);
        e.preventDefault();
    }


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
                <img src={"https://i.pinimg.com/564x/77/ee/2f/77ee2fb5810d37ab98bb5d38e9a20568.jpg"} className='img' width={38} height={38} alt="" /> <br />
                Angry
                <br />
                {angries}
            </button>
        </div>
    );
}
export default AngryButton