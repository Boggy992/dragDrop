export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  zip: number;
  birthdate: string;
  city: string;
}

export interface DragAreaProps {
  children: Array<JSX.Element>;
  onChange: (users: Array<User>) => void;
  items: Array<User>;
}
