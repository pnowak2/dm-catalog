// import { RectangleFactory } from './../../factory/rectangle-factory';
// import { RectangleService } from './rectangle.service';
// import { DefaultRectangleService } from './default-rectangle.service';

// describe('Default Rectangle Service', () => {
//   let service: RectangleService;

//   beforeEach(() => {
//     service = new DefaultRectangleService();
//   });

//   describe('Creation', () => {
//     it('should be created', () => {
//       expect(service).toBeDefined();
//     });
//   });

//   describe('Api', () => {
//     describe('.doRectsIntersect()', () => {
//       const r1 = RectangleFactory.fromData(1, 1, 3, 3);

//       it('should be defined', () => {
//         expect(service.doRectsIntersect).toEqual(jasmine.any(Function));
//       });

//       describe('Not Intersecting', () => {
//         it('should not intersect if touching with top left corner', () => {
//           const r2 = RectangleFactory.fromData(0, 0, 1, 1);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(false);
//         });

//         it('should not intersect if touching with top right corner', () => {
//           const r2 = RectangleFactory.fromData(4, 1, 1, 1);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(false);
//         });

//         it('should not intersect if touching with bottom left corner', () => {
//           const r2 = RectangleFactory.fromData(0, 4, 1, 1);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(false);
//         });

//         it('should not intersect if touching with bottom right corner', () => {
//           const r2 = RectangleFactory.fromData(4, 4, 1, 1);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(false);
//         });

//         it('should not intersect on touching top edges', () => {
//           const r2 = RectangleFactory.fromData(2, 0, 1, 1);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(false);
//         });

//         it('should not intersect on touching bottom edges', () => {
//           const r2 = RectangleFactory.fromData(2, 4, 1, 1);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(false);
//         });

//         it('should not intersect on touching left edges', () => {
//           const r2 = RectangleFactory.fromData(0, 2, 1, 1);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(false);
//         });

//         it('should not intersect on touching right edges', () => {
//           const r2 = RectangleFactory.fromData(4, 2, 1, 1);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(false);
//         });

//         it('should not intersect if placed above', () => {
//           const r2 = RectangleFactory.fromData(2, -1, 1, 1);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(false);
//         });

//         it('should not intersect if placed on the left', () => {
//           const r2 = RectangleFactory.fromData(-1, 2, 1, 1);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(false);
//         });

//         it('should not intersect if placed on the right', () => {
//           const r2 = RectangleFactory.fromData(5, 2, 1, 1);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(false);
//         });

//         it('should not intersect if placed on bottom', () => {
//           const r2 = RectangleFactory.fromData(2, 5, 1, 1);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(false);
//         });
//       });

//       describe('Intersecting by containing', () => {
//         it('should intersect if one element contains another', () => {
//           const r2 = RectangleFactory.fromData(2, 2, 1, 1);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(true);
//         });
//       });

//       describe('Intersecting on one edge', () => {
//         it('should intersect on crossing top edge', () => {
//           const r2 = RectangleFactory.fromData(2, 0, 1, 2);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(true);
//         });

//         it('should intersect on crossing bottom edge', () => {
//           const r2 = RectangleFactory.fromData(2, 3, 1, 2);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(true);
//         });

//         it('should intersect on crossing left edge', () => {
//           const r2 = RectangleFactory.fromData(0, 2, 2, 1);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(true);
//         });

//         it('should intersect on crossing right edge', () => {
//           const r2 = RectangleFactory.fromData(3, 2, 2, 1);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(true);
//         });
//       });

//       describe('Intersecting on two edges', () => {
//         it('should intersect on crossing left & top edge', () => {
//           const r2 = RectangleFactory.fromData(0, 0, 2, 2);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(true);
//         });

//         it('should intersect on touching left & top edge', () => {
//           const r2 = RectangleFactory.fromData(1, 1, 2, 2);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(true);
//         });

