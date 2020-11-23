import { request } from "@octokit/request"

export const githubWithAuth = request.defaults({
    headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`
    }
})