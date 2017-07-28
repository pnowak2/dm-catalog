// import { RectangleFactory } from './../../factory/rectangle-factory';
// import { Injectable } from '@angular/core';
// import { Point } from './../../model/point';
// import { Rectangle } from './../../model/rectangle';
// import { Bounds } from './../../model/bounds';
// import { RectangleService, PlacementOptions, AnchorName } from './rectangle.service';

// @Injectable()
// export class DefaultRectangleService implements RectangleService {
//   moveRelativeTo(ref: Rectangle, element: Rectangle, options: PlacementOptions): Rectangle {
//     let {
//       offsetX = 0,
//       offsetY = 0,
//       refAnchor = AnchorName.BottomCenter,
//       elementAnchor = AnchorName.TopCenter
//     } = options;

//     let refPoint: Point = this.pointByAnchorName(ref, refAnchor);
//     let elementPoint: Point = this.pointByAnchorName(element, elementAnchor);

//     let correctionX = elementPoint.x - refPoint.x;
//     let correctionY = elementPoint.y - refPoint.y;

//     return this.moveToPoint(element, {
//       x: element.position.x - correctionX + offsetX,
//       y: element.position.y - correctionY + offsetY
//     });
//   }

//   pointByAnchorName(rect: Rectangle, position: AnchorName): Point {
//     let refPoint: Point;

//     if (position === AnchorName.TopLeft) {
//       refPoint = {
//         x: rect.position.x,
//         y: rect.position.y
//       }
//     }

//     if (position === AnchorName.TopCenter) {
//       refPoint = {
//         x: rect.position.x + (rect.dimensions.width / 2),
//         y: rect.position.y
//       }
//     }

//     if (position === AnchorName.TopRight) {
//       refPoint = {
//         x: rect.position.x + rect.dimensions.width,
//         y: rect.position.y
//       }
//     }

//     if (position === AnchorName.CenterLeft) {
//       refPoint = {
//         x: rect.position.x,
//         y: rect.position.y + (rect.dimensions.height / 2)
//       }
//     }

//     if (position === AnchorName.CenterCenter) {
//       refPoint = {
//         x: rect.position.x + (rect.dimensions.width / 2),
//         y: rect.position.y + (rect.dimensions.height / 2)
//       }
//     }

//     if (position === AnchorName.CenterRight) {
//       refPoint = {
//         x: rect.position.x + rect.dimensions.width,
//         y: rect.position.y + (rect.dimensions.height / 2)
//       }
//     }

//     if (position === AnchorName.BottomLeft) {
//       refPoint = {
//         x: rect.position.x,
//         y: rect.position.y + rect.dimensions.height
//       }
//     }

//     if (position === AnchorName.BottomCenter) {
//       refPoint = {
//         x: rect.position.x + (rect.dimensions.width / 2),
//         y: rect.position.y + rect.dimensions.height
//       }
//     }

//     if (position === AnchorName.BottomRight) {
//       refPoint = {
//         x: rect.position.x + rect.dimensions.width,
//         y: rect.position.y + rect.dimensions.height
//       }
//     }

//     return refPoint;
//   }

//   containsPoint(ref: Rectangle, point: Point): boolean {
//     const refBounds = this.bounds(ref);

//     const containsX = point.x >= refBounds.left && point.x <= refBounds.right
//     const containsY = point.y >= refBounds.top && point.y <= refBounds.bottom

//     return containsX && containsY;
//   }
// }
