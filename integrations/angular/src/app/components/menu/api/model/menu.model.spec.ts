import { Menu } from './../interface/menu';
import { MenuModel } from './menu.model';
import { MenuItemModel } from './menu-item.model';

describe('MenuModel', () => {
  describe('Api', () => {
    describe('.create()', () => {
      let instance: MenuModel;

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

      describe('Without args passed in', () => {
        let instance: MenuModel;

        beforeEach(() => {
          instance = MenuModel.create();
        });

        it('should have empty array of items', () => {
          expect(instance.menuItems).toEqual([]);
        });
      });

      it('should create new instance with proper menu items count', () => {
        expect(instance.menuItems.length).toEqual(3);
      });

      it('should create new instance with proper menu items passed', () => {
        expect(instance.menuItems[0].id).toEqual('1');
        expect(instance.menuItems[1].id).toEqual('2');
        expect(instance.menuItems[2].id).toEqual('3');
      });
    });

    describe('.hasSelection', () => {
      it('should true if selected item exists', () => {
        const item1 = MenuItemModel.create({ id: '1', selected: false });
        const item2 = MenuItemModel.create({ id: '2', selected: true });
        const item3 = MenuItemModel.create({ id: '3', selected: false });

        const instance = MenuModel.create({
          menuItems: [item1, item2, item3]
        });

        expect(instance.hasSelection).toBe(true);
      });

      it('should return false if selected item does not exist', () => {
        const item1 = MenuItemModel.create({ id: '1', selected: false });
        const item2 = MenuItemModel.create({ id: '2', selected: false });
        const item3 = MenuItemModel.create({ id: '3', selected: false });

        const instance = MenuModel.create({
          menuItems: [item1, item2, item3]
        });

        expect(instance.hasSelection).toBe(false);
      });
    });

    describe('.selectedItem', () => {
      it('should return selected item if exists', () => {
        const item1 = MenuItemModel.create({ id: '1', selected: false });
        const item2 = MenuItemModel.create({ id: '2', selected: true });
        const item3 = MenuItemModel.create({ id: '3', selected: false });

        const instance = MenuModel.create({
          menuItems: [item1, item2, item3]
        });

        expect(instance.selectedItem).toBe(item2);
      });

      it('should return undefined item if does not exist', () => {
        const item1 = MenuItemModel.create({ id: '1', selected: false });
        const item2 = MenuItemModel.create({ id: '2', selected: false });
        const item3 = MenuItemModel.create({ id: '3', selected: false });

        const instance = MenuModel.create({
          menuItems: [item1, item2, item3]
        });

        expect(instance.selectedItem).toBe(undefined);
      });
    });

    describe('.selectableItems', () => {
      it('should return array of items which are selectable', () => {
        const item1 = MenuItemModel.create({ id: '1', selected: false });
        const item2 = MenuItemModel.create({ id: '2', selected: true });
        const item3 = MenuItemModel.create({ id: '3', selected: true });

        const instance = MenuModel.create({
          menuItems: [item1, item2, item3]
        });

        expect(instance.selectableItems).toEqual([item2, item3]);
      });
    });

    describe('.selectNextItem()', () => {
      it('should select first item if nothing is selected', () => {
        const item1 = MenuItemModel.create({ id: '1', selected: false });
        const item2 = MenuItemModel.create({ id: '2', selected: false });
        const item3 = MenuItemModel.create({ id: '3', selected: false });

        const instance = MenuModel.create({
          menuItems: [item1, item2, item3]
        });

        instance.selectNextItem();

        expect(instance.menuItems[0].selected).toBe(true);
      });

      it('should select (combinations here)  ', () => {
      });
    });
  });
});