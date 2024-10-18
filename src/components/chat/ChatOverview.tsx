import RoundImage from "../util/RoundImage.tsx";

function ChatOverview({message, name, image}: { message: string, name: string, image: string }) {

    return (
        <div className="w-full h-fit flex gap-2 items-center p-1 select-none cursor-pointer bg-light rounded-xl hover:bg-light-dark">

            <RoundImage image={image}/>

            <div className="flex flex-col">
                <span className="text-xl font-bold">{name}</span>
                <span>{message}</span>
            </div>

        </div>
    )
}

export default ChatOverview
