const express = require('express')

// use process.env variables to keep private variables,
require('dotenv').config()

// Express Middleware
const helmet = require('helmet') // creates headers that protect from attacks (security)
const bodyParser = require('body-parser') // turns response into usable format
const cors = require('cors')  // allows/disallows cross-site communication
const morgan = require('morgan') // logs requests
const session = require('express-session')
const path = require('path')
const cookieParser = require('cookie-parser')
const Passport = require('passport')
const localStrategy = require('passport-local').Strategy
const fs = require('fs')
const multer = require('multer')

// view engine setup
app.set('views', './view');
app.set('view engine', 'ejs');


// db Connection w/ Heroku
// const db = require('knex')({
//   client: 'pg',
//   connection: {
//     connectionString: process.env.DATABASE_URL,
//     ssl: true,
//   }
// });

// db Connection w/ localhost
var db = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    port: 5432,
    user : 'postgres',
    password : 'Luadao130998@',
    database : 'crud-practice-1'
  },
});

// App
const app = express()

// App Middleware
const whitelist = ['http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(helmet())
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(morgan('combined')) // use 'tiny' or 'combined'


app.get('/', (req, res) => res.send('hello world'))

//set up the session for passport
app.use(session({
  secret: 'mysecret',
  resave: true,
  saveUninitialized: true}))
app.use(Passport.initialize())
app.use(Passport.session())

//render view engine
app.get('/login',(req,res) => res.render('login'));

//set up passport method and route to direct ( demo )
app.route('/login')
.get((req, res) => res.render('login'))
.post(Passport.authenticate('local', { 
    successRedirect: '/sucess',
    failureRedirect: '/login'}));

    app.get('/sucess',(req,res) => res.render('upload'));

    Passport.use(new localStrategy(
      (username, password, done) => {
          fs.readFile('./userDB.json', (err, data) => {
              const db = JSON.parse(data)
              const userRecord = db.find(user => user.usr == username)
              if (userRecord && userRecord.pwd == password){
                  return done(null, userRecord)
              } else {
                  return done(null, false)
              }
          })
      }
  ))

Passport.serializeUser((user, done) => {
    done(null, user.usr)
})

Passport.deserializeUser((user, done) => {
    done(null, user);
});


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*           SETTING MULTER FOR UPLOAD          */

app.use(bodyParser.json());
    var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './uploads/')
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
        }
    });
    var upload = multer({ //multer settings
                    storage: storage
                }).single('file');
    /** API path that will upload the files */
    app.post('/upload', function(req, res) {
        upload(req,res,function(err){
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
             res.json({error_code:0,err_desc:null});
        });
    });

    /*             Adding filetype filter                */

    var upload = multer({ //multer settings
        storage: storage,
        fileFilter : function(req, file, callback) { //file filter
            if (['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
                return callback(new Error('Wrong extension type'));
            }
            callback(null, true);
        }
    }).single('file');

    /* */

// App Routes - Student
const Student = require('./controllers/Student')
app.get('/student', (req, res) => Student.getTableData(req, res, db))
app.post('/student', (req, res) => Student.postTableData(req, res, db))
app.put('/student', (req, res) => Student.putTableData(req, res, db))
app.delete('/student', (req, res) => Student.deleteTableData(req, res, db))

// App Routes - Teacher
const Teacher = require('./controllers/Teacher')
app.get('/teacher', (req, res) => Teacher.getTableData(req, res, db))
app.post('/teacher', (req, res) => Teacher.postTableData(req, res, db))
app.put('/teacher', (req, res) => Teacher.putTableData(req, res, db))
app.delete('/teacher', (req, res) => Teacher.deleteTableData(req, res, db))

// App Routes - Account 
const Account = require('./controllers/Account')
app.get('/account', (req, res) => Account.getTableData(req, res, db))
app.post('/account', (req, res) => Account.postTableData(req, res, db))
app.put('/account', (req, res) => Account.putTableData(req, res, db))
app.delete('/account', (req, res) => Account.deleteTableData(req, res, db))

// App Routes - Subject
const Subject = require('./controllers/Subject')
app.get('/subject', (req, res) => Subject.getTableData(req, res, db))
app.post('/subject', (req, res) => Subject.postTableData(req, res, db))
app.put('/subject', (req, res) => Subject.putTableData(req, res, db))
app.delete('/subject', (req, res) => Subject.deleteTableData(req, res, db))

// App Routes - Class 
const Class = require('./controllers/Class')
app.get('/class', (req, res) => Class.getTableData(req, res, db))
app.post('/class', (req, res) => Class.postTableData(req, res, db))
app.put('/class', (req, res) => Class.putTableData(req, res, db))
app.delete('/class', (req, res) => Class.deleteTableData(req, res, db))


// App Server Connection
app.listen(process.env.PORT || 3100, () => {
  console.log(`app is running on port ${process.env.PORT || 3100}`)
})