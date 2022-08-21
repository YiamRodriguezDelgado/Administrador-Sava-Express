import { WarehousePackage } from "./warehouse-package";

export interface Package {
    id: number,
    sava_code: string;
    status:string,
    price: number,
    weight: number,
    departureDate: Date,
    arrival_date_destiny: Date,
    CliendId: number,
    WarehousePackages: Array<WarehousePackage>
}
