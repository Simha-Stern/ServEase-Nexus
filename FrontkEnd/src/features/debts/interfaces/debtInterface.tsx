export interface Debt {
    id: string;
    providerId: string;
    receivesId: string;
    paymentMonth: number;
    service: string;
    paymentAmount: number;
    paidAmount: number;
    paymentStatus: 'Awaiting Payment' | 'Partially Paid' | 'Fully Paid';
    dueDate: number;
  }

  export interface Customer {
    id: string;
    name: string;
    age: number;
    email: string;
  }