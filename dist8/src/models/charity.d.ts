import { Entity } from '@loopback/repository';
export declare class Charity extends Entity {
    charityId?: number;
    charityName: string;
    charityDisc: string;
    charityImg: string;
    getId(): any;
}
