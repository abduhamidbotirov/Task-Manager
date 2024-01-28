import React from 'react';

const ChatType = ({ type, text }) => {
    return (
        <>
            <div className="chat_type_item">
                <i className={type}></i>
                <span>{text}</span>
            </div>
        </>
    );
};

export default ChatType;