import {useState} from "react";
import {fetchAllNumberOfRoomsSum} from "../utils/flats/api";

const AllNumberOFRoomsSum = ({updateContent}) => {

    const onButtonClick = () => {
        fetchAllNumberOfRoomsSum().then(r => updateContent())
    }

    return <div>
        {/*<span>All number of rooms sum</span>*/}
        <button onClick={onButtonClick}>All number of rooms sum</button>
    </div>
}

export default AllNumberOFRoomsSum