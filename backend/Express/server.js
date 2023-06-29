import express, { query } from 'express'
import path from 'path'
import * as url from 'url'
import cors from 'cors'
import snacksList from './snacks.json' assert { type: "json" }

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Make the "public" folder available statically to serve our pictures
const dirname = url.fileURLToPath(new URL('.', import.meta.url));
app.use(express.static(path.join(dirname, 'public')));

app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

app.get("/snacks", (req, res) => {
    const list = []
    
    snacksList.map(item => {
        list.push(
            {"id" : item.id, "snack_name" : item.snack_name, "rating" : item.rating}
        )
    })

    res.send(list)
})

// We can compare type safety in this route handler to the one in main.py
// FastAPI will enforce our type hints and refuse anything that is not a number. This route (as is) will allow anything.
app.get("/query", (req, res) => {
    const queryString = req.query.query;
    if (queryString) {
        res.json({"message" : `You entered ${queryString}!`});
    } else {
        res.json({"message" : "You chose not to provide a query string"});
    }
    
})

app.post("/snacks", (req, res) => {

    // create result variable to parse request body into correct types
    const result = {
        id : parseInt(req.body.id),
        snack_name : req.body.snack_name,
        rating : parseInt(req.body.rating)
    }
    try {
        snacksList.push(result);
        console.log(`POST acknowledged for "${result.snack_name}"! snack list is now length ${snacksList.length} at server side`);
    } catch(e) {
        res.sendStatus(500);
        return;
    }
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log('___________________________________________');
    console.log(`***Express server listening on port ${port}***`);
})