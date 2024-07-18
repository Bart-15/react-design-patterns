export type UserAddress = {
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

export type UserCompany = {
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
} & UserAddress &
  UserCompany;
