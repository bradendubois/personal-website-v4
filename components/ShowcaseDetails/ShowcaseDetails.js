import Image from "next/image"
import Link from "next/link"

import { motion } from "framer-motion"

import {motionChild, motionContainer} from "../motions";

import style from "./ShowcaseDetails.module.scss"

export const ShowcaseDetails = ({ data }) => {

    return (
        <div className={style.showcaseDetails} {...motionContainer}>

            <motion.div className={style.back} {...motionChild} whileHover={{scale: 1.1}}>
                <Link href={"/showcase"}>Back</Link>
            </motion.div>

            {data.links && <>
                <motion.div className={style.links} {...motionChild}>
                    {data.links.map((link, i) => <Link key={i} href={link.href}><a>
                        <img src={link.image} alt={link.alt} />
                    </a></Link>)}
                </motion.div>
            </>}

            {data.active && <>
                <motion.div {...motionChild}>
                    <h4>Activity</h4>
                    <p>{data.active.start} - {data.active.end}</p>
                </motion.div>
            </>}

            {data.collaborators && <>
                <motion.div {...motionChild}>
                    <h4>Collaborator(s)</h4>
                    <ul>
                        {data.collaborators.map(collaborator => <li key={collaborator}>{collaborator}</li>)}
                    </ul>
                </motion.div>
            </>}

            {data.related && <>
                <motion.div {...motionChild}>
                    <h4>Related Links</h4>
                    <ul>
                        {data.related.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </motion.div>
            </>}
        </div>
    )
}