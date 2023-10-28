import {useState} from "react";
import {fetchAllNumberOfRoomsSum} from "../utils/flats/api";

const AllNumberOFRoomsSum = ({updateContent, alertWithMessage}) => {

    const onButtonClick = () => {
        fetchAllNumberOfRoomsSum(alertWithMessage).then(r => updateContent())
    }

    return <details className="dropdown">
        <summary className="m-1 btn">All number of rooms sum</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
                <div>
                    {/*<span>All number of rooms sum</span>*/}
                    <button className={"btn btn-outline btn-success"} onClick={onButtonClick}>All number of rooms sum</button>
                </div>
            </li>
        </ul>
    </details>
}

export default AllNumberOFRoomsSum