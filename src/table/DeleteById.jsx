import {useState} from "react";
import {fetchDeleteById} from "../utils/flats/api";

const DeleteById = ({updateContent}) => {
    const [value, setValue] = useState("")

    const onDeleteButtonClick = () => {
        fetchDeleteById(value)
            .then(r => updateContent())
    }

    return <div>
        <span>delete by id</span>
        <textarea placeholder={"id"} value={value} onChange={e => setValue(e.target.value)}/>
        <button onClick={onDeleteButtonClick}>delete</button>
    </div>
}

export default DeleteById