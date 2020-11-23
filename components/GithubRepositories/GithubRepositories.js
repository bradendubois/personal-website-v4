
import { useEffect, useState } from "react"
import useSWR from "swr";

export const GithubRepositories = () => {

    const { repos } = useSWR('/api/github/repository', fetch)

    const [repositories, setRepositories] = useState()

    useEffect(() => {
        repos?.json().then(r => {
            console.log(r)
            setRepositories(r.data)
        })
    }, [repos])

    return (
        <div>
            Hey
        </div>
    )
}