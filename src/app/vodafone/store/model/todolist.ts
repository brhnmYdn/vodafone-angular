export namespace Todolist {
  export interface State {
    createTodoResponse: TodoResponse | any;
    todoListResponse: TodoResponse[];
    deletedId: number | any;
    updatedResponse: TodoResponse | any;
  }

  export interface Todo {
    id: number;
    jobDescription: string;
    checked: boolean;
  }

  export interface DeleteResponse {
    id: number;
    active: boolean;
  }

  export interface TodoResponse extends Todo {}
  export interface TodoPutRequest extends Todo {}
}
