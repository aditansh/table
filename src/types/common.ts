export interface User {
  status: string;
  token: string;
  user: {
    Id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    token: string;
    userRole: string;
    createdTime: string;
    updatedTime: string;
  };
}

export interface Task {
  Id: string;
  taskName: string;
  analystName: string;
  dateUploaded: string;
  docList: string[];
  timeTaken: string;
  completed: boolean;
  createdTime: string;
  updatedTime: string;
}

export interface Error {
  err: string;
  status: boolean;
}
