import {useState} from "react";
import {fetchDeleteById} from "../utils/flats/api";

const DeleteById = ({updateContent, alertWithMessage}) => {
    const [value, setValue] = useState("")

    const onDeleteButtonClick = () => {
        fetchDeleteById(value, alertWithMessage)
            .then(r => updateContent())
    }

    return <details className="dropdown">
        <summary className="m-1 btn">Delete by id</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
                <div>
                    <div>
                        <textarea placeholder={"id"} value={value} onChange={e => setValue(e.target.value)}/>
                    </div>
                    <button className="btn btn-outline btn-warning" onClick={onDeleteButtonClick}>Delete</button>
                </div>
            </li>
        </ul>
    </details>
}

export default DeleteById