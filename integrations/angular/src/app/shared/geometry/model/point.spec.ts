import { Point } from './point';

fdescribe('Point', () => {
  describe('Api', () => {
    describe('Point.create', () => {
      let p: Point;

      beforeEach(() => {
        p = Point.create(1, 2);
      });

      it('should be defined', () => {
        expect(Point.create).toEqual(jasmine.any(Function));
      });

      it('should return Point instance', () => {
        expect(p).toEqual(jasmine.any(Point));
      });

      it('should initialize x coordinate', () => {
        expect(p.x).toEqual(1);
      });

      it('should initialize y coordinate', () => {
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

      it('should add coordinates to point', () => {
        expect(pTrl).toEqual(Point.create(3, 6));
      });

      it('should return clone, new reference has to be made', () => {
        expect(pTrl).not.toBe(p);
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

      it('should scale coordinates to point', () => {
        expect(pScl).toEqual(Point.create(6, 12));
      });

      it('should return clone, new reference has to be made', () => {
        expect(pScl).not.toBe(p);
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

      it('should return true for coordinates of (0, 0)', () => {
        expect(p.isZero()).toBe(false);
      });
    });

    describe('.equals()', () => {
      let p: Point;

      beforeEach(() => {
        p = Point.create(1, 2);
      });

      it('should be defined', () => {
        expect(Point.prototype.equals).toEqual(jasmine.any(Function));
      });

      it('should return true for equal objects', () => {
        expect(p.equals(1, 2)).toBe(true);
      });

      it('should return false for not equal objects', () => {
        expect(p.equals(2, 2)).toBe(false);
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