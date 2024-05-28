export enum LEVELS{
    "INFO",
    "URGENT",
    ""

}
export interface ITask{
    title: string;
    description: string;
    completed: boolean;
    level: LEVELS;
}