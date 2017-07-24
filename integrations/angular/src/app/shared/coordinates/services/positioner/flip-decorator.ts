import { Rectangle } from '../../interfaces/rectangle';
import { DecoratorBase } from './decorator-base';
import { BasePositioner } from './base-positioner';

export class FlipDecorator extends DecoratorBase {
    constructor(private basePositioner: BasePositioner) { super(basePositioner) }

    calculate(ref: Rectangle, element: Rectangle): Rectangle {
        const r = this.basePositioner.calculate(ref, element);
        console.log('flipping', r);

        return {...r, position: {
            x: r.position.x * -1,
            y: r.position.y * -1
        }};
    }
}