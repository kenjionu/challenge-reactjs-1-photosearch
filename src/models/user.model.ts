import { Urls } from "./photos.model";

export interface User {
    username: string;
    total_likes: number
    total_photos: number;
    total_collections: number;
    instagram_username: string;
    bio: string;
    profile_image: Urls
    name: string;
    followers_count: number;
}