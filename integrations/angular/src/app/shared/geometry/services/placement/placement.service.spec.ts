import { PlacementStrategy } from './../../interface/placement-strategy';
import { RectangleFactory } from './../../factory/rectangle-factory';
import { Rectangle } from './../../model/rectangle';
import { PlacementService, getEffectiveOptions, pickPlacementStrategy } from './placement.service';
import { PlacementOptions } from '../../interface/placement-options';

describe('PlacementService', () => {
  describe('Creation', () => {
    it('should create an instance without args', () => {
      expect(() => {
        new PlacementService();
      }).not.toThrow();
    });

    it('should create an instance with null arg', () => {
      expect(() => {
        new PlacementService(null);
      }).not.toThrow();
    });

    it('should create an instance with empty array', () => {
      expect(() => {
        new PlacementService([]);
      }).not.toThrow();
    });

    it('should create an instance with array of strategies', () => {
      expect(() => {

        new PlacementService([makePlacementStrategy('fakeid', Rectangle.empty())]);
      }).not.toThrow();
    });
  });

  describe('Api', () => {
    xdescribe('position())', () => {
      let fakeStrategy: PlacementStrategy;
      let service: PlacementService;
      let anchor: Rectangle;
      let element: Rectangle;

      beforeEach(() => {
        anchor = Rectangle.create(1, 2, 3, 4);
        element = Rectangle.create(2, 3, 4, 5);
      });

      it('should be defined', () => {
        expect(PlacementService.prototype.place).toEqual(jasmine.any(Function));
      });

      it('should throw if no supported placement id was recognized', () => {
        fakeStrategy = makePlacementStrategy('fakeid', Rectangle.create(1, 2, 3, 4));
        service = new PlacementService([fakeStrategy]);

        expect(function () {
          service.place(anchor, element);
        }).toThrow('Placement not supported: badId')
      });
    });

    describe('getEffectiveOptions())', () => {
      it('should be defined', () => {
        expect(getEffectiveOptions).toEqual(jasmine.any(Function));
      });

      it('should return proper default options', () => {
        expect(getEffectiveOptions()).toEqual({
          placementId: 'bottom',
          parent: RectangleFactory.fromWindow(),
          offset: 0,
          constrainToParent: true,
          flip: true,
        });
      });

      it('should return proper overriden options', () => {
        expect(getEffectiveOptions({
          placementId: 'fakeId',
          parent: Rectangle.create(1, 2, 3, 4),
          offset: 7,
          constrainToParent: false,
          flip: false
        })).toEqual({
          placementId: 'fakeId',
          parent: Rectangle.create(1, 2, 3, 4),
          offset: 7,
          constrainToParent: false,
          flip: false
        });
      });
    });

    describe('pickPlacementStrategy())', () => {
      it('should be defined', () => {
        expect(pickPlacementStrategy).toEqual(jasmine.any(Function));
      });

      it('should return undefined for empty array of strategies', () => {
        const result = pickPlacementStrategy([], 'fakeId');

        expect(result).toBeUndefined();
      });

      it('should return undefined for null array of strategies', () => {
        const result = pickPlacementStrategy(null, 'fakeId');

        expect(result).toBeUndefined();
      });

      it('should return undefined for not known strategy id', () => {
        const str = makePlacementStrategy('str1', Rectangle.empty());
        const result = pickPlacementStrategy([str], 'unknown');

        expect(result).toBeUndefined();
      });

      it('should return strategy for known strategy id', () => {
        const str = makePlacementStrategy('str1', Rectangle.empty());
        const result = pickPlacementStrategy([str], 'str1');

        expect(result).toBe(str);
      });

      it('should return first strategy for list of known strategy ids', () => {
        const strprimo = makePlacementStrategy('str1', Rectangle.empty());
        const strsecundo = makePlacementStrategy('str1', Rectangle.empty());

        const result = pickPlacementStrategy([strprimo, strsecundo], 'str1');

        expect(result).toBe(strprimo);
      });
    });
  });
});

function makePlacementStrategy(id: string, placedRect: Rectangle): PlacementStrategy {
  return {
    getId: jasmine.createSpy('id spy').and.returnValue(id),
    calculate: jasmine.createSpy('calculate spy').and.returnValue(placedRect)
  }
}
