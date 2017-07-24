import { Rectangle } from '../../interfaces/rectangle';
import { DecoratorBase } from './decorator-base';
import { BasePositioner } from './base-positioner';

export class CoordsPositioner extends BasePositioner {
    constructor(private name: string) { super() }
    calculate(ref: Rectangle, element: Rectangle): Rectangle {
        console.log('coords positioner', this.name, ref, element);
        return {...element, position: {
            x: 13,
            y: 19
        }};
    }
}