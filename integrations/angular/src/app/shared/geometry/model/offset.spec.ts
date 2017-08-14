import { Offset } from './offset';

describe('Offset', () => {
  describe('Api', () => {
    describe('Offset.create()', () => {
      let p: Offset;

      beforeEach(() => {
        p = Offset.create(1, 2);
      });

      it('should be defined', () => {
        expect(Offset.create).toEqual(jasmine.any(Function));
      });

      it('should return proper instance', () => {
        expect(p).toEqual(jasmine.any(Offset));
      });
    });

    describe('.x', () => {
      it('should return proper value', () => {
        const p = Offset.create(1, 2);
        expect(p.x).toEqual(1);
      });
    });

    describe('.y', () => {
      it('should return proper value', () => {
        const p = Offset.create(1, 2);
        expect(p.y).toEqual(2);
      });
    });

    describe('.equals()', () => {
      it('should be defined', () => {
        expect(Offset.prototype.equals).toEqual(jasmine.any(Function));
      });

      it('should return true for equal objects', () => {
        const b1 = Offset.create(1, 2);
        const b2 = Offset.create(1, 2);

        expect(b1.equals(b2)).toBe(true);
      });

      it('should return false for not equal objects', () => {
        const b1 = Offset.create(1, 2);
        const b2 = Offset.create(2, 3);

        expect(b1.equals(b2)).toBe(false);
      });
    });

    describe('.toString()', () => {
      let b: Offset;

      beforeEach(() => {
        b = Offset.create(1, 2);
      });

      it('should be defined', () => {
        expect(Offset.prototype.toString).toEqual(jasmine.any(Function));
      });

      it('should properly format output', () => {
        expect(b.toString()).toEqual('(1, 2)');
      });
    });
  });
});
