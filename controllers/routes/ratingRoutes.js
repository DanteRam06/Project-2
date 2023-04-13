// Create a new rating
router.post('/rating', async (req, res) => {
    try {
      const newRating = await Rating.create({
        rating: req.body.rating,
        book_id: req.body.book_id
      });
  
      res.status(204).json(newRating);
    } catch (err) {
      console.error(err);
      res.status(404).json({ message: 'Server Error' });
    }
  });
  router.post('/login', (req, res) => {
  
   res.render('login')
   
  });
  
  
  module.exports = router;