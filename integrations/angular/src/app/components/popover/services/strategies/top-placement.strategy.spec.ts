import { BottomPlacementStrategy } from './bottom-placement.strategy';
import { TopPlacementStrategy } from './top-placement.strategy';

describe('Top Placement Strategy', () => {
  describe('Creation', () => {
    it('should inherit from Right Placement Strategy', () => {
      expect(new TopPlacementStrategy(null)).toEqual(jasmine.any(BottomPlacementStrategy));
    });
  });

  describe('Api', () => {
    describe('.getId()', () => {
      it('should be defined', () => {
        expect(TopPlacementStrategy.prototype.getId).toEqual(jasmine.any(Function));
      });

      it('should return proper identifier', () => {
        expect(new TopPlacementStrategy(null).getId()).toEqual('top');
      });
    });
  });
});
