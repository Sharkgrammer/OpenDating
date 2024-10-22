import ViewWrapper from "../util/ViewWrapper.tsx";
import ChatOverview from "../chat/ChatOverview.tsx";
import RoundImage from "../util/RoundImage.tsx";
import {useEffect, useState} from "react";
import ChatWindow from "../chat/ChatWindow.tsx";
import {Like, LikeCombined, LikeCombinedDefault, LikeDefault} from "../../types/LikeCombined.tsx";
import * as network from "../../assets/ts/network.ts";
import {getImage} from "../../assets/ts/utility.ts";

function ChatView() {

    const [activeMessage, setActiveMessage] = useState<Like>(LikeDefault);
    const [likeData, setLikeData] = useState<LikeCombined>(LikeCombinedDefault)

    function openWindow(like: Like) {
        setActiveMessage(like);
    }

    function closeWindow() {
        setActiveMessage(LikeDefault);
    }

    async function getLikeData() {
        let data: any = await network.NetworkRequest("like", "GET");

        if (data) {
            setLikeData(data);
        }
    }

    useEffect(() => {
        getLikeData().then();
    }, [])

    return (
        <ViewWrapper>

            {activeMessage.uid.length > 0 ? (
                <ChatWindow like={activeMessage} close={closeWindow}/>
            ) : (
                <div className="w-full h-full flex flex-col gap-2">

                    {/* People who have liked you */}
                    <div className="">
                        <h1>Who likes you!</h1>
                        <div className="w-full flex gap-2 py-2 text-center font-semibold">
                            {likeData.likes.map((like, index) => (
                                <div className="cursor-pointer" key={index}>
                                    <RoundImage image={getImage(like.prof_image)}/>
                                    <span>{like.display_name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h1 className="">Messages</h1>

                        <div className="w-full flex flex-col gap-2 py-2">
                            {likeData.messages.map((message, index) => (
                                <ChatOverview message={message} key={index} onClick={openWindow}/>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </ViewWrapper>
    )
}

export default ChatView
