import { Person } from './Person';

const uuidv1 = require('uuid/v1');
const express = require('express');
const personsRouter = express.Router();

let persons: Person[] = [];
personsRouter.get('/', (req: any, res: any) => {
  res.send(persons);
});

personsRouter.post('/', (req: any, res: any) => {
  const id = uuidv1().toLowerCase();
  persons = persons.concat(new Person(id, req.body.name));
  res.status(201).send({ id });
});

personsRouter.get('/:id', (req: any, res: any) => {
  const id = (req.params.id || '').toLowerCase();
  const matches = persons.filter(c => c.id === id);
  if (matches.length) {
    res.send(matches[0]);
  } else {
    res.status(404).send();
  }
});

personsRouter.put('/:id', (req: any, res: any) => {
  const id = (req.params.id || '').toLowerCase();
  const matches = persons.filter(c => c.id === id);
  if (matches.length) {
    const match = matches[0];
    match.id = req.body.id || id;
    match.name = req.body.name;

    res.send(match);
  } else {
    res.status(404).send();
  }
});

personsRouter.delete('/:id', (req: any, res: any) => {
  const id = (req.params.id || '').toLowerCase();
  const matches = persons.filter(c => c.id === id);
  if (matches.length) {
    const match = matches[0];
    const index = persons.indexOf(match);
    persons = persons.splice(index);

    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

module.exports = personsRouter;
