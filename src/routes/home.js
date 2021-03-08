const router = require('express').Router()

router.route('/').get((req, res) => {
  res.send(
      {
          author1: 'AGR',
          author2: 'OCA'
      }
  );
})

module.exports = router