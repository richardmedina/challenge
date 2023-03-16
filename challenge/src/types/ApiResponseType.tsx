
export interface ApiResponseType {
    results: Array<UserInfoType>;
}

export interface UserInfoType {
    name: NameType;
    picture: PictureType;
}

interface NameType {
    first: string;
    last: string;
}

interface PictureType {
    large: string;
    medium: string;
    thumbnail: string;
}