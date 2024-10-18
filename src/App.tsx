import {useState} from "react";

import NavBar from "./components/nav/NavBar.tsx";
import ChatView from "./components/views/ChatView.tsx";
import FeedView from "./components/views/FeedView.tsx";
import ProfileView from "./components/views/ProfileView.tsx";
import PrefView from "./components/views/PrefView.tsx";
import StatView from "./components/views/StatView.tsx";

function App() {

    const [view, setView] = useState<Number>(0)

    function NavBarCallback(v: number) {
        setView(v);
    }

    return (
        <div className="h-screen w-screen flex justify-center bg-light">

            <div className="w-[100%] h-full flex">
                <div className="w-fit h-full">
                    <NavBar updateCallback={NavBarCallback}/>
                </div>

                <div className="w-full h-full flex-grow grid grid-cols-2">

                    {view == 0 && (
                        <FeedView/>
                    ) || view == 1 && (
                        <ProfileView/>
                    ) || view == 2 && (
                        <ChatView/>
                    ) || view == 3 && (
                        <PrefView/>
                    ) || view == 4 && (
                        <StatView/>
                    )}

                    {/* TODO chat should be hidden in mobile */}
                    {(
                        <ChatView/>
                    )}

                </div>
            </div>

        </div>
    )
}

export default App
