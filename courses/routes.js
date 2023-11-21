import Database from "../Database/index.js";

function CourseRoutes(app) {

    app.get("/api/courses/:id", (req, res) => {
       const {id} = req.params;
       const course = Database.courses.find((c)=>c.number === id);
       if (!course){
           res.sendStatus(404).send("Course Not Found");
           return;
       }
       res.send(course);
    });
    app.put("/api/courses/:id", (req, res) => {
        const {id} = req.params;
        const course = req.body;
        Database.courses = Database.courses.map((c)=> c.number === id ? {...c, ...course}: c);
        res.sendStatus(204);
    });
    app.delete("/api/courses/:id", (req, res) => {
        const {id} = req.params;
        Database.courses = Database.courses.filter((c)=>(c.number!==id));
        res.sendStatus(204);
    });
    app.post("/api/courses", (req, res) => {
        const course = {...req.body, _id: new Date().getTime().toString()};
        Database.courses.push(course);
        res.send(course);
    });
    app.get("/api/courses", (req, res) => {
        const courses = Database.courses;
        res.send(courses);
    });
}

export default CourseRoutes;