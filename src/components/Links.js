import React from "react";

function Link(props) {
    return (
        <h3>Links</h3>,
        <a href={props.link}>{props.link}</a>

    )
}

export default Link;