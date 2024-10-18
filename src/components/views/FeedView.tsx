import ViewWrapper from "../util/ViewWrapper.tsx";

import sample1 from "../../assets/img/sample1.jpg"

function FeedView() {

    return (
        <ViewWrapper>

            <div className="w-full h-full flex justify-center">

                <div className="w-fit h-full grid [grid-template-areas:'stack']">

                    <div className="[grid-area:stack] w-full h-full">
                        <img src={sample1} className="h-full pointer-events-none rounded-2xl" />
                    </div>

                    <div className="[grid-area:stack] w-full h-full flex flex-col justify-end">

                        <div className="flex items-center font-bold pb-3 px-2 gap-2">
                            <span className="text-light text-5xl tracking-wide">Daniel</span>
                            <span className="text-3xl text-green-500 ">(95% Match)</span>
                        </div>

                        <div className="bg-light/50 rounded-b-2xl px-2">
                            <h1 className="">I like stuff!</h1>

                            <div>
                                Something more here to talk about!
                            </div>

                            <div className="h-52">

                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </ViewWrapper>
    )
}

export default FeedView
