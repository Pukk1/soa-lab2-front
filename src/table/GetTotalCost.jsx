import {fetchAgencyGetTotalCost} from "../utils/agency/api";

const GetTotalCost = () => {


    const onButtonClick = () => {
        fetchAgencyGetTotalCost()
    }

    return <details className="dropdown">
        <summary className="m-1 btn">Get Total Cost</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
                <div>
                    <button className={"btn btn-outline btn-success"} onClick={onButtonClick}>Get Total Cost</button>
                </div>
            </li>
        </ul>
    </details>
}

export default GetTotalCost