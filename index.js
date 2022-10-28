const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const courses = require('./data/courses.json');
const details = require('./data/courses.json');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/courses', (req,res) =>{
    res.send(courses);
})

app.get('/courses/:id', (req,res)=>{
    const id = req.params.id;
    // res.send(id);
    const selectedCourse = details.find(d => d.course_id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})