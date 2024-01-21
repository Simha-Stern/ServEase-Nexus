import {costumer} from '../features/admins/interfaces/userInterface'
import man from '../assets/images/man.jpg'
import { Debt } from '../features/debts/interfaces/debtInterface'

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
        image: man,
        active: true,
        is_admin: false,
        is_deleted: false
    },
    fee: 100,
    fee_payment_method: 'Cash'
}

export const debt: Debt = {
    id: '1',
    providerId: '1',
    receivesId: '1',
    paymentMonth: [1,2024],
    service: 'House committee',
    paymentAmount: 150,
    paidAmount: 0,
    paymentStatus: 'Awaiting Payment',
    dueDate: 10
    
}