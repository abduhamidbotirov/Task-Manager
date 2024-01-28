import ChatBlock from "../Components/ChatBlock/ChatBlock";
import ChatType from "../Components/ChatType/ChatType";
import "./index.scss";
import avatar from "../../public/ims/Avatar.png"
import Send from "../../public/ims/Send Icon.svg"
import { useState } from "react";
const MainPage = () => {
    const [type, setType] = useState("tasks");
    return (
        <>
            <div className="main_wrapper">
                <div className="main_wrapper_left">
                    <aside className="sidebar">
                        <div className="sidebar_menu">

                            <div className="icon_menu">
                                <i className="bi bi-list"></i>
                            </div>

                            <div className="sidebar_search">
                                <div className="search_wrap">
                                    <input type="text" className="search_input" placeholder="Search" />
                                </div>
                            </div>
                        </div>
                        <div className="sidebar_wrap">
                            <div className="sidebar_chat_types">
                                <div className="chat_type_item">
                                    <i className="bi bi-chat-fill"></i>
                                    <span>All chats</span>
                                </div>
                                <ChatType type="bi bi-person-fill" text={"users"} />
                                <ChatType type="bi bi-people-fill" text={"groups"} />
                                <div className="chat_type_item">
                                    <i className="bi bi-three-dots"></i>
                                    <span>Edit</span>
                                </div>
                            </div>
                            <div className="sidebar_chats">
                                <div className="sidebar_chat_items">
                                    <ChatBlock />
                                    <ChatBlock />
                                    <ChatBlock />
                                    <ChatBlock />
                                    <ChatBlock />
                                    <ChatBlock />
                                    <ChatBlock />
                                    <ChatBlock />
                                    <ChatBlock />
                                    <ChatBlock />
                                    <ChatBlock />
                                    <ChatBlock />
                                    <ChatBlock />
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
                <div className="main_wrapper_right">
                    <div className="chat_top_header">
                        <div className="chat_header_left">
                            <div className="header_profile_img">
                                <img src={avatar} alt="profile img" />
                            </div>
                            <div className="header_about_profile">
                                <div className="about_names">
                                    <h4>Jessica Drew</h4>
                                    <p>last message 12 mins ago</p>
                                </div>
                                <div className="call_search_control">
                                    <div className="icons">
                                        <span><i className="bi bi-search"></i></span>
                                        <span><i className="bi bi-telephone-fill"></i></span>
                                        <span><i className="bi bi-three-dots-vertical"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="chat_header_right">
                            saxa
                        </div> */}
                    </div>
                    {
                        type == "chats" ? <>
                        <div className="chat_body">
                        <div className="chat_body_wrap">
                            <div className="chat_body_card">
                                <p>sajnjsanj sax jnsaj sxnajnjnj asxjnjnjnxsajn jsaxnjnjn jnajsbxjsaxn jnxsj naj</p>
                                <div className="chat_body_time">
                                    <span>18:12</span>
                                    <i className="bi bi-check2"></i>
                                </div>
                            </div>
                        </div>
                        <div className="chat_body_wrap">
                            <div className="chat_body_card">
                                <p>sajnjsanj sax jnsaj sxnajnjnj asxjnjnjnxsajn jsaxnjnjn jnajsbxjsaxn jnxsj naj</p>
                                <div className="chat_body_time">
                                    <span>18:12</span>
                                    <i className="bi bi-check2"></i>
                                </div>
                            </div>
                        </div>
                        <div className="chat_body_wrap myself">
                            <div className="chat_body_card">
                                <p>sajnjsanj sax jnsaj sxnajnjnj asxjnjnjnxsajn jsaxnjnjn jnajsbxjsaxn jnxsj naj</p>
                                <div className="chat_body_time">
                                    <span>18:12</span>
                                    <i className="bi bi-check2"></i>
                                </div>
                            </div>
                        </div>
                        <div className="chat_body_wrap">
                            <div className="chat_body_card">
                                <p>sajnjsanj sax jnsjsbxjsaxn jnxsj naj</p>
                                <div className="chat_body_time">
                                    <span>18:12</span>
                                    <i className="bi bi-check2"></i>
                                </div>
                            </div>
                        </div>
                        <div className="chat_body_wrap">
                            <div className="chat_body_card">
                                <p>sajnjsanj sax jnsaj sxnajnjnj asxjnjnjnxsajn jsaxnjnjn jnajsbxjsaxn jnxsj naj</p>
                                <div className="chat_body_time">
                                    <span>18:12</span>
                                    <i className="bi bi-check2"></i>
                                </div>
                            </div>
                        </div>
                        <div className="chat_body_wrap myself">
                            <div className="chat_body_card">
                                <p>sajnjsanj sax jnsaj sxnajnjnj asxjnjnjnxsajn jsaxnjnjn jnajsbxjsaxn jnxsj naj</p>
                                <div className="chat_body_time">
                                    <span>18:12</span>
                                    <i className="bi bi-check2"></i>
                                </div>
                            </div>
                        </div>
                        <div className="chat_body_wrap">
                            <div className="chat_body_card">
                                <p>sajnjsanj sax jnsaj sxnajnjnj asxjnjnjnxsajn jsaxnjnjn jnajsbxjsaxn jnxsj naj</p>
                                <div className="chat_body_time">
                                    <span>18:12</span>
                                    <i className="bi bi-check2"></i>
                                </div>
                            </div>
                        </div>
                        <div className="chat_body_wrap myself">
                            <div className="chat_body_card">
                                <p>sajnjsanj sax jnsaj sxnajnjnj asxjnjnjnxsajn jsaxnjnjn jnajsbxjsaxn jnxsj naj</p>
                                <div className="chat_body_time">
                                    <span>18:12</span>
                                    <i className="bi bi-check2"></i>
                                </div>
                            </div>
                        </div>
                        <div className="chat_body_wrap myself">
                            <div className="chat_body_card">
                                <p>sajnjsanj sax jnsaj sxnajnjnj asxjnjnjnxsajn jsaxnjnjn jnajsbxjsaxn jnxsj naj</p>
                                <div className="chat_body_time">
                                    <span>18:12</span>
                                    <i className="bi bi-check2"></i>
                                </div>
                            </div>
                        </div>
                        <div className="chat_body_wrap">
                            <div className="chat_body_card">
                                <p>sajnjsanj sax jnsaj sxnajnjnj asxjnjnjnxsajn jsaxnjnjn jnajsbxjsaxn jnxsj naj</p>
                                <div className="chat_body_time">
                                    <span>18:12</span>
                                    <i className="bi bi-check2"></i>
                                </div>
                            </div>
                        </div>
                        <div className="chat_body_wrap myself">
                            <div className="chat_body_card">
                                <p>sajnjsanj sax jnsaj sxnajnjnj asxjnjnjnxsajn jsaxnjnjn jnajsbxjsaxn jnxsj naj</p>
                                <div className="chat_body_time">
                                    <span>18:12</span>
                                    <i className="bi bi-check2"></i>
                                </div>
                            </div>
                        </div>
                        <div className="chat_body_wrap">
                            <div className="chat_body_card">
                                <p>sajnjsanj sax jnsjsbxjsaxn jnxsj naj</p>
                                <div className="chat_body_time">
                                    <span>18:12</span>
                                    <i className="bi bi-check2"></i>
                                </div>
                            </div>
                        </div>
                        <div className="chat_body_wrap">
                            <div className="chat_body_card">
                                <p>sajnjsanj sax jnsaj sxnajnjnj asxjnjnjnxsajn jsaxnjnjn jnajsbxjsaxn jnxsj naj</p>
                                <div className="chat_body_time">
                                    <span>18:12</span>
                                    <i className="bi bi-check2"></i>
                                </div>
                            </div>
                        </div>
                        <div className="chat_body_wrap myself">
                            <div className="chat_body_card">
                                <p>sajnjsanj sax jnsaj sxnajnjnj asxjnjnjnxsajn jsaxnjnjn jnajsbxjsaxn jnxsj naj</p>
                                <div className="chat_body_time">
                                    <span>18:12</span>
                                    <i className="bi bi-check2"></i>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className="chat_footer">
                        <div className="chat_form_wrap">

                            <div className="icon">
                                <i className="bi bi-emoji-smile"></i>
                            </div>
                            <form action="">
                                <input type="text" placeholder="Message" />
                                <button>
                                    <img src={Send} alt="" />
                                </button>
                            </form>

                        </div>
                    </div> 
                        </> : ""
                    }
                    {
                        type == "tasks" ? <>
                        <div className="task_wrapper">
                        <div className="card_wrapper">
                            <div className="card">
                                <div className="card_created">
                                    <span><strong>Day:</strong> 1/29/2024</span>
                                    <span><strong>Houre:</strong> 12:26 AM</span>
                                </div>
                                <ul className="">
                                    <li><input type="checkbox" id="1" /> <label htmlFor="1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing.</label ></li>
                                    <li><input type="checkbox" id="2" /> <label htmlFor="2" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing.</label ></li>
                                    <li><input type="checkbox" id="3" /><label htmlFor="3"> Lorem ipsum dolor sit amet consectetur adipisicing.</label ></li>
                                    <li><input type="checkbox" id="4" /> <label htmlFor="4" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing.</label ></li>
                                </ul>

                                <div className="card_btns">
                                    <button> Yakunladingizmi? ishchi uchun</button>
                                    {/* <button>Tasdiqlandi admin uchun</button> */}
                                </div>
                            </div>
                            <div className="card">
                                <div className="card_created">
                                    <span><strong>Day:</strong> 1/29/2024</span>
                                    <span><strong>Houre:</strong> 12:26 AM</span>
                                </div>
                                <ul className="">
                                    <li><input type="checkbox" id="343" /> <label htmlFor="343">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing.</label ></li>
                                    <li><input type="checkbox" id="654" /> <label htmlFor="654" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing.</label ></li>
                                    <li><input type="checkbox" id="34" /><label htmlFor="34"> Lorem ipsum dolor sit amet consectetur adipisicing.</label ></li>
                                    <li><input type="checkbox" id="63" /> <label htmlFor="63" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing.</label ></li>
                                </ul>

                                <div className="card_btns">
                                    <button> Yakunladingizmi? ishchi uchun</button>
                                    {/* <button>Tasdiqlandi admin uchun</button> */}
                                </div>
                            </div>
                            <div className="card">
                                <div className="card_created">
                                    <span><strong>Day:</strong> 1/29/2024</span>
                                    <span><strong>Houre:</strong> 12:26 AM</span>
                                </div>
                                <ul className="">
                                    <li><input type="checkbox" id="12" /> <label htmlFor="12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing.</label ></li>
                                    <li><input type="checkbox" id="22" /> <label htmlFor="22" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing.</label ></li>
                                    <li><input type="checkbox" id="32" /><label htmlFor="32"> Lorem ipsum dolor sit amet consectetur adipisicing.</label ></li>
                                    <li><input type="checkbox" id="45" /> <label htmlFor="45" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing.</label ></li>
                                </ul>

                                <div className="card_btns">
                                    <button> Yakunladingizmi? ishchi uchun</button>
                                    {/* <button>Tasdiqlandi admin uchun</button> */}
                                </div>
                            </div>
                        </div>
                                <div className="create_card">
                            <button className="cretaer btn ">Vazifa yaratish</button>
                        </div>
                    </div>
                        </> : ""
                    }
                
                    <button className=" change_chat" onClick={()=>setType(type=="chats"?"tasks":"chats")}>Go { type =="tasks" ? "chat" : "tasks"}</button>

                    
                    
                </div>
            </div>
        </>
    );
};

export default MainPage;