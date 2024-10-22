import ViewWrapper from "../util/ViewWrapper.tsx";
import {HandThumbDownIcon, HandThumbUpIcon} from "@heroicons/react/24/solid";
import Pill from "../util/Pill.tsx";
import {useEffect, useRef, useState} from "react";
import * as network from "../../assets/ts/network.ts";
import {User, UserDefault} from "../../types/User.tsx";
import {getImage} from "../../assets/ts/utility.ts";

function FeedView() {

    const feedData = useRef<User[]>([UserDefault])
    const feedIndex = useRef<number>(0)

    const [profile, setProfile] = useState<User>(UserDefault);
    const [entered, setEntered] = useState(false);
    const [image, setImage] = useState(0);

    function nextPhoto() {
        setImage(image == profile.images.length - 1 ? 0 : image + 1);
    }

    async function getFeedData() {
        let data: any = await network.NetworkRequest("feed", "GET");

        if (data) {
            // TODO change temp fix
            let fData: any[] = [data]
            feedData.current = fData;

            console.log(data)

            setProfile(feedData.current[feedIndex.current]);
        }
    }

    useEffect(() => {
        getFeedData().then();
    }, [])

    return (
        <ViewWrapper>

            <div className="w-full h-full flex justify-center">

                <div className="w-fit h-full grid [grid-template-areas:'stack'] cursor-pointer"
                     onMouseEnter={() => setEntered(true)} onMouseLeave={() => setEntered(false)} onClick={nextPhoto}>

                    {profile && (
                        <>
                            <div className="[grid-area:stack] w-full h-full">
                                <img src={getImage(profile.images[image])}
                                     className="h-full pointer-events-none rounded-2xl"/>
                            </div>


                            <div className="[grid-area:stack] w-full h-full flex flex-col">

                                <div
                                    className="w-full select-none text-light font-bold py-3 px-2 text-shadow flex items-center gap-2">
                                    <span className="text-5xl tracking-wide">{profile.display_name}</span>
                                    <span className="text-3xl">({profile.age})</span>

                                    <div className="flex-grow"/>

                                    <span className="text-4xl text-green-500">{profile.rating}%</span>
                                </div>

                                <div className="flex-grow"/>

                                <div className="flex gap-1 py-2 px-2 flex-wrap-reverse">

                                    {profile.interests.map((category, i) =>
                                        category.interests.map((interest, x) => (
                                            <Pill text={interest} key={`${i}${x}`}/>
                                        ))
                                    )}

                                </div>

                                <div className="bg-light/50 rounded-b-2xl px-2 flex flex-col gap-2">

                                    <div
                                        className={`text-dark font-semibold overflow-auto ${entered ? "h-32" : "h-10"}`}>
                                        <span>{profile.description}</span>
                                    </div>

                                    <div className="flex justify-center pb-2">
                                        <div className="w-fit flex gap-5">

                                            <div
                                                className="feed-icon-container border-red-700 hover:border-red-600 text-red-700 hover:text-red-600 bg-red-200/50">
                                                <HandThumbDownIcon className="p-2 h-full w-full"/>
                                            </div>

                                            <div
                                                className="feed-icon-container border-green-700 hover:border-green-600 text-green-700 hover:text-green-600 bg-green-200/50">
                                                <HandThumbUpIcon className="p-2 h-full w-full"/>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </>
                    )}

                </div>

            </div>

        </ViewWrapper>
    )
}

export default FeedView
