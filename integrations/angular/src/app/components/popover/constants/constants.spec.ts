import { constants } from './constants';

describe('Constants', () => {
  describe('Api', () => {
    describe('.offset', () => {
      it('should be defined', () => {
        expect(constants.offset).toEqual(15);
      });
    });

    describe('.directionClass', () => {
      describe('.none', () => {
        it('should be defined', () => {
          expect(constants.directionClass.none).toEqual('no-direction');
        });
      });

      describe('.left', () => {
        it('should be defined', () => {
          expect(constants.directionClass.left).toEqual('left');
        });
      });

      describe('.top', () => {
        it('should be defined', () => {
          expect(constants.directionClass.top).toEqual('top');
        });
      });

      describe('.right', () => {
        it('should be defined', () => {
          expect(constants.directionClass.right).toEqual('right');
        });
      });

      describe('.bottom', () => {
        it('should be defined', () => {
          expect(constants.directionClass.bottom).toEqual('bottom');
        });
      });
    });
  });
});
