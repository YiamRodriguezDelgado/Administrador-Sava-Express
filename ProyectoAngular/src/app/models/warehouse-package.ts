import { ClientDate } from "./client-data";
import { Image } from "./image";

export class WarehousePackage{
    id: number
    tracking_number: string;
    Client: Array<ClientDate>
    sava_code: string;
    pounds: string;
    price: string;
    arrival_date: Date;
    Images: Array<Image>;

}