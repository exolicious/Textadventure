import {ActionTarget} from "../classes/entities/ActionTarget.js";

export interface IActionNeedsTarget {
  searchTarget(_targetName: string): ActionTarget;
}