import { PopoverVM } from './../../viewmodel/popover.viewmodel';
import { Offset } from './../../../../shared/geometry/model/offset';
import { constants } from './../../constants/constants';
import { Rectangle } from './../../../../shared/geometry/model/rectangle';
import { PlacementService } from './../../../../shared/geometry/services/placement/placement.service';
import { RightPlacementStrategy } from './right-placement.strategy';

describe('RightPlacementStrategy Placement Strategy', () => {
  describe('Api', () => {
    describe('.getId()', () => {
      it('should be defined', () => {
        expect(RightPlacementStrategy.prototype.getId).toEqual(jasmine.any(Function));
      });

      it('should return proper identifier', () => {
        expect(new RightPlacementStrategy(null).getId()).toEqual('right');
      });
    });

    describe('.calculate()', () => {
      it('should be defined', () => {
        expect(RightPlacementStrategy.prototype.calculate).toEqual(jasmine.any(Function));
      });

      describe('Not flipped, arrow visible, zero arrow offset', () => {
        let placementService: PlacementService;
        let strategy: RightPlacementStrategy;
        let placedRect: Rectangle;
        let result: PopoverVM;
        let anchorRect;
        let popoverRect;
        let arrowRect;

        beforeEach(() => {
          anchorRect = Rectangle.create(0, 5, 1, 1);
          popoverRect = Rectangle.create(0, 0, 5, 5);
          arrowRect = Rectangle.create(0, 0, 1, 1);

          placementService = new PlacementService([]);
          strategy = new RightPlacementStrategy(placementService);

          placedRect = Rectangle.create(3, 3, 5, 5);
          spyOn(PlacementService.prototype, 'place').and.returnValue(placedRect);

          result = strategy.calculate({
            placement: constants.directionClass.right,
            anchorRect,
            popoverRect,
            arrowRect
          });
        });

        it('should call placement service with appropariate arguments', () => {
          expect(placementService.place).toHaveBeenCalledWith({
            anchor: anchorRect,
            element: popoverRect,
            placementId: constants.directionClass.right,
            offsetAlong: constants.offset
          });
        });

        it('should return proper popover position', () => {
          expect(result.popoverPosition).toEqual(placedRect.position());
        });

        it('should return proper class modifier', () => {
          expect(result.placementClassModifier).toEqual(constants.directionClass.right);
        });

        it('should return proper arrow offset', () => {
          expect(result.arrowOffset).toEqual(Offset.create(0, 0));
        });
      });

      describe('Not flipped, arrow visible, non zero arrow offset', () => {
        let placementService: PlacementService;
        let strategy: RightPlacementStrategy;
        let placedRect: Rectangle;
        let result: PopoverVM;
        let anchorRect;
        let popoverRect;
        let arrowRect;

        beforeEach(() => {
          anchorRect = Rectangle.create(0, 6, 1, 1);
          popoverRect = Rectangle.create(0, 0, 5, 5);
          arrowRect = Rectangle.create(0, 0, 1, 1);

          placementService = new PlacementService([]);
          strategy = new RightPlacementStrategy(placementService);

          placedRect = Rectangle.create(3, 3, 5, 5);
          spyOn(PlacementService.prototype, 'place').and.returnValue(placedRect);

          result = strategy.calculate({
            placement: constants.directionClass.right,
            anchorRect,
            popoverRect,
            arrowRect
          });
        });

        it('should call placement service with appropariate arguments', () => {
          expect(placementService.place).toHaveBeenCalledWith({
            anchor: anchorRect,
            element: popoverRect,
            placementId: constants.directionClass.right,
            offsetAlong: constants.offset
          });
        });

        it('should return proper popover position', () => {
          expect(result.popoverPosition).toEqual(placedRect.position());
        });

        it('should return proper class modifier', () => {
          expect(result.placementClassModifier).toEqual(constants.directionClass.right);
        });

        it('should return proper arrow offset', () => {
          expect(result.arrowOffset).toEqual(Offset.create(0, 1));
        });
      });

      describe('Not flipped, arrow invisible, non zero arrow offset', () => {
        let placementService: PlacementService;
        let strategy: RightPlacementStrategy;
        let placedRect: Rectangle;
        let result: PopoverVM;
        let anchorRect;
        let popoverRect;
        let arrowRect;

        beforeEach(() => {
          anchorRect = Rectangle.create(0, 8, 1, 1);
          popoverRect = Rectangle.create(0, 0, 5, 5);
          arrowRect = Rectangle.create(0, 0, 1, 1);

          placementService = new PlacementService([]);
          strategy = new RightPlacementStrategy(placementService);

          placedRect = Rectangle.create(3, 3, 5, 5);
          spyOn(PlacementService.prototype, 'place').and.returnValue(placedRect);

          result = strategy.calculate({
            placement: constants.directionClass.right,
            anchorRect,
            popoverRect,
            arrowRect
          });
        });

        it('should call placement service with appropariate arguments', () => {
          expect(placementService.place).toHaveBeenCalledWith({
            anchor: anchorRect,
            element: popoverRect,
            placementId: constants.directionClass.right,
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
          expect(result.arrowOffset).toEqual(Offset.create(0, 3));
        });
      });

      describe('Flipped, arrow visible, zero arrow offset', () => {
        let placementService: PlacementService;
        let strategy: RightPlacementStrategy;
        let placedRect: Rectangle;
        let result: PopoverVM;
        let anchorRect;
        let popoverRect;
        let arrowRect;

        beforeEach(() => {
          anchorRect = Rectangle.create(0, 5, 1, 1);
          popoverRect = Rectangle.create(0, 0, 5, 5);
          arrowRect = Rectangle.create(0, 0, 1, 1);

          placementService = new PlacementService([]);
          strategy = new RightPlacementStrategy(placementService);

          placedRect = Rectangle.create(-8, 3, 5, 5);
          spyOn(PlacementService.prototype, 'place').and.returnValue(placedRect);

          result = strategy.calculate({
            placement: constants.directionClass.right,
            anchorRect,
            popoverRect,
            arrowRect
          });
        });

        it('should call placement service with appropariate arguments', () => {
          expect(placementService.place).toHaveBeenCalledWith({
            anchor: anchorRect,
            element: popoverRect,
            placementId: constants.directionClass.right,
            offsetAlong: constants.offset
          });
        });

        it('should return proper popover position', () => {
          expect(result.popoverPosition).toEqual(placedRect.position());
        });

        it('should return proper class modifier', () => {
          expect(result.placementClassModifier).toEqual(constants.directionClass.left);
        });

        it('should return proper arrow offset', () => {
          expect(result.arrowOffset).toEqual(Offset.create(0, 0));
        });
      });

      describe('Flipped, arrow visible, non zero arrow offset', () => {
        let placementService: PlacementService;
        let strategy: RightPlacementStrategy;
        let placedRect: Rectangle;
        let result: PopoverVM;
        let anchorRect;
        let popoverRect;
        let arrowRect;

        beforeEach(() => {
          anchorRect = Rectangle.create(0, 6, 1, 1);
          popoverRect = Rectangle.create(0, 0, 5, 5);
          arrowRect = Rectangle.create(0, 0, 1, 1);

          placementService = new PlacementService([]);
          strategy = new RightPlacementStrategy(placementService);

          placedRect = Rectangle.create(-8, 3, 5, 5);
          spyOn(PlacementService.prototype, 'place').and.returnValue(placedRect);

          result = strategy.calculate({
            placement: constants.directionClass.right,
            anchorRect,
            popoverRect,
            arrowRect
          });
        });

        it('should call placement service with appropariate arguments', () => {
          expect(placementService.place).toHaveBeenCalledWith({
            anchor: anchorRect,
            element: popoverRect,
            placementId: constants.directionClass.right,
            offsetAlong: constants.offset
          });
        });

        it('should return proper popover position', () => {
          expect(result.popoverPosition).toEqual(placedRect.position());
        });

        it('should return proper class modifier', () => {
          expect(result.placementClassModifier).toEqual(constants.directionClass.left);
        });

        it('should return proper arrow offset', () => {
          expect(result.arrowOffset).toEqual(Offset.create(0, 1));
        });
      });
    });
  });
});
