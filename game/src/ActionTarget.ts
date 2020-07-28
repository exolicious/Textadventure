export abstract class ActionTarget {
  public id: number;
  public name: string;
  public description: string;

  /*__________________________________________________________________________________________________________________________________________*/

  protected constructor(_id: number, _name: string, _description: string) {
    this.id = _id;
    this.name = _name;
    this.description = _description;
  }
}
