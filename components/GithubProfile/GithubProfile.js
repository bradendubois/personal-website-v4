
import { useEffect } from "react"
import useSWR from "swr";


export const Github = () => {

    const { data } = useSWR('/api/github/user', fetch)

    useEffect(() => {
        data?.json().then(r => {
            console.log(r)
        })
    }, [data])

    return (
        <div>

        </div>
    )
}