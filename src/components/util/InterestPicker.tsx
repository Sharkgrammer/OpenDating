import Pill from "./Pill.tsx";

function InterestPicker() {

    return (
        <div className="h-fit w-full grid grid-cols-1 gap-1">

            <div>
                <h5>Books</h5>
                <div className="flex gap-1 flex-wrap">
                    <Pill text="Fantasy" editable={true} active={true}/>
                    <Pill text="Romance" editable={true} active={false}/>
                    <Pill text="Fiction" editable={true} active={false}/>
                </div>
            </div>

            <div>
                <h5>Sport</h5>
                <div className="flex gap-1 flex-wrap">
                    <Pill text="Football" editable={true} active={false}/>
                    <Pill text="Hockey" editable={true} active={false}/>
                    <Pill text="Eating" editable={true} active={false}/>
                </div>
            </div>

            <div>
                <h5>Gaming</h5>
                <div className="flex gap-1 flex-wrap">
                    <Pill text="MMO" editable={true} active={false}/>
                    <Pill text="RPG" editable={true} active={false}/>
                    <Pill text="Sharks" editable={true} active={false}/>
                </div>
            </div>

        </div>
    )
}

export default InterestPicker
