import { PlacementOptions } from './../interface/placement-options';
import { Offset } from './../../../shared/geometry/model/offset';
import { Point } from './../../../shared/geometry/model/point';
import { Rectangle } from './../../../shared/geometry/model/rectangle';
import { constants } from './../constants/constants';
import { PopoverVM } from './../viewmodel/popover.viewmodel';
import { PlacementStrategy } from './../interface/placement-strategy';
import { PopoverService } from './popover.service';

describe('Popover Service', () => {
  describe('Creation', () => {
    it('should create an instance without args', () => {
      expect(() => {
        const p = new PopoverService();
      }).not.toThrow();
    });

    it('should create an instance with null arg', () => {
      expect(() => {
        const p = new PopoverService(null);
      }).not.toThrow();
    });

    it('should create an instance with empty array', () => {
      expect(() => {
        const p = new PopoverService([]);
      }).not.toThrow();
    });

    it('should create an instance with array of strategies', () => {
      expect(() => {
        const p = new PopoverService([makePlacementStrategy('fakeid', PopoverVM.create())]);
      }).not.toThrow();
    });
  });

  describe('Api', () => {
    describe('PopoverService.pickPlacementStrategy())', () => {
      it('should be defined', () => {
        expect(PopoverService.pickPlacementStrategy).toEqual(jasmine.any(Function));
      });

      it('should return undefined for empty array of strategies', () => {
        const result = PopoverService.pickPlacementStrategy([], 'fakeId');

        expect(result).toBeUndefined();
      });

      it('should return undefined for null array of strategies', () => {
        const result = PopoverService.pickPlacementStrategy(null, 'fakeId');

        expect(result).toBeUndefined();
      });

      it('should return undefined for not known strategy id', () => {
        const str = makePlacementStrategy('str1', PopoverVM.create());
        const result = PopoverService.pickPlacementStrategy([str], 'unknown');

        expect(result).toBeUndefined();
      });

      it('should return strategy for known strategy id', () => {
        const str = makePlacementStrategy('str1', PopoverVM.create());
        const result = PopoverService.pickPlacementStrategy([str], 'str1');

        expect(result).toBe(str);
      });

      it('should return first strategy for list of known strategy ids', () => {
        const strprimo = makePlacementStrategy('str1', PopoverVM.create());
        const strsecundo = makePlacementStrategy('str1', PopoverVM.create());

        const result = PopoverService.pickPlacementStrategy([strprimo, strsecundo], 'str1');

        expect(result).toBe(strprimo);
      });
    });

    describe('.calculate()', () => {
      it('should be defined', () => {
        expect(PopoverService.prototype.calculate).toEqual(jasmine.any(Function));
      });

      describe('Placement Strategy Unknown', () => {
        let service: PopoverService;
        let anchorRect: Rectangle;
        let popoverRect: Rectangle;
        let arrowRect: Rectangle;

        beforeEach(() => {
          spyOn(PopoverService, 'pickPlacementStrategy').and.returnValue(undefined);
          service = new PopoverService();
          anchorRect = Rectangle.create(1, 2, 3, 4);
          popoverRect = Rectangle.create(1, 2, 3, 4);
          arrowRect = Rectangle.create(1, 2, 3, 4);
        });

        it('should throw if placement strategy is not known', () => {
          expect(function () {
            service.calculate({
              placement: constants.directionClass.bottom,
              anchorRect,
              popoverRect,
              arrowRect
            });
          }).toThrowError('Placement not supported: bottom');
        });
      });

      describe('Placement Strategy Known', () => {
        let service: PopoverService;
        let anchorRect: Rectangle;
        let popoverRect: Rectangle;
        let arrowRect: Rectangle;
        let fakeStrategy: PlacementStrategy;
        let fakePopoverVM: PopoverVM;
        let fakeOptions: PlacementOptions;
        let result: PopoverVM;

        beforeEach(() => {
          fakeOptions = {
            placement: constants.directionClass.left,
            anchorRect: Rectangle.empty(),
            popoverRect: Rectangle.empty(),
            arrowRect: Rectangle.empty(),
          };

          fakePopoverVM = PopoverVM.create({
            placementClassModifier: constants.directionClass.left,
            popoverPosition: Point.create(1, 2),
            arrowOffset: Offset.create(5, 6)
          });

          fakeStrategy = makePlacementStrategy('myStr', fakePopoverVM);
          spyOn(PopoverService, 'pickPlacementStrategy').and.returnValue(fakeStrategy);

          service = new PopoverService();
          anchorRect = Rectangle.create(1, 2, 3, 4);
          popoverRect = Rectangle.create(1, 2, 3, 4);
          arrowRect = Rectangle.create(1, 2, 3, 4);

          result = service.calculate(fakeOptions);
        });

        it('should call strategy with proper options', () => {
          expect(fakeStrategy.calculate).toHaveBeenCalledWith(fakeOptions);
        });

        it('shuld return strategy output', () => {
          expect(result).toBe(fakePopoverVM);
        });
      });
    });
  });
});

function makePlacementStrategy(id: string, popoverVM: PopoverVM): PlacementStrategy {
  return {
    getId: jasmine.createSpy('id spy').and.returnValue(id),
    calculate: jasmine.createSpy('calculate spy').and.returnValue(popoverVM)
  };
}
