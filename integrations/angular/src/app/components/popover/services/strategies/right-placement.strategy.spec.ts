import { RightPlacementStrategy } from './right-placement.strategy';

describe('Right Placement Strategy', () => {
  describe('Api', () => {
    describe('.getId()', () => {
      it('should be defined', () => {
        expect(RightPlacementStrategy.prototype.getId).toEqual(jasmine.any(Function));
      });

      it('should return proper identifier', () => {
        expect(new RightPlacementStrategy(null).getId()).toEqual('right');
      });
    });
  });
});
