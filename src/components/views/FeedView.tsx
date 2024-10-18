import ViewWrapper from "../util/ViewWrapper.tsx";

import sample1 from "../../assets/img/sample1.jpg"
import sample2 from "../../assets/img/sample2.jpg"
import sample3 from "../../assets/img/sample3.jpg"
import sample4 from "../../assets/img/sample4.jpg"

import {HandThumbDownIcon, HandThumbUpIcon} from "@heroicons/react/24/solid";
import Pill from "../util/Pill.tsx";
import {useState} from "react";

function FeedView() {

    const [entered, setEntered] = useState(false);
    const [image, setImage] = useState(0);

    let photos = [sample1, sample2, sample3, sample4]

    function nextPhoto() {
        setImage(image == photos.length - 1 ? 0 : image + 1);
    }

    return (
        <ViewWrapper>

            <div className="w-full h-full flex justify-center">

                <div className="w-fit h-full grid [grid-template-areas:'stack'] cursor-pointer"
                     onMouseEnter={() => setEntered(true)} onMouseLeave={() => setEntered(false)} onClick={nextPhoto}>

                    <div className="[grid-area:stack] w-full h-full">
                        <img src={photos[image]} className="h-full pointer-events-none rounded-2xl"/>
                    </div>


                    <div className="[grid-area:stack] w-full h-full flex flex-col">

                        <div
                            className="w-full select-none text-light font-bold py-3 px-2 text-shadow flex items-center gap-2">
                            <span className="text-5xl tracking-wide">Daniel</span>
                            <span className="text-3xl">(26)</span>

                            <div className="flex-grow"/>

                            <span className="text-4xl text-green-500">95%</span>
                        </div>

                        <div className="flex-grow"/>

                        <div className="flex gap-1 py-2 px-2">
                            <Pill text="sharks"/>
                            <Pill text="tech"/>
                            <Pill text="books"/>
                            <Pill text="pizza"/>
                            <Pill text="coding"/>

                        </div>

                        <div className="bg-light/50 rounded-b-2xl px-2 flex flex-col gap-2">

                            <div className={`text-dark font-semibold overflow-auto ${entered ? "h-32" : "h-10"}`}>
                                <span>I like stuff! Something more here to talk about!</span>
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

                </div>

            </div>

        </ViewWrapper>
    )
}

export default FeedView
