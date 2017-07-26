import { Point } from './point';
import { Rectangle } from './rectangle';

fdescribe('Rectangle', () => {
  describe('Api', () => {
    describe('Rectangle.create', () => {
      let r: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
      });

      it('should be defined', () => {
        expect(Rectangle.create).toEqual(jasmine.any(Function));
      });

      it('should return proper instance', () => {
        expect(r).toEqual(jasmine.any(Rectangle));
      });
    });

    describe('Rectangle.createFromBounds', () => {
      let r: Rectangle;

      beforeEach(() => {
        r = Rectangle.createFromBounds(1, 2, 3, 4);
      });

      it('should be defined', () => {
        expect(Rectangle.createFromBounds).toEqual(jasmine.any(Function));
      });

      it('should return proper instance', () => {
        expect(r).toEqual(jasmine.any(Rectangle));
      });

      it('should have properly set properties', () => {
        expect(Rectangle.create(1, 2, 2, 2).equals(r)).toBe(true);
      });
    });

    describe('.left', () => {
      let r: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
      });

      it('should be initialized properly', () => {
        expect(r.left).toEqual(1);
      });
    });

    describe('.right', () => {
      let r: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
      });

      it('should be initialized properly', () => {
        expect(r.right).toEqual(4);
      });
    });

    describe('.top', () => {
      let r: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
      });

      it('should be initialized properly', () => {
        expect(r.top).toEqual(2);
      });
    });

    describe('.bottom', () => {
      let r: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
      });

      it('should be initialized properly', () => {
        expect(r.bottom).toEqual(6);
      });
    });

    describe('.x', () => {
      let r: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
      });

      it('should be initialized properly', () => {
        expect(r.x).toEqual(1);
      });
    });

    describe('.y', () => {
      let r: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
      });

      it('should be initialized properly', () => {
        expect(r.y).toEqual(2);
      });
    });

    describe('.width', () => {
      let r: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
      });

      it('should be initialized properly', () => {
        expect(r.width).toEqual(3);
      });
    });

    describe('.height', () => {
      let r: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
      });

      it('should be initialized properly', () => {
        expect(r.height).toEqual(4);
      });
    });

    describe('.clone()', () => {
      let r: Rectangle;
      let cloned: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
        cloned = r.clone();
      });

      it('should be defined', () => {
        expect(Rectangle.prototype.clone).toEqual(jasmine.any(Function));
      });

      it('should return instance with same properties', () => {
        expect(cloned).toEqual(r);
      });

      it('should return clone, new reference has to be made', () => {
        expect(r).not.toBe(cloned);
      });
    });

    describe('.moveTo()', () => {
      let r: Rectangle;
      let rMvd: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
        rMvd = r.moveTo(12, 7);
      });

      it('should be defined', () => {
        expect(Rectangle.prototype.moveTo).toEqual(jasmine.any(Function));
      });

      it('should translate coordinates', () => {
        expect(rMvd).toEqual(Rectangle.create(12, 7, 3, 4));
      });

      it('should return clone, new reference has to be made', () => {
        expect(rMvd).not.toBe(r);
      });
    });

    describe('.translate()', () => {
      let r: Rectangle;
      let rTrl: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
        rTrl = r.translate(2, 4);
      });

      it('should be defined', () => {
        expect(Rectangle.prototype.translate).toEqual(jasmine.any(Function));
      });

      it('should translate coordinates', () => {
        expect(rTrl).toEqual(Rectangle.create(3, 6, 3, 4));
      });

      it('should return clone, new reference has to be made', () => {
        expect(rTrl).not.toBe(r);
      });
    });

    describe('.scale()', () => {
      let r: Rectangle;
      let rScl: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(2, 3, 4, 5);
        rScl = r.scale(3);
      });

      it('should be defined', () => {
        expect(Rectangle.prototype.scale).toEqual(jasmine.any(Function));
      });

      it('should scale coordinates', () => {
        expect(rScl).toEqual(Rectangle.create(6, 9, 12, 15));
      });

      it('should return clone, new reference has to be made', () => {
        expect(rScl).not.toBe(r);
      });
    });

    describe('.center()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.center).toEqual(jasmine.any(Function));
      });

      it('should return center point of rectangle', () => {
        const r = Rectangle.create(1, 1, 4, 6);

        expect(r.center()).toEqual(Point.create(3, 4));
      });
    });

    describe('.isEmpty()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.isEmpty).toEqual(jasmine.any(Function));
      });

      it('should return true for zero width', () => {
        const r = Rectangle.create(1, 2, 0, 5);
        expect(r.isEmpty()).toBe(true);
      });

      it('should return true for zero height', () => {
        const r = Rectangle.create(1, 2, 4, 0);
        expect(r.isEmpty()).toBe(true);
      });

      it('should return true for zero width and height', () => {
        const r = Rectangle.create(1, 2, 4, 0);
        expect(r.isEmpty()).toBe(true);
      });
    });

    describe('.equals()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.equals).toEqual(jasmine.any(Function));
      });

      it('should return true for equal objects', () => {
        const r1 = Rectangle.create(1, 2, 3, 4);
        const r2 = Rectangle.create(1, 2, 3, 4);

        expect(r1.equals(r2)).toBe(true);
      });

      it('should return false for not equal objects', () => {
        const r1 = Rectangle.create(1, 2, 3, 4);
        const r2 = Rectangle.create(2, 3, 4, 5);

        expect(r1.equals(r2)).toBe(false);
      });

      it('should return true for empty objects', () => {
        const r1 = Rectangle.create(1, 2, 0, 4);
        const r2 = Rectangle.create(5, 3, 5, 0);

        expect(r1.equals(r2)).toBe(true);
      });
    });

    describe('.toString()', () => {
      let r: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
      });

      it('should be defined', () => {
        expect(Rectangle.prototype.toString).toEqual(jasmine.any(Function));
      });

      it('should properly format output', () => {
        expect(r.toString()).toEqual('(1, 2, 3, 4)');
      });
    });
  });

});