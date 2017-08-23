import { TabModel } from './../model/tab.model';
import { Tab } from './../interface/tab';
import { TabsService } from './tabs.service';

fdescribe('TabsService', () => {
  describe('Creation', () => {
    it('should create an instance without args', () => {
      expect(() => {
        const s = new TabsService();
      }).not.toThrow();
    });
  });

  describe('Api', () => {
    let s: TabsService;

    beforeEach(() => {
      s = new TabsService();
    });

    describe('.selectTab())', () => {
      it('should be defined', () => {
        expect(TabsService.prototype.selectTab).toEqual(jasmine.any(Function));
      });

      it('should return copy of tabs', () => {
        const tab1 = TabModel.create({});
        const tab2 = TabModel.create({});
        const tab3 = TabModel.create({});
        const tabs = [tab1, tab2, tab3];

        const result = s.selectTab(tabs, tab2);
        expect(result).not.toBe(tabs);
      });

      describe('One tab selected upfront', () => {
        let tabs: Array<Tab>;
        let tab1: Tab, tab2: Tab, tab3: Tab;
        let result: Array<Tab>;

        beforeEach(() => {
          tab1 = TabModel.create({
            label: 'tab1',
            selected: true
          });
          tab2 = TabModel.create({
            label: 'tab2',
            selected: false
          });
          tab3 = TabModel.create({
            label: 'tab3',
            selected: false
          });
          tabs = [tab1, tab2, tab3];

          result = s.selectTab(tabs, tab2);
        });

        it('should return first tab deselected', () => {
          expect(result[0].selected).toBe(false);
        });

        it('should return second tab selected', () => {
          expect(result[1].selected).toBe(true);
        });

        it('should return third tab deselected', () => {
          expect(result[2].selected).toBe(false);
        });
      });
    });

    describe('.closeTab())', () => {
      let tabs: Array<Tab>;
      let tab1: Tab, tab2: Tab, tab3: Tab;
      let result: Array<Tab>;

      beforeEach(() => {
        tab1 = TabModel.create({
          label: 'tab1',
          selected: true
        });
        tab2 = TabModel.create({
          label: 'tab2',
          selected: false
        });
        tab3 = TabModel.create({
          label: 'tab3',
          selected: false
        });
        tabs = [tab1, tab2, tab3];

        result = s.closeTab(tabs, tab1);
      });

      it('should be defined', () => {
        expect(TabsService.prototype.closeTab).toEqual(jasmine.any(Function));
      });
    });
  });
});

