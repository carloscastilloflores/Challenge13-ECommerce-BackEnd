const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [Product]
  }).then((tagData) => {
    res.json(tagData);
  });
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    include: [Product]
  }).then((tagData) => {
    res.json(tagData);
  });
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create({
  }).then((tagData) => {
    res.json(tagData);
  }); 
  // create a new tag
});

router.put('/:id', (req, res) => {
  Tag.update({
    where: {
      id: req.params.id
    },
  })
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    },
  })
    .then((deletedTag) => {
      res.json(deletedTag); 
    })
    .catch((err) => res.json(err));
  // delete on tag by its `id` value
});

module.exports = router;
