import {useState} from "react";
import {fetchUpdateById} from "../utils/flats/api";

const UpdateFlat = ({updateContent}) => {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [coordinates, setCoordinates] = useState({id: 0, x: "", y: ""})
    const [area, setArea] = useState("")
    const [numberOfRooms, setNumberOfRooms] = useState("")
    const [furnish, setFurnish] = useState("")
    const [view, setView] = useState("")
    const [transport, setTransport] = useState("")
    const [house, setHouse] = useState({id: 0, name: "", year: "", numberOfFlatsOnFloor: ""})
    const [cost, setCost] = useState("")

    const onUpdateButtonClick = () => {
        fetchUpdateById(
            id,
            {
            name: name,
            coordinates: coordinates,
            area: area,
            numberOfRooms: numberOfRooms,
            furnish: furnish,
            view: view,
            transport: transport,
            house: house,
            cost: cost,
        }).then(e => updateContent())
    }

    return <div>
        <span>Update user</span>
        <textarea value={id} onChange={e => setId(e.target.value)} placeholder={"id"}/>
        <textarea value={name} onChange={e => setName(e.target.value)} placeholder={"name"}/>
        <textarea value={coordinates.x} onChange={e => setCoordinates({id: 0, x: e.target.value, y: coordinates.y})}
                  placeholder={"coordinates.x"}/>
        <textarea value={coordinates.y} onChange={e => setCoordinates({id: 0, x: coordinates.x, y: e.target.value})}
                  placeholder={"coordinates.y"}/>
        <textarea value={area} onChange={e => setArea(e.target.value)} placeholder={"area"}/>
        <textarea value={numberOfRooms} onChange={e => setNumberOfRooms(e.target.value)} placeholder={"numberOfRooms"}/>
        <textarea value={furnish} onChange={e => setFurnish(e.target.value)} placeholder={"furnish"}/>
        <textarea value={view} onChange={e => setView(e.target.value)} placeholder={"view"}/>
        <textarea value={transport} onChange={e => setTransport(e.target.value)} placeholder={"transport"}/>
        <textarea value={house.name} onChange={e => setHouse({
            id: 0,
            name: e.target.value,
            year: house.year,
            numberOfFlatsOnFloor: house.numberOfFlatsOnFloor
        })} placeholder={"house.name"}/>
        <textarea value={house.year} onChange={e => setHouse({
            id: 0,
            name: house.name,
            year: e.target.value,
            numberOfFlatsOnFloor: house.numberOfFlatsOnFloor
        })} placeholder={"house.year"}/>
        <textarea value={house.numberOfFlatsOnFloor}
                  onChange={e => setHouse({
                      id: 0,
                      name: house.name,
                      year: house.year,
                      numberOfFlatsOnFloor: e.target.value
                  })}
                  placeholder={"house.numberOfFlatsOnFloor"}/>
        <textarea value={cost} onChange={e => setCost(e.target.value)} placeholder={"cost"}/>
        <button onClick={onUpdateButtonClick}>Update</button>
    </div>
}

export default UpdateFlat