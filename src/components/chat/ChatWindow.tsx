import {PaperAirplaneIcon} from "@heroicons/react/24/solid";
import {ArrowLeftCircleIcon} from "@heroicons/react/24/outline";

import RoundImage from "../util/RoundImage.tsx";

function ChatWindow({image, title, close}: { title: string, image: string, close: any }) {

    return (
        <div className="w-full h-full flex flex-col">

            <div className="flex items-center w-full gap-2">

                <ArrowLeftCircleIcon className="h-20 w-20 cursor-pointer text-primary hover:text-primary-dark"
                                     onClick={close}/>

                <RoundImage image={image} size="h-20 w-20" className="cursor-pointer"/>

                <h1 className="h-fit w-full border-0">{title}</h1>
            </div>


            <div className="flex-grow flex justify-center items-center">
                <span className="text-dark/50 select-none">There's nothing here yet...</span>
            </div>

            <div className="flex items-center p-2">

                <input className="h-12" placeholder="Say something here!" type="text"/>

                <PaperAirplaneIcon className="h-14 text-primary hover:text-primary-dark cursor-pointer"/>

            </div>

        </div>
    )
}

export default ChatWindow
