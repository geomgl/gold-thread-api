import { Entity, property, model } from '@loopback/repository';

@model({
    name:"charity"
})

export class Charity extends Entity {
    @property({
        type: 'number',
        id: true
    })
    charityId?: number;

    @property({
        type: 'string',
        required: true
    })
    charityName: string;

    @property({
        type: 'string',
        required: true
    })
    charityDisc: string;

    @property({
        type: 'string',
        required: true
    })
    charityImg: string;
    
    getId() {
        return this.id;
    }
}
