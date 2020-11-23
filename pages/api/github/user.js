import { githubWithAuth } from "../config/githubWithAuth";

export default async (req, res) => {
    const result = await githubWithAuth("GET /user", {
        owner: "bradendubois"
    })

    res.setHeader('Content-Type', 'application/json')
    res.status(200).json(result)
}
