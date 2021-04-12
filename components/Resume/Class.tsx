import React from "react";

const Class = ({ subject, course, name }) => {

    const url = `${process.env.catalogue_prefix}${subject}-${course}`

    return (
        <li><a href={url}>{name}</a></li>
    )
}

export default Class