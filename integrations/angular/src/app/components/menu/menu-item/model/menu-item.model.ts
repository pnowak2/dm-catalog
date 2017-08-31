import { MenuItem } from '../interface/menu-item';

export class MenuItemModel implements MenuItem {
  private constructor(
    public id: string,
    public label: string,
    public iconClass: string,
    public disabled: boolean,
    public selected: boolean
  ) { }

  public static create(props: MenuItem): MenuItemModel {
    return new MenuItemModel(
      props.id,
      props.label,
      props.iconClass,
      props.disabled,
      props.selected,
    );
  }
}
