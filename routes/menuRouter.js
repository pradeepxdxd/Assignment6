const mod = require('../packages');
const path = mod.path;
const router = mod.express.Router();
const multer = require('../packages').multer;
const {menuList, addFood, insertFood, addCart, deleteCart, logout, creditAction, checkout} = require('../controllers/menuController');

// multer & storage
var upload = multer({
    storage: multer.diskStorage({
        destination: (req, res, cb) => {
            cb(null, '/uploads');
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        }
    })
});

// defining all the routes of Menu
router.get('/list', menuList);
router.get('/addfood', addFood);
router.post('/food-data', upload.single('fImg'), insertFood);
router.get('/cart/:id', addCart);
router.get('/delete-cart', deleteCart);
router.get('/checkout', checkout);
router.post('/credit-action', creditAction);
router.get('/logout', logout);

// exporting route
module.exports = router;