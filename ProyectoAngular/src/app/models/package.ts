import { ClientDate } from "./client-data";
import { WarehousePackage } from "./warehouse-package";

export class Model { }

export interface Package {
    id: number,
    sava_code: string;
    status:string,
    price: number,
    weight: number,
    departureDate: Date,
    arrival_date_destiny: Date,
    Client: Array<ClientDate>,
    WarehousePackages: Array<WarehousePackage>
}
