import { PlacementStrategy } from './../../interface/placement-strategy';
import { RectangleFactory } from './../../factory/rectangle-factory';
import { Rectangle } from './../../model/rectangle';
import { PlacementService } from './placement.service';
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
    describe('.place())', () => {
      it('should be defined', () => {
        expect(PlacementService.prototype.place).toEqual(jasmine.any(Function));
      });

      describe('Placement Strategy Known', () => {
        let service: PlacementService;
        let anchor: Rectangle;
        let element: Rectangle;
        let fakeRect: Rectangle;
        let fakeStrategy: PlacementStrategy;
        let fakeOptions: PlacementOptions;

        beforeEach(() => {
          service = new PlacementService();
          anchor = Rectangle.create(1, 2, 3, 4);
          element = Rectangle.create(4, 3, 2, 1);
          fakeRect = Rectangle.empty();

          fakeStrategy = makePlacementStrategy('fakeid', fakeRect);
          fakeOptions = {
            placementId: 'fakeid'
          };

          spyOn(PlacementService, 'pickPlacementStrategy').and.returnValue(fakeStrategy);
          spyOn(PlacementService, 'getEffectiveOptions').and.returnValue(fakeOptions);

          service.place(anchor, element);
        });

        it('should call strategy with proper anchor rect', () => {
          expect(fakeStrategy.calculate).toHaveBeenCalledWith(anchor, jasmine.any(Object), jasmine.any(Object));
        });

        it('should call strategy with proper element rect', () => {
          expect(fakeStrategy.calculate).toHaveBeenCalledWith(jasmine.any(Object), element, jasmine.any(Object));
        });

        it('should call strategy with proper options', () => {
          expect(fakeStrategy.calculate).toHaveBeenCalledWith(jasmine.any(Object), jasmine.any(Object), fakeOptions);
        });
      });

      describe('Placement Strategy Unknown', () => {
        let service: PlacementService;
        let anchor: Rectangle;
        let element: Rectangle;
        let fakeRect: Rectangle;
        let fakeStrategy: PlacementStrategy;
        let fakeOptions: PlacementOptions;

        beforeEach(() => {
          service = new PlacementService();
          anchor = Rectangle.create(1, 2, 3, 4);
          element = Rectangle.create(4, 3, 2, 1);
          fakeRect = Rectangle.empty();

          spyOn(PlacementService, 'pickPlacementStrategy').and.returnValue(undefined);
        });

        it('should throw if placement id is not known', () => {
          expect(function () {
            service.place(anchor, element);
          }).toThrowError('Placement not supported: bottom');
        });
      });
    });

    describe('PlacementService.getEffectiveOptions())', () => {
      it('should be defined', () => {
        expect(PlacementService.getEffectiveOptions).toEqual(jasmine.any(Function));
      });

      it('should return proper default options', () => {
        expect(PlacementService.getEffectiveOptions()).toEqual({
          placementId: 'bottom',
          parent: RectangleFactory.fromWindow(),
          offset: 0,
          constrainToParent: true,
          flip: true,
        });
      });

      it('should return proper overriden options', () => {
        expect(PlacementService.getEffectiveOptions({
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

    describe('PlacementService.pickPlacementStrategy())', () => {
      it('should be defined', () => {
        expect(PlacementService.pickPlacementStrategy).toEqual(jasmine.any(Function));
      });

      it('should return undefined for empty array of strategies', () => {
        const result = PlacementService.pickPlacementStrategy([], 'fakeId');

        expect(result).toBeUndefined();
      });

      it('should return undefined for null array of strategies', () => {
        const result = PlacementService.pickPlacementStrategy(null, 'fakeId');

        expect(result).toBeUndefined();
      });

      it('should return undefined for not known strategy id', () => {
        const str = makePlacementStrategy('str1', Rectangle.empty());
        const result = PlacementService.pickPlacementStrategy([str], 'unknown');

        expect(result).toBeUndefined();
      });

      it('should return strategy for known strategy id', () => {
        const str = makePlacementStrategy('str1', Rectangle.empty());
        const result = PlacementService.pickPlacementStrategy([str], 'str1');

        expect(result).toBe(str);
      });

      it('should return first strategy for list of known strategy ids', () => {
        const strprimo = makePlacementStrategy('str1', Rectangle.empty());
        const strsecundo = makePlacementStrategy('str1', Rectangle.empty());

        const result = PlacementService.pickPlacementStrategy([strprimo, strsecundo], 'str1');

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
