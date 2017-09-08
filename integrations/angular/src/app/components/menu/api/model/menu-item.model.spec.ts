import { MenuItem } from './../interface/menu-item';
import { MenuItemModel } from './menu-item.model';

describe('MenuItemModel', () => {
  describe('Api', () => {
    describe('.create()', () => {
      let instance: MenuItem;

      beforeEach(() => {
        instance = MenuItemModel.create({
          id: '1',
          label: 'my label',
          iconClass: 'my-icon',
          selected: true,
          disabled: true
        });
      })

      it('.should be defined', () => {
        expect(MenuItemModel.create).toEqual(jasmine.any(Function));
      });

      it('should create new instance without args', () => {
        const instanceWithoutArgs: MenuItem = MenuItemModel.create();
        expect(instanceWithoutArgs).toEqual(jasmine.any(MenuItemModel));
      });

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
});