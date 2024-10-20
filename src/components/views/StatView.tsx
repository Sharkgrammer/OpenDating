import ViewWrapper from "../util/ViewWrapper.tsx";
import * as network from "../../assets/ts/network.ts";
import {useEffect, useState} from "react";
import {Stat, StatDefault} from "../../types/Stat.tsx";
import {VictoryLabel, VictoryPie, VictoryTheme, VictoryPortal} from "victory";

function StatView() {

    const [statData, setStatData] = useState<Stat>(StatDefault)

    async function getStatData() {
        let data: any = await network.NetworkRequest("stat", "GET");

        if (data) {
            setStatData(data);
        }
    }

    useEffect(() => {
        getStatData().then();
    }, [])


    return (
        <ViewWrapper>
            <div className="w-full h-full flex flex-col gap-2">

                <h1>Your Stats</h1>

                <div className="grid grid-cols-2">
                    <div className="col-span-1 flex flex-col items-center">
                        <h5 className="text-2xl">People interested in you</h5>

                        <div className="h-fit w-fit capitalize select-none -mt-5">
                            <VictoryPie data={statData.top_interests} x="title" y="count" theme={VictoryTheme.material}
                                        colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                                        labelComponent={<VictoryPortal><VictoryLabel/></VictoryPortal>}/>
                        </div>

                    </div>

                    <div className="col-span-1 flex flex-col items-center">
                        <h5 className="text-2xl">Your Likes to Dislikes</h5>

                        <div className="h-fit w-fit capitalize -mt-5">

                            <VictoryPie x="title" y="value" theme={VictoryTheme.material} colorScale={"cool"}
                                        data={[{"title": "likes", "value": statData.likes}, {
                                            "title": "dislikes",
                                            "value": statData.dislikes
                                        }]}
                            />

                        </div>

                    </div>
                </div>

            </div>
        </ViewWrapper>
    )
}

export default StatView
