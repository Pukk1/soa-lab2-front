import {useState} from "react";
import {fetchFlatById} from "../utils/flats/api";

const FindById = ({flats, setFlats, updateContent}) => {

    const [value, setValue] = useState("")

    const onFindClick = () => {
        fetchFlatById(value, setFlats)
    }

    const onResetClick = () => {
        setValue("")
        updateContent()
    }

    return <dev>
        <span>find by id</span>
        <textarea placeholder={"id"} value={value} onChange={e => setValue(e.target.value)}></textarea>
        <button onClick={onFindClick}>find</button>
        <button onClick={onResetClick}>reset</button>
    </dev>
}

export default FindById