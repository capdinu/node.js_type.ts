import express, { Express , Request, Response } from "express"; 

const app:Express = express();
const studentInfo = [
    {"id": 1,
    "name": "sinthujan",
    "address": "kodikamam",
    "age": 20
    },
    {
    "id": 2,
    "name": "abishan",
    "address": "kilinochchi",
    "age": 21

    },

    {"id": 3,
    "name": "kugathishan",
    "address": "vavuniya",
    "age": 21
},
{
    "id": 4,
    "name": "thathujan",
    "address": "vaddakashshi",
    "age": 20

},
{
    "id": 5,
    "name": "dinushan",
    "address": "kilinochchi",
    "age": 21

},
{
    "id": 6,
    "name": "kesavan",
    "address": "mullaithivu",
    "age": 21

}

]


app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});


app.get('/student/:id', (req: Request, res: Response) => {
    const studentDetail = studentInfo.find((detail)  => {
        return detail.id === parseInt(req.params.id);
    })
    console.log(studentDetail);
    res.send(studentDetail);
   
});


app.get("/student", (req: Request, res: Response) => {
    res.send(studentInfo);
});


app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
