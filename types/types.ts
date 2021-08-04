// Description of a project repository
export type RepositoryLink = {
    host: string; // Hosting service of repository: 'github', 'gitlab', etc.
    owner: string; // Owner account of the repository
    repository: string; // Name of the repository
    title: string; // Formal title relevant if a link to the repository were being presented
};

type Time = {
    year: number
    detail: String
}

export type ProjectData = {
    title: string;
    description: string;
    repositories: RepositoryLink[];
    collaborators: {
        title: string;
        url?: string;
    }[];
    related: {
        title: string;
        url: string;
    }[];
    
    duration: {
        start: Time
        end?: Time
    }
    
    content: {
        title: string;
        markdown: string;
    }[];
};

// Brief description of a project
export type ProjectSummary = {
    title: string;
    description: string;
    id: string;
};
