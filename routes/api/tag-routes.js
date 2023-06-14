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
    id: req.body.id,
    tag_name: req.body.tag_name
  }).then((tagData) => {
    res.json(tagData);
  }); 
  // create a new tag
});

router.put('/:id', async (req, res) => {
  // Check if the request is authenticated
  // if (!req.headers.authorization) {
  //   res.status(401).json({
  //     message: "Unauthorized"
  //   });
  //   return;
  // }

  // Get the tag id from the request
  const id = req.params.id;

  // Check if the tag exists
  const tag = await Tag.findOne({
    where: {
      id: id
    }
  });

  // If the tag does not exist, throw an error
  if (!tag) {
    throw new Error("Tag does not exist");
  }

  // Get the tag name from the request body
  const tag_name = req.body.tag_name;

  // Update the tag
  await tag.update({
    tag_name: tag_name
  });

  // Return the updated tag
  res.json(tag);
});

// router.put('/:id', async (req, res) => {
//   try {
//     const tagData = await Tag.update({
//       where: {
//             id: req.params.id
//           },
//       tag_name: req.params.tag_name
//     });
//     if (!tagData) {
//       res.status(404).json({ message: 'Nothing to Update!' });
//       return;
//     }
//     res.status(200).json(tagData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.put('/:id', (req, res) => {
//   Tag.update({
//     where: {
//       id: req.params.id
//     },
//     tag_name: req.body.tag_name
//   }).then((tagData) =>  res.status(200).json(tagData))
//       .catch((err) => {
//         // console.log(err);
//         res.status(400).json(err);
//       });
//   }); 
  // update a tag's name by its `id` value

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
