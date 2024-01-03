interface id {
    id: string
}
interface name {
    first_name: string
    midel_name?: string
    last_name: string
}
interface address {
    state?: string
    country: string
    city: string
    streat: string
    house_number: number
}
interface pupel {
    _id: id
    email: string
    pasword: string
    name: name
    phone: number
    phone_password: string
    address: address
    image?: string
    active: boolean
    is_admin: boolean
    is_deleted: boolean
}
export interface costumer {
    _id: id
    pupel: pupel
    fee: number
    fee_payment_method: string
}