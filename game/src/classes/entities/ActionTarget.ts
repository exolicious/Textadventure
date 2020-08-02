export abstract class ActionTarget {
  public id: number;
  public type: string;
  public name: string;
  public description: string;
  /*__________________________________________________________________________________________________________________________________________*/

  protected constructor(_id: number, _type: string, _name: string, _description: string) {
    this.id = _id;
    this.type = _type;
    this.name = _name;
    this.description = _description;
  }
}
