const router = require('express').Router()

router.route('/').get((req, res) => {
  res.send(
      {
          author: 'AGR'
      }
  );
})

module.exports = router