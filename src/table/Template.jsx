import './css/Template.css'
import {useEffect, useState} from "react";
import TableContent from "./Content";
import Pagination from "./Pagination";
import FindById from "./FindById";
import DeleteById from "./DeleteById";
import AddFlat from "./AddFlat";
import UpdateFlat from "./UpdateFlat";
import DeleteOneByTransport from "./DeleteOneByTransport";
import AllNumberOFRoomsSum from "./AllNumberOfRoomsSum";
import ByStartSubName from "./ByStartSubName";
import GetCheapest from "./GetCheapest";
import GetTotalCost from "./GetTotalCost";
import {fetchFlats} from "../utils/flats/api";

const Template = ({alertWithMessage}) => {

    const [currentPage, setCurrentPage] = useState(0)
    const [pagesNumber, setPagesNumber] = useState(0)
    const [sortBy, setSortBy] = useState({field: "id", order: "asc"})
    const [filters, setFilters] = useState("")
    const [flats, setFlats] = useState([])

    const [idFilter, setIdFilter] = useState("")
    const [nameFilter, setNameIdFilter] = useState("")
    const [coordinatesXFilter, setCoordinatesXFilter] = useState("")
    const [coordinatesYFilter, setCoordinatesYFilter] = useState("")
    const [creationDateFilter, setCreationDateFilter] = useState("")
    const [areaFilter, setAreaFilter] = useState("")
    const [numberOfRoomsFilter, setNumberOfRoomsFilter] = useState("")
    const [furnishFilter, setFurnishFilter] = useState("")
    const [viewFilter, setViewFilter] = useState("")
    const [transportFilter, setTransportFilter] = useState("")
    const [houseNameFilter, setHouseNameFilter] = useState("")
    const [houseYearFilter, setHouseYearFilter] = useState("")
    const [houseNumberOfFlatsOnFloorFilter, setHouseNumberOfFlatsOnFloorFilter] = useState("")
    const [coastFilter, setCoastFilter] = useState("")

    // const setFilter = (attribute, text) => {
    //     set
    // }

    const updateContent = () => {
        let filt = ""
        if (idFilter !== "") {
            filt += idFilter + ","
        }
        if (nameFilter !== "") {
            filt += idFilter + ","
        }
        filt = filt.slice(0, -1)
        console.log(filt)
        fetchFlats(setFlats, setPagesNumber, sortBy, currentPage, filt, alertWithMessage);
    }

    useEffect(() => {
        updateContent()
    }, [currentPage, sortBy]);

    const onSortClick = (field) => {
        if (field === sortBy.field) {
            if (sortBy.order === "asc") {
                setSortBy({field: sortBy.field, order: "desc"})
            } else {
                setSortBy({field: sortBy.field, order: "asc"})
            }
        } else {
            setSortBy({field: field, order: "asc"})
        }
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                    <tr>
                        {
                            [
                                "id",
                                "name",
                                "coordinates.x",
                                "coordinates.y",
                                "creationDate",
                                "area",
                                "numberOfRooms",
                                "furnish",
                                "view",
                                "transport",
                                "house.name",
                                "house.year",
                                "house.numberOfFlatsOnFloor",
                                "cost"
                            ].map(it => (
                                <th onClick={() => onSortClick(it)}>{it}</th>
                            ))
                        }
                    </tr>
                    </thead>
                    <TableContent content={flats}/>
                </table>
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pagesNumber={pagesNumber}/>

            <FindById flats={flats} setFlats={setFlats} updateContent={updateContent}
                      alertWithMessage={alertWithMessage}/>

            <details className="dropdown">
                <summary className="m-1 btn">Filters</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li>
                        <div>
                            <div>
                                <span>id</span>
                                <textarea onChange={e => {
                                    if (e.target.value !== "") {
                                        console.log(e.target.value)
                                        setIdFilter("id" + e.target.value)
                                    } else {
                                        setIdFilter("")
                                    }
                                }}/>
                            </div>
                            <div>
                                <span>name</span>
                                <textarea onChange={e => {
                                    if (e.target.value !== "") {
                                        console.log(e.target.value)
                                        setNameIdFilter("name" + e.target.value)
                                    } else {
                                        setIdFilter("")
                                    }
                                }}/>
                            </div>
                            {/*"coordinates.x",*/}
                            {/*"coordinates.y",*/}
                            {/*"creationDate",*/}
                            {/*"area",*/}
                            {/*"numberOfRooms",*/}
                            {/*"furnish",*/}
                            {/*"view",*/}
                            {/*"transport",*/}
                            {/*"house.name",*/}
                            {/*"house.year",*/}
                            {/*"house.numberOfFlatsOnFloor",*/}
                            {/*"cost"*/}
                            <button className={"btn btn-outline btn-success"} onClick={updateContent}>Use filters
                            </button>
                        </div>
                    </li>
                </ul>
            </details>
            <DeleteById updateContent={updateContent} alertWithMessage={alertWithMessage}/>
            <AddFlat updateContent={updateContent} alertWithMessage={alertWithMessage}/>
            <UpdateFlat updateContent={updateContent} alertWithMessage={alertWithMessage}/>
            <DeleteOneByTransport updateContent={updateContent} alertWithMessage={alertWithMessage}/>
            <ByStartSubName updateContent={updateContent} setFlats={setFlats} alertWithMessage={alertWithMessage}/>
            {/*<GetCheapest setFlats={setFlats} updateContent={updateContent} alertWithMessage={alertWithMessage}/>*/}
            <AllNumberOFRoomsSum updateContent={updateContent} alertWithMessage={alertWithMessage}/>
            <GetTotalCost alertWithMessage={alertWithMessage}/>
        </div>
    )
}

export default Template;