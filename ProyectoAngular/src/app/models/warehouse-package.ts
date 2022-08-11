export class WarehousePackage{
    id: number
    tracking_number: string;
    client_name: string;
    status: string;
    pounds: string;
    price: string;
    departure_date: Date;
    arrival_date_destiny: Date;
    arrival_date_warehouse: Date;
    sava_code: string;
    images: Array<string>;

}