export interface MenuItemProps {
  id: string;
  label: string;
}

export class MenuItem {
  private constructor(public id: string, public label: string) { }

  public static create(props: MenuItemProps): MenuItem {
    return new MenuItem(
      props.id,
      props.label
    );
  }
}
