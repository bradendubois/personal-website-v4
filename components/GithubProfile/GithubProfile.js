
import { useEffect, useState } from "react"
import useSWR from "swr";
import Image from "next/image"

export const GithubProfile = () => {

    const { data } = useSWR('/api/github/user', fetch)

    const [profile, setProfile] = useState()

    useEffect(() => {
        data?.json().then(r => {
            console.log(r)
            setProfile(r.data)
        })
    }, [data])

    return (
        <div>
            <div>
                {profile && <Image width={200} height={200} src={profile.avatar_url} />}
                <div>
                    <p>github.com / {profile && profile.login}</p>
                </div>
            </div>

            <p>{profile && profile.bio}</p>
            <p>{profile && profile.blog}</p>
            <p>{profile && profile.avatar_url}</p>
            <p>{profile && profile.followers}</p>
            <p>{profile && profile.html_url}</p>
            <p>{profile && profile.name}</p>
            <p>{profile && profile.public_repos}</p>
        </div>
    )
}