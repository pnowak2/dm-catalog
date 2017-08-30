export class MenuItem {
  private constructor(public id: string, public label: string) { }

  public static create(id: string, label: string): MenuItem {
    return new MenuItem(id, label);
  }
}
