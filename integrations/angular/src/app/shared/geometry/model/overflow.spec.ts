import { Overflow } from './overflow';

fdescribe('Bounds', () => {
  describe('Api', () => {
    describe('Bounds.create', () => {
      let p: Overflow;

      beforeEach(() => {
        p = Overflow.create(1, 2, 3, 4);
      });

      it('should be defined', () => {
        expect(Overflow.create).toEqual(jasmine.any(Function));
      });

      it('should return proper instance', () => {
        expect(p).toEqual(jasmine.any(Overflow));
      });
    });

    describe('.left', () => {
      it('should return proper value', () => {
        const p = Overflow.create(1, 2, 3, 4)
        expect(p.left).toEqual(1);
      });
    });

    describe('.top', () => {
      it('should return proper value', () => {
        const p = Overflow.create(1, 2, 3, 4)
        expect(p.top).toEqual(2);
      });
    });

    describe('.right', () => {
      it('should return proper value', () => {
        const p = Overflow.create(1, 2, 3, 4)
        expect(p.right).toEqual(3);
      });
    });

    describe('.bottom', () => {
      it('should return proper value', () => {
        const p = Overflow.create(1, 2, 3, 4)
        expect(p.bottom).toEqual(4);
      });
    });

    describe('.equals()', () => {
      it('should be defined', () => {
        expect(Overflow.prototype.equals).toEqual(jasmine.any(Function));
      });

      it('should return true for equal objects', () => {
        const b1 = Overflow.create(1, 2, 3, 4);
        const b2 = Overflow.create(1, 2, 3, 4);

        expect(b1.equals(b2)).toBe(true);
      });

      it('should return false for not equal objects', () => {
        const b1 = Overflow.create(1, 2, 3, 4);
        const b2 = Overflow.create(2, 3, 4, 5);

        expect(b1.equals(b2)).toBe(false);
      });
    });

    describe('.toString()', () => {
      let b: Overflow;

      beforeEach(() => {
        b = Overflow.create(1, 2, 3, 4);
      });

      it('should be defined', () => {
        expect(Overflow.prototype.toString).toEqual(jasmine.any(Function));
      });

      it('should properly format output', () => {
        expect(b.toString()).toEqual('(1, 2, 3, 4)');
      });
    });
  });
});
