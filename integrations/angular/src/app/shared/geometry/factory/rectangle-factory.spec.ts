import { Rectangle } from './../model/rectangle';
import { RectangleFactory } from './rectangle-factory';

describe('RectangleFactory', () => {
  describe('Api', () => {
    describe('RectangleFactory.fromHtmlElement()', () => {
      it('should be defined', () => {
        expect(RectangleFactory.fromHtmlElement).toEqual(jasmine.any(Function));
      });

      it('should return rectangle from Html element', () => {
        spyOn(RectangleFactory, 'getWindow').and.returnValue({
          pageXOffset: 12,
          pageYOffset: 17
        });

        const fakeEl = {
          offsetWidth: 27,
          offsetHeight: 39,
          getBoundingClientRect() {
            return {
              left: 2,
              top: 1
            };
          }
        } as HTMLElement;

        const rect = RectangleFactory.fromHtmlElement(fakeEl);

        expect(rect).toEqual(Rectangle.create(14, 18, 27, 39));
      });
    });

    describe('RectangleFactory.fromSvgElement()', () => {
      it('should be defined', () => {
        expect(RectangleFactory.fromSvgElement).toEqual(jasmine.any(Function));
      });

      it('should return rectangle from Svg element', () => {
        spyOn(RectangleFactory, 'getWindow').and.returnValue({
          pageXOffset: 12,
          pageYOffset: 17
        });

        const fakeEl = {
          clientWidth: 27,
          clientHeight: 39,
          getBoundingClientRect() {
            return {
              left: 2,
              top: 1
            };
          }
        } as SVGElement;

        const rect = RectangleFactory.fromSvgElement(fakeEl);

        expect(rect).toEqual(Rectangle.create(14, 18, 27, 39));
      });
    });

    describe('RectangleFactory.fromWindow()', () => {
      it('should be defined', () => {
        expect(RectangleFactory.fromWindow).toEqual(jasmine.any(Function));
      });

      it('should return rectangle from window', () => {
        spyOn(RectangleFactory, 'getWindow').and.returnValue({
          pageXOffset: 12,
          pageYOffset: 17,
          document: {
            documentElement: {
              clientWidth: 1280,
              clientHeight: 800,
            }
          }
        });

        const rect = RectangleFactory.fromWindow();

        expect(rect).toEqual(Rectangle.create(12, 17, 1280, 800));
      });
    });

    describe('RectangleFactory.getWindow()', () => {
      it('should be defined', () => {
        expect(RectangleFactory.getWindow).toEqual(jasmine.any(Function));
      });

      it('should return global window object', () => {
        expect(RectangleFactory.getWindow()).toBe(window);
      });
    });
  });
});
