export interface Shop {
    id?: number,
    userId?: number
    name: string,
    photo?: string,
    cover?: string,
    currency?: string,
    address?: {
        street?: string
        city?: string,
        country?: string,
        district?: string,
        postalcode?: number,
    },
    about?: string,
    policies?: string,
}