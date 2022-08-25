import { useEffect, useState } from "react";
import Api from "../../config/Api";
import { useUserContext } from "../../contexts/userContext";
import { App } from "../apps/AppsList";

export interface Trial {
    ID: number | undefined;
    app: App;
    name: string;
    url: string;
    description: string;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string;
}

const TrialsList = () => {
    const [trials, setTrials] = useState<Trial[]>([]);

    const { reload }: any = useUserContext();

    useEffect(() => {
        (
            async () => {
                try {
                    const { data } = await Api.get('/apps');
                    if (data) {
                        setTrials(data);
                        console.log(data);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        )()
    }, [reload]);

    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
                {trials.map((trial: Trial) => (
                    <li key={trial.ID}>
                        {/* <TrialListItem trial={trial} /> */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TrialsList;