import { Point } from './point';
import { Rectangle } from './rectangle';

class RectsGenerator {
  public static containingRects() {
    return [{
      relationName: 'left',
      r1: Rectangle.create(1, 1, 3, 3),
      r2: Rectangle.create(1, 2, 1, 1),
      isIntersect: true,
      intersectRect: Rectangle.create(2, 2, 1, 1)
    }, {
      relationName: 'center',
      r1: Rectangle.create(1, 1, 3, 3),
      r2: Rectangle.create(2, 2, 1, 1),
      isIntersect: true,
      intersectRect: Rectangle.create(2, 2, 1, 1)
    }]
  }
}

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

    describe('Rectangle.createEmpty', () => {
      let r: Rectangle;

      beforeEach(() => {
        r = Rectangle.createEmpty();
      });

      it('should be defined', () => {
        expect(Rectangle.createEmpty).toEqual(jasmine.any(Function));
      });

      it('should return proper instance', () => {
        expect(r).toEqual(jasmine.any(Rectangle));
      });

      it('should be empty rectangle', () => {
        expect(r.isEmpty()).toBe(true);
      });
    });

    describe('.left', () => {
      it('should return proper value', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        expect(r.left).toEqual(1);
      });
    });

    describe('.right', () => {
      it('should return proper value', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        expect(r.right).toEqual(4);
      });
    });

    describe('.top', () => {
      it('should breturn proper value', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        expect(r.top).toEqual(2);
      });
    });

    describe('.bottom', () => {
      it('should return proper value', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        expect(r.bottom).toEqual(6);
      });
    });

    describe('.x', () => {
      describe('get()', () => {
        it('should return proper value', () => {
          const r = Rectangle.create(1, 2, 3, 4);

          expect(r.x).toEqual(1);
        });
      });

      describe('set()', () => {
        it('should update proper values', () => {
          const r = Rectangle.create(1, 2, 3, 4);
          r.x = 5;

          expect(r).toEqual(Rectangle.create(5, 2, 3, 4));
        });
      });
    });

    describe('.y', () => {
      describe('get()', () => {
        it('should return proper value', () => {
          const r = Rectangle.create(1, 2, 3, 4);
          expect(r.y).toEqual(2);
        });
      });

      describe('set()', () => {
        it('should update proper values', () => {
          const r = Rectangle.create(1, 2, 3, 4);
          r.y = 4;

          expect(r).toEqual(Rectangle.create(1, 4, 3, 4));
        });
      });
    });

    describe('.width', () => {
      describe('get()', () => {
        it('should return proper value', () => {
          const r = Rectangle.create(1, 2, 3, 4);
          expect(r.width).toEqual(3);
        });
      });

      describe('set()', () => {
        it('should update proper values', () => {
          const r = Rectangle.create(1, 2, 3, 4);
          r.width = 8;

          expect(r).toEqual(Rectangle.create(1, 2, 8, 4));
        });
      });
    });

    describe('.height', () => {
      describe('get()', () => {
        it('should return proper value', () => {
          const r = Rectangle.create(1, 2, 3, 4);
          expect(r.height).toEqual(4);
        });
      });

      describe('set()', () => {
        it('should update proper values', () => {
          const r = Rectangle.create(1, 2, 3, 4);
          r.height = 7;

          expect(r).toEqual(Rectangle.create(1, 2, 3, 7));
        });
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

    describe('.setRectangle()', () => {
      let r: Rectangle;
      let rRct: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
        rRct = r.setRectangle(2, 3, 4, 5);
      });

      it('should be defined', () => {
        expect(Rectangle.prototype.setRectangle).toEqual(jasmine.any(Function));
      });

      it('should set proper rectangle', () => {
        expect(rRct).toEqual(Rectangle.create(2, 3, 4, 5));
      });

      it('should return this', () => {
        expect(rRct).toBe(r);
      });
    });

    describe('.setBounds()', () => {
      let r: Rectangle;
      let rBds: Rectangle;

      beforeEach(() => {
        r = Rectangle.create(1, 2, 3, 4);
        rBds = r.setBounds(2, 3, 4, 5);
      });

      it('should be defined', () => {
        expect(Rectangle.prototype.setBounds).toEqual(jasmine.any(Function));
      });

      it('should set proper bounds', () => {
        expect(rBds).toEqual(Rectangle.create(2, 3, 2, 2));
      });

      it('should return this', () => {
        expect(rBds).toBe(r);
      });
    });

    describe('.copyFrom()', () => {
      let r1: Rectangle;
      let r2: Rectangle;
      let rCpy: Rectangle;

      beforeEach(() => {
        r1 = Rectangle.create(1, 2, 3, 4);
        r2 = Rectangle.create(2, 3, 4, 5);
        rCpy = r2.copyFrom(r1);
      });

      it('should be defined', () => {
        expect(Rectangle.prototype.copyFrom).toEqual(jasmine.any(Function));
      });

      it('should copy from rectangle', () => {
        expect(rCpy).toEqual(Rectangle.create(1, 2, 3, 4));
      });

      it('should return this', () => {
        expect(rCpy).toBe(r2);
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

      it('should return this', () => {
        expect(rMvd).toBe(r);
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

      it('should return this', () => {
        expect(rTrl).toBe(r);
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

      it('should return this', () => {
        expect(rScl).toBe(r);
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
        const r = Rectangle.create(1, 2, 0, 0);
        expect(r.isEmpty()).toBe(true);
      });
    });

    describe('.contains()', () => {
      it('should be defined', () => {
        expect(Rectangle.prototype.contains).toEqual(jasmine.any(Function));
      });

      it('should return false if this is empty', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        const empty = Rectangle.createEmpty();

        expect(empty.contains(r)).toBe(false);
      });

      it('should return true if other is empty', () => {
        const r = Rectangle.create(1, 2, 3, 4);
        const empty = Rectangle.createEmpty();

        expect(r.contains(empty)).toBe(true);
      });

      it('return true if contains other rect', () => {
        const rects = RectsGenerator.containingRects();

        rects.forEach((entry) => {
          expect(entry.r1.contains(entry.r2)).toBe(true, entry.relationName);
        });
      });

      it('should behave...', () => {
        pending();
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