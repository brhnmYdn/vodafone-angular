import { Todolist } from '../store/model/todolist';

export namespace Ecommon {
  export interface MappingTodolist {
    todo: Todolist.CreateTodoResponse;
    checked: boolean;
  }
}
