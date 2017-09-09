import { MenuItem } from './../interface/menu-item';
import { MenuItemModel } from './menu-item.model';

describe('MenuItemModel', () => {
  describe('Api', () => {
    describe('.create()', () => {
      it('.should be defined', () => {
        expect(MenuItemModel.create).toEqual(jasmine.any(Function));
      });

      describe('Without args passed in', () => {
        let instance: MenuItemModel;

        beforeEach(() => {
          instance = MenuItemModel.create();
        })

        it('should create new instance with id attribute', () => {
          expect(instance.id).toBeUndefined();
        });

        it('should create new instance with label attribute', () => {
          expect(instance.label).toBeUndefined();
        });

        it('should create new instance with icon class attribute', () => {
          expect(instance.iconClass).toBeUndefined();
        });

        it('should create new instance with selected attribute', () => {
          expect(instance.selected).toBeUndefined();
        });

        it('should create new instance with disabled attribute', () => {
          expect(instance.disabled).toBeUndefined();
        });
      });

      describe('With args passed in', () => {
        let instance: MenuItemModel;

        beforeEach(() => {
          instance = MenuItemModel.create({
            id: '1',
            label: 'my label',
            iconClass: 'my-icon',
            selected: true,
            disabled: true
          });
        })

        it('should create new instance with id attribute', () => {
          expect(instance.id).toEqual('1');
        });

        it('should create new instance with label attribute', () => {
          expect(instance.label).toEqual('my label');
        });

        it('should create new instance with icon class attribute', () => {
          expect(instance.iconClass).toEqual('my-icon');
        });

        it('should create new instance with selected attribute', () => {
          expect(instance.selected).toEqual(true);
        });

        it('should create new instance with disabled attribute', () => {
          expect(instance.disabled).toEqual(true);
        });
      });
    });

    describe('.isSelectable()', () => {
      it('should be defined', () => {
        expect(MenuItemModel.prototype.isSelectable).toEqual(jasmine.any(Function));
      });

      it('should return true if item may be selected', () => {
        const instance: MenuItemModel = MenuItemModel.create();
        expect(instance.isSelectable()).toBe(true);
      });

      it('should return false if item may not be selected', () => {
        const instance: MenuItemModel = MenuItemModel.create({ id: '1', disabled: true });
        expect(instance.isSelectable()).toBe(false);
      });
    });
  });
});