import ViewWrapper from "../util/ViewWrapper.tsx";
import InterestPicker from "../util/InterestPicker.tsx";

function PrefView() {

    return (
        <ViewWrapper>

            <div className="h-full w-full">

                <h1>Who are you looking for?</h1>

                <InterestPicker />

            </div>

        </ViewWrapper>
    )
}

export default PrefView
