export interface Shop {
    id?: string,
    name: string,
    photo?: string,
    cover?: string,

    street?: string
    cityId?: number,
    countryId?: number,
    districtId?: number,
    postalcode?: number,

    rating?: number,
    about?: string,
    policy?: string,
    subscription?: number
}