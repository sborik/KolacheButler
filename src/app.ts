import express from 'express'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('CONNECTING TO THE GALACTIC CONCIOUSNESS. PLEASE LEAVE YOUR EGO ON THE PHYSICAL PLANE.');
});

app.listen(port, err => {
    if (err) {
        return console.error(err)
    }
    return console.log(`server is listening on ${port}`); 
}); 