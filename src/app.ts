import express, {Request, Response} from "express";

const app = express()
const routes = require('./routes/index')
const port = 3000

app.use(express.json())

app.use('/api', routes)

app.listen(port, ()=> {
    console.log(`Server successfully listening at http://localhost:${port}`);
})