//         it('should intersect on crossing right & top edge', () => {
//           const r2 = RectangleFactory.fromData(3, 0, 2, 2);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(true);
//         });

//         it('should intersect on touching right & top edge', () => {
//           const r2 = RectangleFactory.fromData(2, 1, 2, 2);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(true);
//         });

//         it('should intersect on crossing left & bottom edge', () => {
//           const r2 = RectangleFactory.fromData(0, 3, 2, 2);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(true);
//         });

//         it('should intersect on touching left & bottom edge', () => {
//           const r2 = RectangleFactory.fromData(1, 2, 2, 2);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(true);
//         });

//         it('should intersect on crossing right & bottom edge', () => {
//           const r2 = RectangleFactory.fromData(3, 3, 2, 2);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(true);
//         });

//         it('should intersect on touching right & bottom edge', () => {
//           const r2 = RectangleFactory.fromData(2, 2, 2, 2);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(true);
//         });

//         it('should intersect on crossing left & right edge', () => {
//           const r2 = RectangleFactory.fromData(0, 2, 5, 1);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(true);
//         });

//         it('should intersect on touching left & right edge', () => {
//           const r2 = RectangleFactory.fromData(1, 2, 3, 1);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(true);
//         });

//         it('should intersect on crossing top & bottom edge', () => {
//           const r2 = RectangleFactory.fromData(2, 0, 1, 5);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(true);
//         });

//         it('should intersect on touching top & bottom edge', () => {
//           const r2 = RectangleFactory.fromData(2, 1, 1, 3);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(true);
//         });
//       });

//       describe('Intersecting on three edges', () => {
//         it('should intersect on top & left & bottom edge', () => {
//           const r2 = RectangleFactory.fromData(1, 1, 2, 3);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(true);
//         });

//         it('should intersect on left & bottom & right edge', () => {
//           const r2 = RectangleFactory.fromData(1, 2, 3, 2);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(true);
//         });

//         it('should intersect on bottom & right & top edge', () => {
//           const r2 = RectangleFactory.fromData(2, 1, 2, 3);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(true);
//         });

//         it('should intersect on right & top & left edge', () => {
//           const r2 = RectangleFactory.fromData(1, 1, 3, 2);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(true);
//         });
//       });

//       describe('Intersecting on four edges - same position', () => {
//         it('should intersect on top & left & right & bottom edge', () => {
//           const r2 = RectangleFactory.fromData(1, 1, 3, 3);

//           const result = service.doRectsIntersect(r1, r2);
//           expect(result).toBe(true);
//         });
//       });
//     });

//     describe('.intersect()', () => {
//       const r1 = RectangleFactory.fromData(1, 1, 3, 3);

//       it('should be defined', () => {
//         expect(service.intersect).toEqual(jasmine.any(Function));
//       });

//       describe('Not Intersecting', () => {
//         it('should not intersect if touching with top left corner', () => {
//           const r2 = RectangleFactory.fromData(0, 0, 1, 1);

//           const result = service.intersect(r1, r2);
//           expect(result).toBeNull();
//         });

//         it('should not intersect if touching with top right corner', () => {
//           const r2 = RectangleFactory.fromData(4, 1, 1, 1);

//           const result = service.intersect(r1, r2);
//           expect(result).toBeNull();
//         });

//         it('should not intersect if touching with bottom left corner', () => {
//           const r2 = RectangleFactory.fromData(0, 4, 1, 1);

//           const result = service.intersect(r1, r2);
//           expect(result).toBeNull();
//         });

//         it('should not intersect if touching with bottom right corner', () => {
//           const r2 = RectangleFactory.fromData(4, 4, 1, 1);

//           const result = service.intersect(r1, r2);
//           expect(result).toBeNull();
//         });

//         it('should not intersect on touching top edges', () => {
//           const r2 = RectangleFactory.fromData(2, 0, 1, 1);

