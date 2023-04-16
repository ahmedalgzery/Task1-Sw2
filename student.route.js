const router = require("express").Router();

router.get('/students', (req, res,next) => {
    res.send(`<ul style="font-size:3em;">
    <li>Ahmed</li>
    <li>Mahrous</li>
    <li>Algzery</li>
    <li>Eslam</li>
    </ul>`)
  })


module.exports = router;
