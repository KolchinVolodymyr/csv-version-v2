const express = require('express');
const upload = require('express-fileupload');
const cors = require('cors');
const csv = require('csvtojson');

const app = express();
//MIDDLEWARES
app.use(upload({useTempFiles: true}));
app.use(cors());
//ROUTE DEFINE
app.post('/', async function (req, res) {
    try {
        const data = [];
        let getProducts =
        csv()
            .fromFile(req.files.File.tempFilePath)
            .then((jsonObj) => {
                console.log('json ', jsonObj);
            })
        res.status(200).send({
            message: 'FILE RECEIVED!',
        });
    } catch (e) {
        console.log('error', e)
    }
});

app.listen(8080 || process.env.PORT, function () {
 console.log('Server is running:');
});