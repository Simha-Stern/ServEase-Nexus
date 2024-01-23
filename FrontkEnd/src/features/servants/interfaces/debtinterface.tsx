export interface Debt {
    id: string;
    paymentMonth: string;
    serviceId: string;
    paymentAmount: number;
    paidAmount: number;
    paymentStatus: 'Awaiting payment' | 'partially paid' | 'fully paid';
    dueDay: string;
  }
  
  export const debtList: Debt[] = [
    {
      id: "1",
      paymentMonth: "January",
      serviceId: "c79728cd-0102-4797-90c1-c34279304c6f",
      paymentAmount: 100,
      paidAmount: 0,
      paymentStatus: 'Awaiting payment',
      dueDay: "10",
    },
    {
      id: "2",
      paymentMonth: "February",
      serviceId: "c79728cd-0102-4797-90c1-c34279304c6f",
      paymentAmount: 150,
      paidAmount: 75,
      paymentStatus: 'partially paid',
      dueDay: "15",
    },
    {
      id: "3",
      paymentMonth: "March",
      serviceId: "c79728cd-0102-4797-90c1-c34279304c6f",
      paymentAmount: 120,
      paidAmount: 120,
      paymentStatus: 'fully paid',
      dueDay: "20",
    },
    {
      id: "4",
      paymentMonth: "April",
      serviceId: "c79728cd-0102-4797-90c1-c34279304c6f",
      paymentAmount: 200,
      paidAmount: 150,
      paymentStatus: 'partially paid',
      dueDay: "12",
    },
    {
      id: "5",
      paymentMonth: "May",
      serviceId: "1",
      paymentAmount: 180,
      paidAmount: 180,
      paymentStatus: 'fully paid',
      dueDay: "25",
    },
    {
      id: "6",
      paymentMonth: "June",
      serviceId: "2",
      paymentAmount: 130,
      paidAmount: 0,
      paymentStatus: 'Awaiting payment',
      dueDay: "18",
    },
  ];
  