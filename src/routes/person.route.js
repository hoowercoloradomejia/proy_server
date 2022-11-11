const express = require('express');
const person_route = express.Router();
const person_model = require('../models/person.model');

/* Añadir */
person_route.post('/person', (req, res) => {
  const new_person = person_model(req.body);
  new_person
    .save()
    .then(() => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

/* Listar personas */
person_route.get('/', (req, res) => {
  person_model
    .find()
    .then(() => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});
/* Consultar una persona en especifico */
person_route.get('/:personId', (req, res) => {
  const { personId } = req.params;
  person_model
    .findById(personId)
    .then(() => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

/* Actualizar */
person_route.put('/:personId', (req, res) => {
  const { personId } = req.params;
  const { name, lastname, email, contact, profesion  } = req.body;
  person_model.updateOne(
    { _id: personId },
    { $set: { name, lastname, email, contact, profesion } }
      .then(() => {
        res.json(data);
      })
      .catch((err) => {
        res.json({ message: err });
      })
  );
});
/* Eliminar */
person_route.delete('/:personId', (req, res) => {
  const { personId } = req.params;
  person_model
    .deleteOne({ _id: personId })
    .then(() => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = person_route;