//           const result = service.intersect(r1, r2);
//           expect(result).toBeNull();
//         });

//         it('should not intersect on touching bottom edges', () => {
//           const r2 = RectangleFactory.fromData(2, 4, 1, 1);

//           const result = service.intersect(r1, r2);
//           expect(result).toBeNull();
//         });

//         it('should not intersect on touching left edges', () => {
//           const r2 = RectangleFactory.fromData(0, 2, 1, 1);

//           const result = service.intersect(r1, r2);
//           expect(result).toBeNull();
//         });

//         it('should not intersect on touching right edges', () => {
//           const r2 = RectangleFactory.fromData(4, 2, 1, 1);

//           const result = service.intersect(r1, r2);
//           expect(result).toBeNull();
//         });


//         it('should not intersect if placed above', () => {
//           const r2 = RectangleFactory.fromData(2, -1, 1, 1);

//           const result = service.intersect(r1, r2);
//           expect(result).toBeNull();
//         });

//         it('should not intersect if placed on the left', () => {
//           const r2 = RectangleFactory.fromData(-1, 2, 1, 1);

//           const result = service.intersect(r1, r2);
//           expect(result).toBeNull();
//         });

//         it('should not intersect if placed on the right', () => {
//           const r2 = RectangleFactory.fromData(5, 2, 1, 1);

//           const result = service.intersect(r1, r2);
//           expect(result).toBeNull();
//         });

//         it('should not intersect if placed on bottom', () => {
//           const r2 = RectangleFactory.fromData(2, 5, 1, 1);

//           const result = service.intersect(r1, r2);
//           expect(result).toBeNull();
//         });
//       });

//       describe('Intersecting on one edge', () => {
//         it('should intersect on crossing top edge', () => {
//           const r2 = RectangleFactory.fromData(2, 0, 1, 2);

//           const result = service.intersect(r1, r2);
//           expect(result).toEqual(RectangleFactory.fromData(2, 1, 1, 1));
//         });

//         it('should intersect on crossing bottom edge', () => {
//           const r2 = RectangleFactory.fromData(2, 3, 1, 2);

//           const result = service.intersect(r1, r2);
//           expect(result).toEqual(RectangleFactory.fromData(2, 3, 1, 1));
//         });

//         it('should intersect on crossing left edge', () => {
//           const r2 = RectangleFactory.fromData(0, 2, 2, 1);

//           const result = service.intersect(r1, r2);
//           expect(result).toEqual(RectangleFactory.fromData(1, 2, 1, 1));
//         });

//         it('should intersect on crossing right edge', () => {
//           const r2 = RectangleFactory.fromData(3, 2, 2, 1);

//           const result = service.intersect(r1, r2);
//           expect(result).toEqual(RectangleFactory.fromData(3, 2, 1, 1));
//         });
//       });

//       describe('Intersecting on two edges', () => {
//         it('should intersect on crossing left & top edge', () => {
//           const r2 = RectangleFactory.fromData(0, 0, 2, 2);

//           const result = service.intersect(r1, r2);
//           expect(result).toEqual(RectangleFactory.fromData(1, 1, 1, 1));
//         });

//         it('should intersect on touching left & top edge', () => {
//           const r2 = RectangleFactory.fromData(1, 1, 2, 2);

//           const result = service.intersect(r1, r2);
//           expect(result).toEqual(RectangleFactory.fromData(1, 1, 2, 2));
//         });

//         it('should intersect on crossing right & top edge', () => {
//           const r2 = RectangleFactory.fromData(3, 0, 2, 2);

//           const result = service.intersect(r1, r2);
//           expect(result).toEqual(RectangleFactory.fromData(3, 1, 1, 1));
//         });

//         it('should intersect on touching right & top edge', () => {
//           const r2 = RectangleFactory.fromData(2, 1, 2, 2);

//           const result = service.intersect(r1, r2);
//           expect(result).toEqual(RectangleFactory.fromData(2, 1, 2, 2));
//         });

