import ViewWrapper from "../util/ViewWrapper.tsx";

import sample1 from "../../assets/img/sample1.jpg"
import {HandThumbDownIcon, HandThumbUpIcon} from "@heroicons/react/24/solid";

function FeedView() {

    return (
        <ViewWrapper>

            <div className="w-full h-full flex justify-center">

                <div className="w-fit h-full grid [grid-template-areas:'stack']">

                    <div className="[grid-area:stack] w-full h-full">
                        <img src={sample1} className="h-full pointer-events-none rounded-2xl"/>
                    </div>

                    <div className="[grid-area:stack] w-full h-full flex flex-col justify-end">

                        <div className="flex items-center font-bold pb-3 px-2 gap-2">
                            <span className="text-light text-5xl tracking-wide">Daniel</span>
                            <span className="text-3xl text-green-500 ">(95% Match)</span>
                        </div>

                        <div className="bg-light/50 rounded-b-2xl px-2 flex flex-col gap-2">

                            <div className="h-20">
                                I like stuff!
                                Something more here to talk about!
                            </div>

                            <div className="h-20 border-y-2 border-primary">
                                Here will be the filter data
                            </div>

                            <div className="flex justify-center py-2">
                                <div className="w-fit flex gap-5">

                                    <div
                                        className="feed-icon-container border-red-700 hover:border-red-600 text-red-700 hover:text-red-600 bg-red-200/50">
                                        <HandThumbDownIcon className="p-4 h-full w-full"/>
                                    </div>

                                    <div
                                        className="feed-icon-container border-green-700 hover:border-green-600 text-green-700 hover:text-green-600 bg-green-200/50">
                                        <HandThumbUpIcon className="p-4 h-full w-full"/>
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
