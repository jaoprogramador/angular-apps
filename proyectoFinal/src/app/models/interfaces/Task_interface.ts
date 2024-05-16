export enum Levels{
    "Info",
    "Urgent",
    "Blocking"
}
export interface ITask {
    title: String;
    description: String;
    completed: boolean;
    level: Levels; 
  }
  