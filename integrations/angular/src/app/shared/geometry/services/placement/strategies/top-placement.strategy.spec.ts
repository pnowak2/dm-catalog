import { PlacementOptions } from './../../../interface/placement-options';
import { Rectangle } from './../../../model/rectangle';
import { PlacementStrategy } from './../../../interface/placement-strategy';
import { TopPlacementStrategy } from './top-placement.strategy';

describe('TopPlacementStrategy', () => {
  describe('Api', () => {
    describe('.getId()', () => {
      it('should be defined', () => {
        expect(TopPlacementStrategy.prototype.getId).toEqual(jasmine.any(Function));
      });

      it('should return proper id', () => {
        const str = new TopPlacementStrategy();
        expect(str.getId()).toEqual('top');
      });
    });

    describe('.calculate()', () => {
      let str: PlacementStrategy;

      beforeEach(() => {
        str = new TopPlacementStrategy();
      });

      it('should be defined', () => {
        expect(TopPlacementStrategy.prototype.calculate).toEqual(jasmine.any(Function));
      });

      it('should clone element', () => {
        const anchor = Rectangle.create(1, 1, 4, 3);
        const element = Rectangle.create(0, 0, 6, 2);

        const options: PlacementOptions = {};
        const calculatedRect = str.calculate(anchor, element, options);

        expect(calculatedRect).not.toBe(element);
      });

      it('should move element to center top with offset', () => {
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

        expect(calculatedRect).toEqual(Rectangle.create(5.5, -1, 4, 3));
      });

      it('should move element to center top with offset & flip', () => {
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

        expect(calculatedRect).toEqual(Rectangle.create(5.5, 8, 4, 3));
      });

      it('should move element to center top with offset & flip & constrain', () => {
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

        expect(calculatedRect).toEqual(Rectangle.create(5.5, 7, 4, 3));
      });
    });
  });
});
