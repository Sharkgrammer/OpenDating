import ViewWrapper from "../util/ViewWrapper.tsx";
import me from "../../assets/img/sample1.jpg"
import me2 from "../../assets/img/sample2.jpg"
import me3 from "../../assets/img/sample3.jpg"
import InterestPicker from "../util/InterestPicker.tsx";

function ProfileView() {

    return (
        <ViewWrapper>
            <div className="w-full h-full flex flex-col gap-2 overflow-y-auto">

                <div>
                    <h1>Daniel's Profile</h1>

                    <p>Some text shall go here. Talking about things!</p>
                </div>

                <div>
                    <h1>Interests</h1>

                    <InterestPicker/>
                </div>

                <div>
                    <h1>Photos</h1>

                    <div className="grid grid-cols-3 gap-2 py-2">
                        <img src={me} className="rounded-2xl"/>
                        <img src={me2} className="rounded-2xl"/>
                        <img src={me3} className="rounded-2xl"/>
                    </div>
                </div>

                <div>

                </div>

            </div>
        </ViewWrapper>
    )
}

export default ProfileView
