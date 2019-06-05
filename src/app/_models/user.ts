export class User {
    id?: number;
    firstname?: string;
    lastname?: string;
    username?: string;
    photo?: string;
    cover?: string;
    email?: string;
    bio?: string;
    gender?: boolean;
    password?: string;
    phoneNumber?: number;
    address?: {
        country?: string
        city?: string,
        street?: string,
        building?: string,
        Apartment?: number,
    }
}