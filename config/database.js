const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_URL);

db.on('connected', function() {
console.log('Connected to MongoDB');
});
