import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TodolistDataSource} from '../datasources';
import {Todolist, TodolistRelations} from '../models';

export class TodolistRepository extends DefaultCrudRepository<
  Todolist,
  typeof Todolist.prototype.id,
  TodolistRelations
> {
  constructor(
    @inject('datasources.todolist') dataSource: TodolistDataSource,
  ) {
    super(Todolist, dataSource);
  }
}
