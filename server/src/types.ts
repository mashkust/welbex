export interface ITableRow{
    date: string;
    name: string;
    count: number;
    distance: number;
    id: number;
}

export interface ITable{
    rows: ITableRow[];
}