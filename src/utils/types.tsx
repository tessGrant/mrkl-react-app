export interface Author {
    id: string;
    karma: number;
}

export interface Story {
    by: string;
    id: number;
    title: string;
    url: string;
    time: number;
    score: number;
}

export interface StoryObject {
    story: Story;
    author: Author;
}
