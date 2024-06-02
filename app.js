//1. import dependencies
import express, { json } from 'express';

const app = express();

app.use(json());

app.get("/test", (req, res) => {
    res.send({ success: true, data: "deployed nodejs to ECS successfully." })
});

app.use((error, req, res, next) => {
    res.status(500).json({ error: error.message });
});

//7 bootstrap
app.listen(3000, () => {
    console.log("Application started on port 3000");
});