import {useState, useEffect} from "react"
import {motion} from "framer-motion";
import useSWR from "swr";

import Highlight from "react-highlight";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5
        }
    }
}

const child = {
    hidden: {
        opacity: 0,
        y: -20
    },
    show: {
        opacity: 1,
        y: 0
    }
}

export const GithubProject = ({ repository }) => {

    const { data, error } = useSWR(`/api/github/repository/${repository}`, fetch)

    const [json, setJSON] = useState()

    useEffect(() => {
        data?.json().then(r => {
            setJSON(r.data)
            console.log(r.data)
        })
    }, [data])

    if (error) return <div>NOT A REPO</div>

    return (
        <div>
            <motion.div
                variants={container}
                initial={"hidden"}
                animate={"show"}
            >
                <motion.h1
                    className={`${repository ? "loaded" : "loading"}`}
                    variants={child}
                >{repository}</motion.h1>

                {json ?

                <motion.p className={`${json ? "loaded" : "loading"}`}
                                   variants={child}
                >{json.description || "Loading..."}</motion.p>: <p>Loading</p>}


                {json &&
                <motion.div variants={container}>

                    <motion.div variants={child}>Clone</motion.div>

                    <motion.div variants={child}>
                        <h3>Git</h3>
                        <Highlight language="shell">{`git clone ${json.git_url}`}</Highlight>
                    </motion.div>

                    <motion.div variants={child}>
                        <h3>SVN</h3>
                        <Highlight language="shell">{`svn co ${json.svn_url}`}</Highlight>
                    </motion.div>

                </motion.div>}


            </motion.div>
        </div>
    )
}