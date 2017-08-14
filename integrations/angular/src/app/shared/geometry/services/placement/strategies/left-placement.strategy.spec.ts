import { PlacementOptions } from './../../../interface/placement-options';
import { Rectangle } from './../../../model/rectangle';
import { PlacementStrategy } from './../../../interface/placement-strategy';
import { LeftPlacementStrategy } from './left-placement.strategy';

describe('LeftPlacementStrategy', () => {
  describe('Api', () => {
    describe('.getId()', () => {
      it('should be defined', () => {
        expect(LeftPlacementStrategy.prototype.getId).toEqual(jasmine.any(Function));
      });

      it('should return proper id', () => {
        const str = new LeftPlacementStrategy();
        expect(str.getId()).toEqual('left');
      });
    });

    describe('.calculate()', () => {
      let str: PlacementStrategy;

      beforeEach(() => {
        str = new LeftPlacementStrategy();
      });

      it('should be defined', () => {
        expect(LeftPlacementStrategy.prototype.calculate).toEqual(jasmine.any(Function));
      });

      it('should clone element', () => {
        const anchor = Rectangle.create(1, 1, 4, 3);
        const element = Rectangle.create(0, 0, 6, 2);

        const options: PlacementOptions = { anchor, element };
        const calculatedRect = str.calculate(options);

        expect(calculatedRect).not.toBe(element);
      });

      it('should move element to left center with offset', () => {
        const anchor = Rectangle.create(5, 4, 3, 2);
        const element = Rectangle.create(0, 0, 4, 3);
        const parent = Rectangle.create(0, 0, 12, 10);

        const options: PlacementOptions = {
          anchor,
          element,
          offsetAlong: 2,
          offsetAcross: 1,
          flip: false,
          constrainToParent: false,
          parent: parent
        };

        const calculatedRect = str.calculate(options);

        expect(calculatedRect).toEqual(Rectangle.create(-1, 4.5, 4, 3));
      });

      it('should move element to left center with offset & flip', () => {
        const anchor = Rectangle.create(5, 4, 3, 2);
        const element = Rectangle.create(0, 0, 4, 3);
        const parent = Rectangle.create(0, 0, 12, 10);

        const options: PlacementOptions = {
          anchor,
          element,
          offsetAlong: 2,
          offsetAcross: 1,
          flip: true,
          constrainToParent: false,
          parent: parent
        };

        const calculatedRect = str.calculate(options);

        expect(calculatedRect).toEqual(Rectangle.create(10, 4.5, 4, 3));
      });

      it('should move element to left center with offset & flip & constrain', () => {
        const anchor = Rectangle.create(5, 4, 3, 2);
        const element = Rectangle.create(0, 0, 4, 3);
        const parent = Rectangle.create(0, 0, 12, 10);

        const options: PlacementOptions = {
          anchor,
          element,
          offsetAlong: 2,
          offsetAcross: 1,
          flip: true,
          constrainToParent: true,
          parent: parent
        };

        const calculatedRect = str.calculate(options);

        expect(calculatedRect).toEqual(Rectangle.create(8, 4.5, 4, 3));
      });
    });
  });
});

