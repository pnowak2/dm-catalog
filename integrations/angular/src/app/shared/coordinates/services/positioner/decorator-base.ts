import { Rectangle } from '../../interfaces/rectangle';
import { BasePositioner } from './base-positioner';

export abstract class DecoratorBase extends BasePositioner {
    constructor(basePositioner: BasePositioner) { super() }
    abstract calculate(ref: Rectangle, element: Rectangle): Rectangle;
}