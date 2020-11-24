import { githubWithAuth } from "../../config/githubWithAuth";

export default async (req, res) => {
    const {
        query: { repo }
    } = req

    const result = await githubWithAuth("GET /repos/:owner/:repo/readme", {
        owner: "bradendubois",
        repo,
    })

    res.setHeader('Content-Type', 'application/json')
    res.status(200).json(result)
}
