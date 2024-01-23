export interface Service {
  id: string;
  servantId: string;
  customerId: string;
  description: string;
  monthlyPrice: number;
  billingDay: number;
  startDate: [number, number, number];
  endDate: [number, number, number];
  active: boolean;
  lastPayReq: [number, number, number];
  reminderDay: number;
  reminderTime: [number, number];
  lateReminderTime: [number, number];
  sendCashPay: boolean;
}

export const services: Service[] = [
  {
    id: "0",
    servantId: "c79728cd-0102-4797-90c1-c34279304c6f",
    customerId: "0",
    description: "Internet Service",
    monthlyPrice: 50,
    billingDay: 5,
    startDate: [2023, 1, 1],
    endDate: [2024, 1, 1],
    active: true,
    lastPayReq: [2023, 5, 5],
    reminderDay: 2,
    reminderTime: [10, 0],
    lateReminderTime: [12, 0],
    sendCashPay: true,
  },
  {
    id: "1",
    servantId: "c79728cd-0102-4797-90c1-c34279304c6f",
    customerId: "1",
    description: "Internet",
    monthlyPrice: 49.99,
    billingDay: 10,
    startDate: [2023, 1, 1],
    endDate: [2024, 1, 1],
    active: true,
    lastPayReq: [2023, 5, 10],
    reminderDay: 5,
    reminderTime: [10, 0],
    lateReminderTime: [12, 0],
    sendCashPay: true,
  },
  {
    id: "2",
    servantId: "c79728cd-0102-4797-90c1-c34279304c6f",
    customerId: "2",
    description: "Cable TV",
    monthlyPrice: 59.99,
    billingDay: 12,
    startDate: [2023, 1, 1],
    endDate: [2024, 1, 1],
    active: true,
    lastPayReq: [202, 5, 12],
    reminderDay: 5,
    reminderTime: [10, 0],
    lateReminderTime: [12, 0],
    sendCashPay: false,
  },
];
