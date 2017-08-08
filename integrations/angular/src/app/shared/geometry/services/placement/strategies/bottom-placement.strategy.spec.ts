import { PlacementOptions } from './../../../interface/placement-options';
import { Rectangle } from './../../../model/rectangle';
import { PlacementStrategy } from './../../../interface/placement-strategy';
import { BottomPlacementStrategy } from './bottom-placement.strategy';

describe('BottomPlacementStrategy', () => {
  describe('Api', () => {
    describe('.getId()', () => {
      it('should be defined', () => {
        expect(BottomPlacementStrategy.prototype.getId).toEqual(jasmine.any(Function));
      });

      it('should return proper id', () => {
        const str = new BottomPlacementStrategy();
        expect(str.getId()).toEqual('bottom');
      });
    });

    describe('.calculate()', () => {
      let str: PlacementStrategy;

      beforeEach(() => {
        str = new BottomPlacementStrategy();
      });

      it('should be defined', () => {
        expect(BottomPlacementStrategy.prototype.calculate).toEqual(jasmine.any(Function));
      });

      it('should clone element', () => {
        const anchor = Rectangle.create(1, 1, 4, 3);
        const element = Rectangle.create(0, 0, 6, 2);

        const options: PlacementOptions = {};
        const calculatedRect = str.calculate(anchor, element, options);

        expect(calculatedRect).not.toBe(element);
      });

      it('should move element to center bottom with offset', () => {
        const anchor = Rectangle.create(5, 4, 3, 2);
        const element = Rectangle.create(0, 0, 4, 3);
        const parent = Rectangle.create(0, 0, 12, 10);

        const options: PlacementOptions = {
          offsetAlong: 2,
          offsetAcross: 1,
          flip: false,
          constrainToParent: false,
          parent: parent
        };

        const calculatedRect = str.calculate(anchor, element, options);

        expect(calculatedRect).toEqual(Rectangle.create(5.5, 8, 4, 3));
      });

      it('should move element to center bottom with offset & flip', () => {
        const anchor = Rectangle.create(5, 4, 3, 2);
        const element = Rectangle.create(0, 0, 4, 3);
        const parent = Rectangle.create(0, 0, 12, 10);

        const options: PlacementOptions = {
          offsetAlong: 2,
          offsetAcross: 1,
          flip: true,
          constrainToParent: false,
          parent: parent
        };

        const calculatedRect = str.calculate(anchor, element, options);

        expect(calculatedRect).toEqual(Rectangle.create(5.5, -1, 4, 3));
      });

      it('should move element to center bottom with offset & flip & constrain', () => {
        const anchor = Rectangle.create(5, 4, 3, 2);
        const element = Rectangle.create(0, 0, 4, 3);
        const parent = Rectangle.create(0, 0, 12, 10);

        const options: PlacementOptions = {
          offsetAlong: 2,
          offsetAcross: 1,
          flip: true,
          constrainToParent: true,
          parent: parent
        };

        const calculatedRect = str.calculate(anchor, element, options);

        expect(calculatedRect).toEqual(Rectangle.create(5.5, 0, 4, 3));
      });
    });
  });
});

