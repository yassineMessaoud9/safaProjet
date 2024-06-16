import express, { json } from 'express';
import { connect } from 'mongoose';
import router from './router.js'; // Assume router is exported from the file containing CRUD
import bodyParser from 'body-parser';

const app = express();
app.use(json());  // Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(router);

// Connect to MongoDB
connect('mongodb+srv://safa:safa@atlascluster.1z7erbk.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
