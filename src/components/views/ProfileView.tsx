import ViewWrapper from "../util/ViewWrapper.tsx";
import InterestPicker from "../util/InterestPicker.tsx";
import {User, UserDefault} from "../../types/User.tsx";
import {useEffect, useState} from "react";
import * as network from "../../assets/ts/network.ts";

function ProfileView() {

    const [profileData, setProfileData] = useState<User>(UserDefault)

    async function getProfileData() {
        let data: any = await network.NetworkRequest("user", "GET");

        if (data) {
            setProfileData(data);
        }
    }

    useEffect(() => {
        getProfileData().then();
    }, [])

    return (
        <ViewWrapper>
            <div className="w-full h-full flex flex-col gap-2 overflow-y-auto">

                <div>
                    <h1>{profileData.display_name}'s Profile</h1>

                    <p>{profileData.description}</p>
                </div>

                <div>
                    <h1>Interests</h1>

                    <InterestPicker/>
                </div>

                <div>
                    <h1>Photos</h1>

                    <div className="grid grid-cols-3 gap-2 py-2">
                        {profileData.images.map((image, index) => (
                            <img src={`${import.meta.env.VITE_BACKEND_BASE}${image}`} className="rounded-2xl" key={index}/>
                        ))}
                    </div>
                </div>

                <div>

                </div>

            </div>
        </ViewWrapper>
    )
}

export default ProfileView
