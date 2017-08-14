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
  });
});
