const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const locationData = await Location.findAll();
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all categories
  // be sure to include its associated Product,
});

router.get('/:id', async (req, res) => {
  try { 
    const locationData = await Location.findbyPk(req.params.id, {
      include: [{ model: Category, through: Product, as: 'product_category'}] 
    });

    if (!locationData) {
      res.status(404).json({ message: 'No category found with this id!'}); 
      return;
    }
    
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const locationData = await Category.create(req.body);
    res.status(200).json(locationData);
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
