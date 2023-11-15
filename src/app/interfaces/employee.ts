export interface Employee {
    id: string;
    firstName: string;
    lastName: string;
    dob: string;
    email: string;
    gender: string;
    country: string;
    role: string;
    dateOfJoining: string;
    active: boolean;
}

export interface EmployeeRequest {
    first: number;
    rows: number;
    sortField: string | string[];
    sortOrder: number;
    filter?: {
        firstName: string
    }
}
