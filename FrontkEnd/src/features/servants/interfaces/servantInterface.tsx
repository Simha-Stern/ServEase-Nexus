export interface servant {
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
    address: {                     // address {} add
            state?: string
            country: string
            city: string
    street: string
            house_number: number
    },
    image?: {
      url: string;
      alt?: string;
    };
    active: boolean;
    isAdmin: boolean;
    fee: number;                   // add
    paymentMethods: string;        // add
  }
  
  export const servantList: servant[] = [
    {
      id: "c79728cd-0102-4797-90c1-c34279304c6f",
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
      image: {
        url: "https://ca.slack-edge.com/T05EQJ625L7-U05H1KH8YNA-698e87f84b09-512",
        alt: "man",
      },
      active: true,
      isAdmin: false,
      fee: 100,
      paymentMethods: "Cash",
    },
  ];
  