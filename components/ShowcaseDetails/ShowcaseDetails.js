import Image from "next/image"
import Link from "next/link"

import style from "./ShowcaseDetails.module.scss"

export const ShowcaseDetails = ({ data }) => {

    return (
        <div className={style.showcaseDetails}>
            {data.links && <>
                <div>
                    {data.links.map((link, i) => <Link key={i} href={link.href}><a>
                        <Image unsized src={link.image} alt={link.alt} />
                    </a></Link>)}
                </div>
            </>}

            {data.active && <>
                <div>
                    <h4>Activity</h4>
                    <p>{data.active.start} - {data.active.end}</p>
                </div>
            </>}

            {data.collaborators && <>
                <div>
                    <h4>Collaborator(s)</h4>
                    <ul>
                        {data.collaborators.map(collaborator => <li key={collaborator}>{collaborator}</li>)}
                    </ul>
                </div>
            </>}

            {data.related && <>
                <div>
                    <h4>Related Links</h4>
                    <ul>
                        {data.related.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            </>}
        </div>
    )
}