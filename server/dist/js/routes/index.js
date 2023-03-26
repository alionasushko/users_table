"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const router = (0, express_1.Router)();
router.get("/users", users_1.getUsers);
router.post("/add-user", users_1.addUser);
exports.default = router;
