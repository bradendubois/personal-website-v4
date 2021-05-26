// Description of a project repository
export type RepositoryLink = {
    host: string; // Hosting service of repository: 'github', 'gitlab', etc.
    owner: string; // Owner account of the repository
    repository: string; // Name of the repository
    title: string; // Formal title relevant if a link to the repository were being presented
};

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
    year_start: number;
    year_end?: number;
    year_start_detail: string;
    year_end_detail?: string;
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
