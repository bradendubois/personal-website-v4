import React from "react";

const Class = ({name}) => {

    const s = name.split(" - ")
    const url = process.env.catalogue_prefix + s[0].replace(" ", "-")

    return (
        <li><a href={url}>{s[1]}</a></li>
    )
}

export default Class