//         it('should intersect on crossing left & bottom edge', () => {
//           const r2 = RectangleFactory.fromData(0, 3, 2, 2);

//           const result = service.intersect(r1, r2);
//           expect(result).toEqual(RectangleFactory.fromData(1, 3, 1, 1));
//         });

//         it('should intersect on touching left & bottom edge', () => {
//           const r2 = RectangleFactory.fromData(1, 2, 2, 2);

//           const result = service.intersect(r1, r2);
//           expect(result).toEqual(RectangleFactory.fromData(1, 2, 2, 2));
//         });

//         it('should intersect on crossing right & bottom edge', () => {
//           const r2 = RectangleFactory.fromData(3, 3, 2, 2);

//           const result = service.intersect(r1, r2);
//           expect(result).toEqual(RectangleFactory.fromData(3, 3, 1, 1));
//         });

//         it('should intersect on touching right & bottom edge', () => {
//           const r2 = RectangleFactory.fromData(2, 2, 2, 2);

//           const result = service.intersect(r1, r2);
//           expect(result).toEqual(RectangleFactory.fromData(2, 2, 2, 2));
//         });

//         it('should intersect on crossing left & right edge', () => {
//           const r2 = RectangleFactory.fromData(0, 2, 5, 1);

//           const result = service.intersect(r1, r2);
//           expect(result).toEqual(RectangleFactory.fromData(1, 2, 3, 1));
//         });

//         it('should intersect on touching left & right edge', () => {
//           const r2 = RectangleFactory.fromData(1, 2, 3, 1);

//           const result = service.intersect(r1, r2);
//           expect(result).toEqual(RectangleFactory.fromData(1, 2, 3, 1));
//         });

//         it('should intersect on crossing top & bottom edge', () => {
//           const r2 = RectangleFactory.fromData(2, 0, 1, 5);

//           const result = service.intersect(r1, r2);
//           expect(result).toEqual(RectangleFactory.fromData(2, 1, 1, 3));
//         });

//         it('should intersect on touching top & bottom edge', () => {
//           const r2 = RectangleFactory.fromData(2, 1, 1, 3);

//           const result = service.intersect(r1, r2);
//           expect(result).toEqual(RectangleFactory.fromData(2, 1, 1, 3));
//         });
//       });

//       describe('Intersecting on three edges', () => {
//         it('should intersect on top & left & bottom edge', () => {
//           const r2 = RectangleFactory.fromData(1, 1, 2, 3);

//           const result = service.intersect(r1, r2);
//           expect(result).toEqual(RectangleFactory.fromData(1, 1, 2, 3));
//         });

//         it('should intersect on left & bottom & right edge', () => {
//           const r2 = RectangleFactory.fromData(1, 2, 3, 2);

//           const result = service.intersect(r1, r2);
//           expect(result).toEqual(RectangleFactory.fromData(1, 2, 3, 2));
//         });

//         it('should intersect on bottom & right & top edge', () => {
//           const r2 = RectangleFactory.fromData(2, 1, 2, 3);

//           const result = service.intersect(r1, r2);
//           expect(result).toEqual(RectangleFactory.fromData(2, 1, 2, 3));
//         });

//         it('should intersect on right & top & left edge', () => {
//           const r2 = RectangleFactory.fromData(1, 1, 3, 2);

//           const result = service.intersect(r1, r2);
//           expect(result).toEqual(RectangleFactory.fromData(1, 1, 3, 2));
//         });
//       });

//       describe('Intersecting on four edges - same position', () => {
//         it('should intersect on top & left & right & bottom edge', () => {
//           const r2 = RectangleFactory.fromData(1, 1, 3, 3);

//           const result = service.intersect(r1, r2);
//           expect(result).toEqual(RectangleFactory.fromData(1, 1, 3, 3));
//         });
//       });
//     });
//   });
// });
