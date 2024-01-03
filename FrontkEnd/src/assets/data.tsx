import {costumer} from '../features/users/interfaces/userInterface'

export const user: costumer = {
    _id: {
        id: '1'
    },
    pupel: {
        _id: {
            id: '1'
        },
        email: 'abcd@example.com',
        pasword: '123456',
        name: {
            first_name: 'moshe',
            midel_name: '',
            last_name: 'kohen'
        },
        phone: 123456789,
        phone_password: '654321',
        address: {
            state: '',
            country: 'israel',
            city: 'nof hagalil',
            streat: 'belz',
            house_number: 20
        },
        active: true,
        is_admin: false,
        is_deleted: false
    },
    fee: 100,
    fee_payment_method: 'Cash'
}
