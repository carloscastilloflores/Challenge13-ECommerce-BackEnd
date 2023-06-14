const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Product,
router.get('/', (req, res) => {
  Category.findAll({
    include: [Product]
  }).then((categoryData) => {
    res.json(categoryData);
  });
});
// router.get('/', async (req, res) => {
//   try {
//     const categoryData = await Category.findAll();
//     //Include Product associated 
//     res.status(200).json(categoryData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
router.get('/:id', (req, res) => {
  Category.findOne({
      where: {
        id: req.params.id
      },
      include: [Product]
   }).then((productData) => {
    res.json(productData);
  });
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
});

// router.get('/:id', async (req, res) => {
//   try { 
//     const categoryData = await Category.findbyPk(req.params.id, {
//       include: [{ model: Category, through: Product, as: 'product_category'}] 
//     });

//     if (!categoryData) {
//       res.status(404).json({ message: 'No category found with this id!'}); 
//       return;
//     }
    
//     res.status(200).json(categoryData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
//   // find one category by its `id` value
//   // be sure to include its associated Products
// });

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  } 
  // create a new category
});

router.put('/:id', (req, res) => {
  Category.update(
    {
      // All the fields you can update and the data attached to the request body.
      id: req.body.id,
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch((err) => res.json(err))
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!'}); 
      return; 
    }
    
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err); 
  }
  // delete a category by its `id` value
});

module.exports = router;
