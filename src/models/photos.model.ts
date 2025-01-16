import { Location } from "./location.model";
import { User } from "./user.model";

export interface Photos {
    id: string;
    urls: Urls;
    user?: User;
    location?: Location;
}

export interface Urls {
    full?: string;
    regular?: string;
    medium?: string;
    small?: string;
    large?: string;
    small_s3?: string;
    thumb?: string;
}

export const PhotosEmpty: Photos = {
    id: "",
    urls: {
        full: "",
        regular: "",
        small: "",
        small_s3: "",
        thumb: ""
    },
}; 

export interface ProfileImage{
    profile_image: Urls
    // Add any additional properties for profile image
}


  // Define el tipo de retorno del hook
  interface UseFetchSinglePhotoResult {
    photo: Photos | null;
    loading: boolean;
    error: string | null;
  }