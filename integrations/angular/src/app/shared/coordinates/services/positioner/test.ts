import { CoordsPositioner } from './coords-positioner';
import { InsideParentDecorator } from './inside-parent-decorator';
import { FlipDecorator } from './flip-decorator';
import { Rectangle } from '../../interfaces/rectangle';

const inputRect: Rectangle = {
    position: {
        x: 0,
        y: 0
    },
    dimensions: {
        width: 0,
        height: 0
    }
}

const coords = new CoordsPositioner('top left, bottom right');
const flip = new FlipDecorator(coords);
export const inside = new InsideParentDecorator(flip, 'tl');