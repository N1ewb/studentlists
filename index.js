/*
    INSTALLATION SCRIPT: npm i
    REQUIRED PACKAGE NAME:
        - express
        - cors
        - path
    EXAMPLE USAGE:
        npm i express
*/

const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

//DATASET
const students = [
    {
        id: 1,
        name: "john doe",
        course: "BSIT"
    },
    {
        id: 2,
        name: "jane doe",
        course: "BSCS"
    },
    {
        id: 3,
        name: "johanne doe",
        course: "BSIT"
    },
]

//API ENDPOINTS
//DISPLAY ALL STUDENTS
app.get('/api/students', (req, res) => {
    res.json(students)
})

//UPLOAD A STUDENT
app.post('/api/students', (req, res) => {
    const {name, course} = req.body
    const id = students.length + 1
    const newStudent = {id, name,course}
    students.push(newStudent)

    res.json(201).json({
        message: "Student added successfuly",
        student: newStudent
    })
})

//START SERVER
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})

//START SCRIPT: node index.js