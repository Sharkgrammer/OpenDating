function Pill({text}: { text: string }) {

    return (
        <div className="rounded-2xl bg-dark-light/70 px-3 py-1 capitalize select-none font-semibold">
             <span className="text-white text-sm">{text}</span>
        </div>
    )
}

export default Pill
