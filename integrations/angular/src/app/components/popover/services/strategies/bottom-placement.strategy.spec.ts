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
      let placementService: PlacementService;
      let strategy: BottomPlacementStrategy;
      let fakeRectangle: Rectangle;
      let result: PopoverVM;

      beforeEach(() => {
        fakeRectangle = Rectangle.empty();
        placementService = new PlacementService([]);
        strategy = new BottomPlacementStrategy(placementService);

        spyOn(PlacementService.prototype, 'place').and.returnValue(Rectangle.empty());
        result = strategy.calculate({
          placement: 'bottom',
          anchorRect: Rectangle.empty(),
          popoverRect: Rectangle.empty(),
          arrowRect: Rectangle.empty()
        });
      });

      it('should be defined', () => {
        expect(BottomPlacementStrategy.prototype.calculate).toEqual(jasmine.any(Function));
      });

      it('should behave...', () => {
        expect(result.placementClassModifier).toEqual(constants.directionClass.none);
      });
    });
  });
});
