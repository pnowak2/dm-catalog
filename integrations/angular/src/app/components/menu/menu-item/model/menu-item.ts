export interface MenuItemProps {
  id: string;
  label: string;
  iconClass?: string;
  selected?: boolean;
}

export class MenuItem {
  private constructor(
    public id: string,
    public label: string,
    public iconClass: string,
    public selected: boolean
  ) { }

  public static create(props: MenuItemProps): MenuItem {
    return new MenuItem(
      props.id,
      props.label,
      props.iconClass,
      props.selected,
    );
  }
}
