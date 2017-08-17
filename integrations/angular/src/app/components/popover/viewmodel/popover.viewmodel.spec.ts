import { Offset } from './../../../shared/geometry/model/offset';
import { Point } from './../../../shared/geometry/model/point';
import { constants } from './../constants/constants';
import { PopoverVM } from './popover.viewmodel';

describe('Popover View Model', () => {

  describe('Creation', () => {
    describe('Without arguments', () => {
      let vm: PopoverVM;
      beforeEach(() => {
        vm = PopoverVM.create();
      });

      it('should not throw if created without args', () => {
        expect(function () {
          PopoverVM.create();
        }).not.toThrow();
      });
      it('should properly initialize default placement class modifier', () => {
        expect(vm.placementClassModifier).toEqual(constants.directionClass.none);
      });

      it('should properly initialize popover position', () => {
        expect(vm.popoverPosition).toEqual(Point.create(0, 0));
      });

      it('should properly initialize arrow offset', () => {
        expect(vm.arrowOffset).toEqual(Offset.create(0, 0));
      });
    });

    describe('With arguments', () => {
      let vm: PopoverVM;
      beforeEach(() => {
        vm = PopoverVM.create({
          placementClassModifier: constants.directionClass.bottom,
          popoverPosition: Point.create(1, 2),
          arrowOffset: Offset.create(5, 6)
        });
      });

      it('should properly initialize default placement class modifier', () => {
        expect(vm.placementClassModifier).toEqual(constants.directionClass.bottom);
      });

      it('should properly initialize popover position', () => {
        expect(vm.popoverPosition).toEqual(Point.create(1, 2));
      });

      it('should properly initialize arrow offset', () => {
        expect(vm.arrowOffset).toEqual(Offset.create(5, 6));
      });
    });
  });
});
