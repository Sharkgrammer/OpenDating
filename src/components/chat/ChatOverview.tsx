import RoundImage from "../util/RoundImage.tsx";

function ChatOverview({message, name, image, onClick}: { message: string, name: string, image: string, onClick:Function }) {

    return (
        <div className="w-full h-fit flex gap-2 items-center p-1 select-none cursor-pointer bg-light rounded-xl hover:bg-light-dark" onClick={() => onClick("xxxxx")}>

            <RoundImage image={image}/>

            <div className="flex flex-col">
                <span className="text-xl font-bold">{name}</span>
                <span>{message}</span>
            </div>

        </div>
    )
}

export default ChatOverview
