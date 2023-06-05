import React, { useEffect, useState } from 'react';
import KafkaService from "../services/kafka.service";
import { useAuth } from '../context/AuthContext';

const MongoDBService = require('../services/MongoDb.service');

function LikeButton({ pubId }) {
    const { user } = useAuth();
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const mongoDBService = new MongoDBService('http://localhost:3001');

        // Define los parámetros deseados para la llamada a getReactionsByObjectAndReaction
        const objectId = pubId;
        const reactionId = 'like';

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
        const rId = "like"
        KafkaService.reaction(uId, oId, rId);
        e.preventDefault();
    }





    return (
        <div className="like-button-container">
            <button id="like"
                className={`like-button ${liked ? 'liked' : ''}`}
                onClick={(e) => {
                    setLikes(likes + 1);
                    setLiked(true);
                    e.preventDefault();
                    saveLike(e, 1)
                }}
            >
                <img src={"https://i.pinimg.com/564x/e0/91/a3/e091a3f55033894f473f94344675a178.jpg"} className='img' width={38} height={38} alt="" /> <br />
                Like
                <br />
                {likes}
            </button>
        </div>
    );
}
export default LikeButton
