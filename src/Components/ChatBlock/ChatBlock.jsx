import avatar from "../../../public/ims/Avatar.png"
const ChatBlock = () => {
    return (
        <>
            <div className="chat_item">
                <div className="profile_photo">
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="profile_names">
                    <div className="profile_name">
                        <h4>Jessica Drew</h4> <span>18:30</span>
                    </div>
                    <div className="profile_desc">
                        <p>Chatgram Web was updated.</p>
                        <span>4</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatBlock;