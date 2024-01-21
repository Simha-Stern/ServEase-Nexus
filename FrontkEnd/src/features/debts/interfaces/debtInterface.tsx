export interface Debt {
    id: string;
    providerId: string;
    receivesId: string;
    paymentMonth: [number,number];
    service: string;
    paymentAmount: number;
    paidAmount: number;
    paymentStatus: 'Awaiting Payment' | 'Partially Paid' | 'Fully Paid';
    dueDate: number;
  }