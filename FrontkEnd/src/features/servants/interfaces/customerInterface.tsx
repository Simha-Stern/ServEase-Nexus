export interface Customer {
    id: string;
    email: string;
    password: string;
    name: {
      first: string;
      middle?: string;
      last: string;
    };
    phone: string;
    phone_password: string;
    address: {                    // address {} add
            state?: string
            country: string
            city: string
    street: string
            house_number: number
    },
    payment_day: number
  }
  
  export const customerList: Customer[] = [
    {
      id: "0", 
      email: "aaa@aa.aa",
      password: "A@a664422",
      name: {
        first: "moshe",
        middle: "bbb",
        last: "yakob",
      },
      phone: "0533187258",
      phone_password: "12345678",
      address: {
          state: "Kigali",
          country: "Nigeria",
          city: "Kigali",
          street: "Kigali",
          house_number: 123
      },
      payment_day: 10
    },
    {
      id: "1",
      email: "john.doe@example.com",
      password: "securepassword123",
      name: {
        first: "John",
        last: "Doe",
      },
      phone: "123-456-7890",
      phone_password: "phonepass456",
      address: {
        state: "CA",
        country: "USA",
        city: "Los Angeles",
        street: "Main Street",
        house_number: 123,
      },
      payment_day: 15,
    },
    {
      id: "2",
      email: "jane.smith@example.com",
      password: "mypassword789",
      name: {
        first: "Jane",
        last: "Smith",
      },
      phone: "987-654-3210",
      phone_password: "securephone789",
      address: {
        state: "NY",
        country: "USA",
        city: "New York",
        street: "Broadway",
        house_number: 456,
      },
      payment_day: 10,
    },
  ];
  