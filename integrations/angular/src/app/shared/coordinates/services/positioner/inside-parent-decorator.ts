import { Rectangle } from '../../interfaces/rectangle';
import { DecoratorBase } from './decorator-base';
import { BasePositioner } from './base-positioner';

export class InsideParentDecorator extends DecoratorBase {
    constructor(private basePositioner: BasePositioner, private placement: string) { super(basePositioner) }

    calculate(ref: Rectangle, element: Rectangle): Rectangle {
        const r = this.basePositioner.calculate(ref, element);
        console.log('insiding in parent', r, this.placement);

        return {...r, position: {
            x: r.position.x - 11,
            y: r.position.y - 20
        }};
    }
}