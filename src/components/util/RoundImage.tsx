function RoundImage({image, size = "medium"}: { image: string, size?: string }) {

    function getSize() {
        switch (size) {
            case "small":
                return "h-14 w-14"
            case "medium":
                return "h-20 w-20"
            case "big":
                return "h-32 w-32"
            default:
                return "h-20 w-20"
        }
    }

    return (
        <img src={image} className={`rounded-full pointer-events-none ${getSize()}`}/>
    )
}

export default RoundImage
