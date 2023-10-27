import {useState} from "react";
import {fetchAllNumberOfRoomsSum} from "../utils/flats/api";

const AllNumberOFRoomsSum = ({updateContent}) => {

    const [value, setValue] = useState("")

    const onButtonClick = () => {
        fetchAllNumberOfRoomsSum(setValue).then(r => updateContent())
    }

    return <div>
        <span>All number of rooms sum</span>
        <textarea value={value} placeholder={"sum res"}/>
        <button onClick={onButtonClick}>All number of rooms sum</button>
    </div>
}

export default AllNumberOFRoomsSum