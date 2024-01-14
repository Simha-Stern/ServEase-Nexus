export const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

export const phoneRegEx = /^(0\d{8}|05\d{8})$/;

export const emailRegEx =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?: \.[a-zA-Z0-9-]+)*$/;

export const phonePassRegEx = /^[0-9]{4,10}$/;
