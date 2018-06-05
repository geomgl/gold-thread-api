import { CharitiesRepo } from "../repositories/charities.repository";
import { Charity } from "../models/charity";
export declare class CharityController {
    private charitiesRepo;
    constructor(charitiesRepo: CharitiesRepo);
    createUser(charity: Charity): Promise<Charity>;
    getAll(): Promise<Array<Charity>>;
    findCharityById(id: number): Promise<Charity>;
}
