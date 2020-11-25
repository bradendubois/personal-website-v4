import Image from "next/image"
import Link from "next/link"

import {motionChild, motionContainer} from "../motions";

import style from "./ShowcaseDetails.module.scss"

export const ShowcaseDetails = ({ data }) => {

    return (
        <div className={style.showcaseDetails} {...motionContainer}>

            <div className={style.back} {...motionChild}>
                <Link href={"/showcase"}>Back</Link>
            </div>

            {data.links && <>
                <div className={style.links} {...motionChild}>
                    {data.links.map((link, i) => <Link key={i} href={link.href}><a>
                        <Image unsized src={link.image} alt={link.alt} />
                    </a></Link>)}
                </div>
            </>}

            {data.active && <>
                <div {...motionChild}>
                    <h4>Activity</h4>
                    <p>{data.active.start} - {data.active.end}</p>
                </div>
            </>}

            {data.collaborators && <>
                <div {...motionChild}>
                    <h4>Collaborator(s)</h4>
                    <ul>
                        {data.collaborators.map(collaborator => <li key={collaborator}>{collaborator}</li>)}
                    </ul>
                </div>
            </>}

            {data.related && <>
                <div {...motionChild}>
                    <h4>Related Links</h4>
                    <ul>
                        {data.related.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            </>}
        </div>
    )
}