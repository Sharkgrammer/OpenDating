import {
    AdjustmentsHorizontalIcon,
    Bars3Icon,
    ChartBarIcon,
    ChatBubbleLeftRightIcon, HeartIcon,
    UserIcon,
    ArrowLeftEndOnRectangleIcon
} from "@heroicons/react/24/solid";
import {logout} from "../../assets/ts/utility.ts";

function NavBar({updateCallback}: { updateCallback: Function }) {

    // TODO manage state with the bars3 icon to allow for expansion of the nav bar

    // TODO, mobile :(

    return (
        <div className="w-24 h-full">

            <div className="h-full w-full flex justify-center items-center">

                <div className="flex flex-col gap-5 max-w-20 px-2">
                    <div className="nav-icon-container hidden">
                        <Bars3Icon className="nav-icon"/>
                    </div>

                    <div className="nav-icon-container" onClick={() => updateCallback(0)}>
                        <HeartIcon className="icon"/>
                    </div>

                    <div className="nav-icon-container" onClick={() => updateCallback(1)}>
                        <UserIcon className="icon"/>
                    </div>

                    {/* TODO Chat should exist in mobile context */}
                    <div className="nav-icon-container " onClick={() => updateCallback(2)}>
                        <ChatBubbleLeftRightIcon className="icon"/>
                    </div>

                    <div className="nav-icon-container" onClick={() => updateCallback(3)}>
                        <AdjustmentsHorizontalIcon className="icon"/>
                    </div>

                    <div className="nav-icon-container" onClick={() => updateCallback(4)}>
                        <ChartBarIcon className="icon"/>
                    </div>

                    <div className="nav-icon-container" onClick={() => logout()}>
                        <ArrowLeftEndOnRectangleIcon className="icon"/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default NavBar
