import courses from "./courses.json" assert {type: "json"};
import modules from "./modules.json" assert {type: "json"};
import assignments from "./assignments.json" assert {type: "json"};
import enrollment from "./enrollment.json" assert {type: "json"};
import grades from "./grades.json" assert {type: "json"};
import users from "./users.json" assert {type: "json"};
import {json} from "express";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    courses,
    modules,
    assignments,
    enrollment,
    grades,
    users,
};