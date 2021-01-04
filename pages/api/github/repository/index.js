import { githubWithAuth } from "../../config/githubWithAuth";

export default async (req, res) => {

    const result = await githubWithAuth("GET /users/:username/repos", {
        username: "bradendubois"
    })

    res.setHeader('Content-Type', 'application/json')
    res.status(200).json(result)
}
