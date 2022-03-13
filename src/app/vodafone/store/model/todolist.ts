export namespace Todolist {
  export interface State {
    createTodoResponse: CreateTodoResponse | any;
    todoListResponse: CreateTodoResponse[];
    deletedId: number | any;
  }

  export interface CreateTodoResponse {
    id: number;
    jobDescription: string;
  }
  export interface DeleteResponse {
    id: number;
    active: boolean;
  }
}
