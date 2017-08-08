import { Point } from './point';

describe('Point', () => {
  describe('Api', () => {
    describe('Point.create()', () => {
      let p: Point;

      beforeEach(() => {
        p = Point.create(1, 2);
      });

      it('should be defined', () => {
        expect(Point.create).toEqual(jasmine.any(Function));
      });

      it('should return proper instance', () => {
        expect(p).toEqual(jasmine.any(Point));
      });
    });

    describe('.x', () => {
      it('should return proper value', () => {
        const p = Point.create(1, 2);
        expect(p.x).toEqual(1);
      });
    });

    describe('.y', () => {
      it('should return proper value', () => {
        const p = Point.create(1, 2);
        expect(p.y).toEqual(2);
      });
    });

    describe('.clone()', () => {
      let p: Point;
      let cloned: Point;

      beforeEach(() => {
        p = Point.create(1, 2);
        cloned = p.clone();
      });

      it('should be defined', () => {
        expect(Point.prototype.clone).toEqual(jasmine.any(Function));
      });

      it('should return instance with same properties', () => {
        expect(cloned).toEqual(p);
      });

      it('should return clone, new reference has to be made', () => {
        expect(p).not.toBe(cloned);
      });
    });

    describe('.set()', () => {
      let p: Point;
      let pSet: Point;

      beforeEach(() => {
        p = Point.create(1, 2);
        pSet = p.set(2, 4);
      });

      it('should be defined', () => {
        expect(Point.prototype.set).toEqual(jasmine.any(Function));
      });

      it('should translate coordinates', () => {
        expect(pSet).toEqual(Point.create(2, 4));
      });

      it('should return this', () => {
        expect(pSet).toBe(p);
      });
    });

    describe('.translate()', () => {
      let p: Point;
      let pTrl: Point;

      beforeEach(() => {
        p = Point.create(1, 2);
        pTrl = p.translate(2, 4);
      });

      it('should be defined', () => {
        expect(Point.prototype.translate).toEqual(jasmine.any(Function));
      });

      it('should translate coordinates', () => {
        expect(pTrl).toEqual(Point.create(3, 6));
      });

      it('should return this', () => {
        expect(pTrl).toBe(p);
      });
    });

    describe('.scale()', () => {
      let p: Point;
      let pScl: Point;

      beforeEach(() => {
        p = Point.create(2, 4);
        pScl = p.scale(3);
      });

      it('should be defined', () => {
        expect(Point.prototype.scale).toEqual(jasmine.any(Function));
      });

      it('should scale coordinates', () => {
        expect(pScl).toEqual(Point.create(6, 12));
      });

      it('should return this', () => {
        expect(pScl).toBe(p);
      });
    });

    describe('.map()', () => {
      it('should be defined', () => {
        expect(Point.prototype.map).toEqual(jasmine.any(Function));
      });

      it('should map bounds according to function provided', () => {
        const p = Point.create(2, 3);
        p.map(n => n * 2);

        expect(p).toEqual(Point.create(4, 6));
      });

      it('should return this', () => {
        const p = Point.create(2, 3);

        expect(p.map((n) => n)).toBe(p);
      });
    });

    describe('.isZero()', () => {
      let pZero: Point;
      let p: Point;

      beforeEach(() => {
        p = Point.create(2, 4);
        pZero = Point.create(0, 0);
      });

      it('should be defined', () => {
        expect(Point.prototype.isZero).toEqual(jasmine.any(Function));
      });

      it('should return true for coordinates of (0, 0)', () => {
        expect(pZero.isZero()).toBe(true);
      });

      it('should return false for coordinates other than (0, 0)', () => {
        expect(p.isZero()).toBe(false);
      });
    });

    describe('.equals()', () => {
      it('should be defined', () => {
        expect(Point.prototype.equals).toEqual(jasmine.any(Function));
      });

      it('should return true for equal objects', () => {
        const p1 = Point.create(1, 2);
        const p2 = Point.create(1, 2);

        expect(p1.equals(p2)).toBe(true);
      });

      it('should return false for not equal objects', () => {
        const p1 = Point.create(1, 2);
        const p2 = Point.create(2, 3);

        expect(p1.equals(p2)).toBe(false);
      });
    });

    describe('.toString()', () => {
      let p: Point;

      beforeEach(() => {
        p = Point.create(1, 2);
      });

      it('should be defined', () => {
        expect(Point.prototype.toString).toEqual(jasmine.any(Function));
      });

      it('should properly format output', () => {
        expect(p.toString()).toEqual('(1, 2)');
      });
    });
  });
});
