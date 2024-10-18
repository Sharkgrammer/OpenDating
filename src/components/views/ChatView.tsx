import ViewWrapper from "../util/ViewWrapper.tsx";
import square2 from "../../assets/img/square2.jpg"
import square3 from "../../assets/img/square3.jpg"
import square4 from "../../assets/img/square4.jpg"
import ChatOverview from "../chat/ChatOverview.tsx";
import RoundImage from "../util/RoundImage.tsx";
import {useState} from "react";
import ChatWindow from "../chat/ChatWindow.tsx";

function ChatView() {

    const [userID, setUserID] = useState("");

    function openWindow(id: string) {
        setUserID(id);
    }

    function closeWindow() {
        setUserID("");
    }

    return (
        <ViewWrapper>

            {userID ? (
                <ChatWindow title="Pam" image={square3} close={closeWindow}/>
            ) : (
                <div className="w-full h-full flex flex-col gap-2">

                    {/* People who have liked you */}
                    <div className="">
                        <h1>Who likes you!</h1>
                        <div className="w-full flex gap-2 py-2 text-center font-semibold">

                            <div>
                                <RoundImage image={square2}/>
                                <span>Jim</span>
                            </div>
                            <div>
                                <RoundImage image={square3}/>
                                <span>Pam</span>
                            </div>
                            <div>
                                <RoundImage image={square4}/>
                                <span>Micheal</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="">Messages</h1>

                        <div className="w-full flex flex-col gap-2 py-2">
                            <ChatOverview message="That's such a cool thing to say!" name="Pam" image={square3}
                                          onClick={openWindow}/>
                            <ChatOverview message="Hey how are you!" name="Micheal" image={square4}
                                          onClick={openWindow}/>
                            <ChatOverview message="I have lots to say!" name="Jim" image={square2}
                                          onClick={openWindow}/>
                        </div>
                    </div>
                </div>
            )}
        </ViewWrapper>
    )
}

export default ChatView
