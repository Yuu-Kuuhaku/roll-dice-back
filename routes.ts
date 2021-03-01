import { Router } from "express";
import { DiceController } from "./controllers/diceControler";
import { RoomController } from "./controllers/roomController";
import { UserController } from "./controllers/userController";

const router = Router();

const userController = new UserController();
const roomController = new RoomController();
const diceController = new DiceController();

router.post("/users", userController.createUser );
router.get("/users", userController.list);
router.get("/users", userController.getById);
router.patch("/users", userController.update);
router.delete("/users", userController.delete);

router.post("/rooms", roomController.createRoom );
router.get("/rooms", roomController.list);
router.get("/rooms", roomController.getById);
router.patch("/rooms", roomController.update);
router.delete("/rooms", roomController.delete);

router.post("/dices", diceController.createDice );
router.get("/dices", diceController.list);
router.get("/dices", diceController.getById);
router.patch("/dices", diceController.update);
router.delete("/dices", diceController.delete);

export {router} ;