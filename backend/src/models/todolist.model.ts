import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Todolist extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  jobDescription?: string;

  @property({
    type: 'boolean',
  })
  checked?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Todolist>) {
    super(data);
  }
}

export interface TodolistRelations {
  // describe navigational properties here
}

export type TodolistWithRelations = Todolist & TodolistRelations;
