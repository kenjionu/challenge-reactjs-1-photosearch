export interface Photos {
    id: string;
    urls?: {
        full: string;
        regular: string;
        small: string;
        small_s3: string;
        thumb: string;
    }
}

export const PhotosEmpty: Photos = {
    id: "",
    urls: {
        full: "",
        regular: "",
        small: "",
        small_s3: "",
        thumb: ""
    }
}; 