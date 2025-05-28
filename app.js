const express = require('express')
const {sequelize} = require('./models')
require('dotenv').config();
const app = express();
const PORT =3000;
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/booking', bookingRoutes);

app.get('/', (req, res) =>{
    res.send('Hello');
})
sequelize.sync().then(() =>{
    console.log('Database Connected')
    app.listen(PORT, () =>{
        console.log('Server started on PORT 3000');
    })
}).catch(error =>{
    console.log('Database Connection Error')
})
