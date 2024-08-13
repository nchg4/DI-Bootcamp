import React, { useState } from 'react';

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
};

const ReactionButton = () => {
    const [reactions, setReactions] = useState({
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
    });

    const handleReaction = (type) => {
        setReactions((prev) => ({
            ...prev,
            [type]: prev[type] + 1,
        }));
    };

    return (
        <div>
            {Object.entries(reactionEmoji).map(([key, emoji]) => (
                <button 
                    key={key} 
                    onClick={() => handleReaction(key)} 
                    className="reactionButton" 
                >
                    {emoji} {reactions[key]}
                </button>
            ))}
        </div>
    );
};

export default ReactionButton;