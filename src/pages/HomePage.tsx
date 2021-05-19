
// dotenv.config();

// // DB CONNECT


// // Save something
// // INITIALIZE
// const app = express();

// // MIDDLEWARE
// app.use(express.json());

// // ROUTES
// app.get('/', (req, res) => {
//   console.log('im in the terminal!!');
//   res.send("Hey we're in the browser now!");
// });

// app.use('/user', userRoute);

// // LISTEN
// app.listen(process.env.PORT || 8001);

const HomeComponent = () => {
    return (
      <div className='Home'>
       <div>This is my Home Page!!</div>
      </div>
    );
  };
  
  export default HomeComponent;