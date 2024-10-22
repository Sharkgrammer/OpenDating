import RoundImage from "../util/RoundImage.tsx";
import {Like} from "../../types/LikeCombined.tsx";
import {getImage} from "../../assets/ts/utility.ts";

function ChatOverview({message, onClick}: {
    message: Like,
    onClick: Function
}) {

    return (
        <div
            className="w-full h-fit flex gap-2 items-center p-1 select-none cursor-pointer bg-light rounded-xl hover:bg-light-dark"
            onClick={() => onClick(message)}>

            <RoundImage image={getImage(message.prof_image)}/>

            <div className="flex flex-col">
                <span className="text-xl font-bold">{message.display_name}</span>
                <span>{message.last_message}</span>
            </div>

        </div>
    )
}

export default ChatOverview
