import { Rectangle } from '../../interfaces/rectangle';

export abstract class BasePositioner {
    constructor() { }
    abstract calculate(ref: Rectangle, element: Rectangle): Rectangle;
}