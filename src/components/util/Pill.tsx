import {MinusIcon, PlusIcon} from "@heroicons/react/24/solid";

function Pill({text, editable, active, onClick}: {
    text: string,
    editable?: boolean,
    active?: boolean,
    onClick?: any
}) {

    return (
        <div className={`rounded-2xl text-light gap-2 flex items-center bg-dark-light/70 px-3 py-1 
                ${editable && "cursor-pointer hover:text-light-dark"}`} onClick={onClick}>

            <span className="text-sm capitalize select-none font-semibold">{text}</span>

            {editable && (
                active ? (
                    <MinusIcon className="h-5 w-5"/>
                ) : (
                    <PlusIcon className="h-5 w-5"/>
                )
            )}

        </div>
    )
}

export default Pill
