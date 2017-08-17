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

    describe('.getPositionedPopoverRect()', () => {
      let placementService: PlacementService;
      let strategy: BottomPlacementStrategy;
      let fakeRectangle: Rectangle;

      beforeEach(() => {
        fakeRectangle = Rectangle.empty();
        placementService = new PlacementService([]);
        strategy = new BottomPlacementStrategy(placementService);

        spyOn(placementService, 'place').and.returnValue(fakeRectangle);
      });

      it('should be defined', () => {
        expect(BottomPlacementStrategy.prototype.getPositionedPopoverRect).toEqual(jasmine.any(Function));
      });

      it('should call placement service with appropriate params', () => {
        const anchorRect = Rectangle.empty();
        const popoverRect = Rectangle.empty();

        strategy.getPositionedPopoverRect(anchorRect, popoverRect);

        expect(placementService.place).toHaveBeenCalledWith({
          anchor: anchorRect,
          element: popoverRect,
          placementId: strategy.getId(),
          offsetAlong: constants.offset
        });
      });

      it('should return output of placement service outcome', () => {
        const result = strategy.getPositionedPopoverRect(null, null);
        expect(result).toBe(fakeRectangle);
      });
    });

    describe('.getArrowOffset()', () => {
      let strategy: BottomPlacementStrategy;

      beforeEach(() => {
        strategy = new BottomPlacementStrategy(new PlacementService([]));
      });

      it('should be defined', () => {
        expect(BottomPlacementStrategy.prototype.getArrowOffset).toEqual(jasmine.any(Function));
      });

      it('should return zero offset for elements horizontally center aligned', () => {
        const anchorRect = Rectangle.create(3, 0, 1, 1);
        const popoverRect = Rectangle.create(1, 1, 5, 5);

        const result = strategy.getArrowOffset(anchorRect, popoverRect);

        expect(result).toEqual(Offset.create(0, 0));
      });

      it('should return proper offset for elements not aligned centrally', () => {
        const anchorRect = Rectangle.create(5, 0, 1, 1);
        const popoverRect = Rectangle.create(1, 1, 5, 5);

        const result = strategy.getArrowOffset(anchorRect, popoverRect);

        expect(result).toEqual(Offset.create(2, 0));
      });
    });

    describe('.getMaxArrowOffset()', () => {
      let strategy: BottomPlacementStrategy;

      beforeEach(() => {
        strategy = new BottomPlacementStrategy(new PlacementService([]));
      });

      it('should be defined', () => {
        expect(BottomPlacementStrategy.prototype.getMaxArrowOffset).toEqual(jasmine.any(Function));
      });

      it('should return maximum offset so arrow does not exceed popover rect', () => {
        const popoverRect = Rectangle.create(1, 1, 5, 5);
        const arrowRect = Rectangle.create(3, 0, 1, 1);

        const result = strategy.getMaxArrowOffset(popoverRect, arrowRect);

        expect(result).toEqual(2);
      });
    });

    describe('.isFlipped()', () => {
      let anchorRect: Rectangle;
      let popoverRect: Rectangle;
      let strategy: BottomPlacementStrategy;

      beforeEach(() => {
        strategy = new BottomPlacementStrategy(new PlacementService([]));
        anchorRect = Rectangle.create(5, 0, 1, 1);
        popoverRect = Rectangle.create(1, 1, 5, 5);
        spyOn(Rectangle.prototype, 'isAbove').and.returnValue(true);
      });

      it('should be defined', () => {
        expect(BottomPlacementStrategy.prototype.isFlipped).toEqual(jasmine.any(Function));
      });

      it('should return result of rect utility method', () => {
        const result = strategy.isFlipped(anchorRect, popoverRect);
        expect(result).toEqual(true);
      });

      it('should call rect utility method with proper args', () => {
        const result = strategy.isFlipped(anchorRect, popoverRect);

        expect(popoverRect.isAbove).toHaveBeenCalledWith(anchorRect.center());
      });
    });

    describe('.isArrowTooFar()', () => {
      let strategy: BottomPlacementStrategy;

      beforeEach(() => {
        strategy = new BottomPlacementStrategy(new PlacementService([]));
      });

      it('should be defined', () => {
        expect(BottomPlacementStrategy.prototype.isArrowTooFar).toEqual(jasmine.any(Function));
      });

      it('should return true if arrowRect is too far outside popover', () => {
        const anchorRect = Rectangle.create(6, -1, 1, 1);
        const popoverRect = Rectangle.create(1, 1, 5, 5);
        const arrowRect = Rectangle.create(6, 1, 5, 5);

      });
    });
  });
});
