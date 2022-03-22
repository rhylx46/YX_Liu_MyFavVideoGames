export interface Content {
<<<<<<< Updated upstream
    id: number;
=======
    readonly id?: number;
>>>>>>> Stashed changes
    title: string;
    description: string;
    creator: string;
    imgURL?: string;
    type?: string;
    tags?: string;
}