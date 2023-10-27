function TableTemplate(props) {

    return (
        <tbody id="page1">
        {
            props.content.map((row) => (
                <tr>
                    <td>{row["id"]}</td>
                    <td>{row["name"]}</td>
                    <td>{row["coordinates"].x}</td>
                    <td>{row["coordinates"].y}</td>
                    <td>{row["creationDate"]}</td>
                    <td>{row["area"]}</td>
                    <td>{row["numberOfRooms"]}</td>
                    <td>{row["furnish"]}</td>
                    <td>{row["view"]}</td>
                    <td>{row["transport"]}</td>
                    <td>{row["house"].name}</td>
                    <td>{row["house"].year}</td>
                    <td>{row["house"].numberOfFlatsOnFloor}</td>
                    <td>{row["cost"]}</td>
                </tr>
            ))
        }
        </tbody>
    )
}

export default TableTemplate