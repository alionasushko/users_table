"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../../models/user"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.find();
        res.status(200).json(users);
    }
    catch (error) {
        throw error;
    }
});
exports.getUsers = getUsers;
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        // const { firstName, lastName, phone, gender, age } = body;
        // console.log("BODY", req.body);
        const user = new user_1.default({
            firstName: body.firstName,
            lastName: body.lastName,
            phone: body.phone,
            gender: body.gender,
            age: body.age,
        });
        yield user.save();
        const allUsers = yield user_1.default.find();
        res.status(201).json(allUsers);
    }
    catch (error) {
        throw error;
    }
});
exports.addUser = addUser;
