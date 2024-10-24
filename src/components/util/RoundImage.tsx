function RoundImage({image, size = "medium", className}: { image: string, size?: string, className?: string }) {

    function getSize() {
        switch (size) {
            case "small":
                return "h-14 w-14";
            case "medium":
                return "h-20 w-20";
            case "big":
                return "h-32 w-32";
            default:
                return size;
        }
    }

    return (
        <div className={`${getSize()} ${className} flex items-center`}>
            <img src={image} className="rounded-full pointer-events-none"/>
        </div>
    )
}

export default RoundImage
