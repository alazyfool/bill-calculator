export interface Item {
    id: number;
    name: string;
    quantity: number;
    price: number; // TODO: thing if this should be price of single item or price of all items collectively
    contributors: User[]
}

export interface Bill {
    id: number;
    title: string;
    dateOfPurchase: Date;
    paidBy: User;
    createdBy: User;
    items: Item[];
}

export interface User {
    id: number;
    name: string;
    upi: string;
    phone: string;
    contri?: number;
}

// TODO: implement this in future
export interface Group {
    id: number;
    name: string;
    members: User[];
}

export interface PieChartDatatype {
    name: string;
    value: number;
    somethingelse: number;
}