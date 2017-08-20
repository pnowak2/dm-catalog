import { PopoverVM } from './../../viewmodel/popover.viewmodel';
import { Offset } from './../../../../shared/geometry/model/offset';
import { constants } from './../../constants/constants';
import { Rectangle } from './../../../../shared/geometry/model/rectangle';
import { PlacementService } from './../../../../shared/geometry/services/placement/placement.service';
import { BottomPlacementStrategy } from './bottom-placement.strategy';

describe('BottomPlacementStrategy Placement Strategy', () => {
  describe('Api', () => {
    describe('.getId()', () => {
      it('should be defined', () => {
        expect(BottomPlacementStrategy.prototype.getId).toEqual(jasmine.any(Function));
      });

      it('should return proper identifier', () => {
        expect(new BottomPlacementStrategy(null).getId()).toEqual('bottom');
      });
    });

    describe('.calculate()', () => {
      it('should be defined', () => {
        expect(BottomPlacementStrategy.prototype.calculate).toEqual(jasmine.any(Function));
      });

      describe('Not flipped, arrow visible, zero arrow offset', () => {
        let placementService: PlacementService;
        let strategy: BottomPlacementStrategy;
        let placedRect: Rectangle;
        let result: PopoverVM;
        let anchorRect;
        let popoverRect;
        let arrowRect;

        beforeEach(() => {
          anchorRect = Rectangle.create(5, 0, 1, 1);
          popoverRect = Rectangle.create(0, 0, 5, 5);
          arrowRect = Rectangle.create(0, 0, 1, 1);

          placementService = new PlacementService([]);
          strategy = new BottomPlacementStrategy(placementService);

          placedRect = Rectangle.create(3, 3, 5, 5);
          spyOn(PlacementService.prototype, 'place').and.returnValue(placedRect);

          result = strategy.calculate({
            placement: constants.directionClass.bottom,
            anchorRect,
            popoverRect,
            arrowRect
          });
        });

        it('should call placement service with appropariate arguments', () => {
          expect(placementService.place).toHaveBeenCalledWith({
            anchor: anchorRect,
            element: popoverRect,
            placementId: constants.directionClass.bottom,
            offsetAlong: constants.offset
          });
        });

        it('should return proper popover position', () => {
          expect(result.popoverPosition).toEqual(placedRect.position());
        });

        it('should return proper class modifier', () => {
          expect(result.placementClassModifier).toEqual(constants.directionClass.bottom);
        });

        it('should return proper arrow offset', () => {
          expect(result.arrowOffset).toEqual(Offset.create(0, 0));
        });
      });

      describe('Not flipped, arrow visible, non zero arrow offset', () => {
        let placementService: PlacementService;
        let strategy: BottomPlacementStrategy;
        let placedRect: Rectangle;
        let result: PopoverVM;
        let anchorRect;
        let popoverRect;
        let arrowRect;

        beforeEach(() => {
          anchorRect = Rectangle.create(6, 0, 1, 1);
          popoverRect = Rectangle.create(0, 0, 5, 5);
          arrowRect = Rectangle.create(0, 0, 1, 1);

          placementService = new PlacementService([]);
          strategy = new BottomPlacementStrategy(placementService);

          placedRect = Rectangle.create(3, 3, 5, 5);
          spyOn(PlacementService.prototype, 'place').and.returnValue(placedRect);

          result = strategy.calculate({
            placement: constants.directionClass.bottom,
            anchorRect,
            popoverRect,
            arrowRect
          });
        });

        it('should call placement service with appropariate arguments', () => {
          expect(placementService.place).toHaveBeenCalledWith({
            anchor: anchorRect,
            element: popoverRect,
            placementId: constants.directionClass.bottom,
            offsetAlong: constants.offset
          });
        });

        it('should return proper popover position', () => {
          expect(result.popoverPosition).toEqual(placedRect.position());
        });

        it('should return proper class modifier', () => {
          expect(result.placementClassModifier).toEqual(constants.directionClass.bottom);
        });

        it('should return proper arrow offset', () => {
          expect(result.arrowOffset).toEqual(Offset.create(1, 0));
        });
      });

      describe('Not flipped, arrow invisible, non zero arrow offset', () => {
        let placementService: PlacementService;
        let strategy: BottomPlacementStrategy;
        let placedRect: Rectangle;
        let result: PopoverVM;
        let anchorRect;
        let popoverRect;
        let arrowRect;

        beforeEach(() => {
          anchorRect = Rectangle.create(8, 0, 1, 1);
          popoverRect = Rectangle.create(0, 0, 5, 5);
          arrowRect = Rectangle.create(0, 0, 1, 1);

          placementService = new PlacementService([]);
          strategy = new BottomPlacementStrategy(placementService);

          placedRect = Rectangle.create(3, 3, 5, 5);
          spyOn(PlacementService.prototype, 'place').and.returnValue(placedRect);

          result = strategy.calculate({
            placement: constants.directionClass.bottom,
            anchorRect,
            popoverRect,
            arrowRect
          });
        });

        it('should call placement service with appropariate arguments', () => {
          expect(placementService.place).toHaveBeenCalledWith({
            anchor: anchorRect,
            element: popoverRect,
            placementId: constants.directionClass.bottom,
            offsetAlong: constants.offset
          });
        });

        it('should return proper popover position', () => {
          expect(result.popoverPosition).toEqual(placedRect.position());
        });

        it('should return proper class modifier', () => {
          expect(result.placementClassModifier).toEqual(constants.directionClass.none);
        });

        it('should return proper arrow offset', () => {
          expect(result.arrowOffset).toEqual(Offset.create(3, 0));
        });
      });

      describe('Flipped, arrow visible, zero arrow offset', () => {
        let placementService: PlacementService;
        let strategy: BottomPlacementStrategy;
        let placedRect: Rectangle;
        let result: PopoverVM;
        let anchorRect;
        let popoverRect;
        let arrowRect;

        beforeEach(() => {
          anchorRect = Rectangle.create(5, 0, 1, 1);
          popoverRect = Rectangle.create(0, 0, 5, 5);
          arrowRect = Rectangle.create(0, 0, 1, 1);

          placementService = new PlacementService([]);
          strategy = new BottomPlacementStrategy(placementService);

          placedRect = Rectangle.create(3, -8, 5, 5);
          spyOn(PlacementService.prototype, 'place').and.returnValue(placedRect);

          result = strategy.calculate({
            placement: constants.directionClass.bottom,
            anchorRect,
            popoverRect,
            arrowRect
          });
        });

        it('should call placement service with appropariate arguments', () => {
          expect(placementService.place).toHaveBeenCalledWith({
            anchor: anchorRect,
            element: popoverRect,
            placementId: constants.directionClass.bottom,
            offsetAlong: constants.offset
          });
        });

        it('should return proper popover position', () => {
          expect(result.popoverPosition).toEqual(placedRect.position());
        });

        it('should return proper class modifier', () => {
          expect(result.placementClassModifier).toEqual(constants.directionClass.top);
        });

        it('should return proper arrow offset', () => {
          expect(result.arrowOffset).toEqual(Offset.create(0, 0));
        });
      });

      describe('Flipped, arrow visible, non zero arrow offset', () => {
        let placementService: PlacementService;
        let strategy: BottomPlacementStrategy;
        let placedRect: Rectangle;
        let result: PopoverVM;
        let anchorRect;
        let popoverRect;
        let arrowRect;

        beforeEach(() => {
          anchorRect = Rectangle.create(6, 0, 1, 1);
          popoverRect = Rectangle.create(0, 0, 5, 5);
          arrowRect = Rectangle.create(0, 0, 1, 1);

          placementService = new PlacementService([]);
          strategy = new BottomPlacementStrategy(placementService);

          placedRect = Rectangle.create(3, -8, 5, 5);
          spyOn(PlacementService.prototype, 'place').and.returnValue(placedRect);

          result = strategy.calculate({
            placement: constants.directionClass.bottom,
            anchorRect,
            popoverRect,
            arrowRect
          });
        });

        it('should call placement service with appropariate arguments', () => {
          expect(placementService.place).toHaveBeenCalledWith({
            anchor: anchorRect,
            element: popoverRect,
            placementId: constants.directionClass.bottom,
            offsetAlong: constants.offset
          });
        });

        it('should return proper popover position', () => {
          expect(result.popoverPosition).toEqual(placedRect.position());
        });

        it('should return proper class modifier', () => {
          expect(result.placementClassModifier).toEqual(constants.directionClass.top);
        });

        it('should return proper arrow offset', () => {
          expect(result.arrowOffset).toEqual(Offset.create(1, 0));
        });
      });
    });
  });
});
