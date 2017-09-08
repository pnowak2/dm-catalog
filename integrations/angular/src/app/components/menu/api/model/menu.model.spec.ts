import { Menu } from './../interface/menu';
import { MenuModel } from './menu.model';
import { MenuItemModel } from './menu-item.model';

describe('MenuModel', () => {
  describe('Api', () => {
    describe('.create()', () => {
      let instance: Menu;

      beforeEach(() => {
        instance = MenuModel.create({
          menuItems: [
            MenuItemModel.create({ id: '1' }),
            MenuItemModel.create({ id: '2' }),
            MenuItemModel.create({ id: '3' })
          ]
        });
      })

      it('.should be defined', () => {
        expect(MenuModel.create).toEqual(jasmine.any(Function));
      });

      it('should create new instance without args', () => {
        const instanceWithoutArgs: Menu = MenuModel.create();
        expect(instanceWithoutArgs).toEqual(jasmine.any(MenuModel));
      });

      it('should create new instance with proper menu items count', () => {
        expect(instance.menuItems.length).toEqual(3);
      });

      it('shoudl create new instance with proper menu items passed', () => {
        expect(instance.menuItems[0].id).toEqual('1');
        expect(instance.menuItems[1].id).toEqual('2');
        expect(instance.menuItems[2].id).toEqual('3');
      });
    });
  });
});