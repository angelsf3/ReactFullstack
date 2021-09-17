import React from "react";

function Person({ person }) {
    return(
        <li>{person.name} {person.telephone}</li>
    )
}

export default Person
