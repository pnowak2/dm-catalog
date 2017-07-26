import { Rectangle } from './rectangle';

fdescribe('Rectangle', () => {
  let r: Rectangle;

  beforeEach(() => {
    r = new Rectangle();
  });

  describe('Creation', () => {
    it('should be created', () => {
      expect(r).toBeDefined();
    });
  });
});