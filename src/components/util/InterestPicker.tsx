import Pill from "./Pill.tsx";
import {useEffect, useState} from "react";
import {InterestCategory, InterestCategoryDefault} from "../../types/InterestCategory.tsx";
import * as network from "../../assets/ts/network.ts";

function InterestPicker({editable}: { editable: boolean }) {

    const [interestData, setInterestData] = useState<InterestCategory[]>(InterestCategoryDefault)

    async function getInterestCategories() {
        let data: any = await network.NetworkRequest("interest", "GET");

        if (data) {
            setInterestData(data);
        }
    }

    useEffect(() => {
        getInterestCategories().then();
    }, [])


    return (
        <div className="h-fit w-full grid grid-cols-1 gap-1">

            {interestData.map((category, index) => (
                <div key={index}>
                    <h5>{category.title}</h5>
                    <div className="flex gap-1 flex-wrap">
                        {category.interests.map((interest, index) => (
                            <Pill text={interest} editable={editable} active={false} key={index}/>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    )
}

export default InterestPicker
