const router = require('express').Router();
const { Category, Product } = require('../../models');



router.get('/', (req, res) => {

  Category.findAll({include: [{model: Product}]})
  .then((categoryData)=>{
    res.status(200).json(categoryData)
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.get('/:id', (req, res) => {

  Category.findByPk(req.params.id,{include: [{model: Product}]})
  .then((categoryData)=>{
    res.status(200).json(categoryData)
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.post('/', (req, res) => {

  Category.create(req.body)
  .then((category) => res.status(200).json(category))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.put('/:id', (req, res) => {

  Category.update(req.body,{
    where:{id: req.params.id,},
  })
  .then((category) => res.status(200).json(category))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.delete('/:id', (req, res) => {

  Category.destroy({
    where:{id: req.params.id,},
  })
  .then((category) => res.status(200).json(category))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

module.exports = router;