import { RightPlacementStrategy } from './right-placement.strategy';
import { LeftPlacementStrategy } from './left-placement.strategy';

describe('Left Placement Strategy', () => {
  describe('Creation', () => {
    it('should inherit from Right Placement Strategy', () => {
      expect(new LeftPlacementStrategy(null)).toEqual(jasmine.any(RightPlacementStrategy));
    });
  });

  describe('Api', () => {
    describe('.getId()', () => {
      it('should be defined', () => {
        expect(LeftPlacementStrategy.prototype.getId).toEqual(jasmine.any(Function));
      });

      it('should return proper identifier', () => {
        expect(new LeftPlacementStrategy(null).getId()).toEqual('left');
      });
    });
  });
});
