export const PAGES: string[] = ['1', '2', '3', '4', '5'];

export type SortingType = 'name' | 'count' | 'distance' | '';

export interface Filter {
    col: '' | 'dittance' | 'count',
    condition: '' | '>' | '<' | '=',
    field: string,
}

export const mockFilter: Filter = {
    col: '',
    condition: '',
    field: '',
}
