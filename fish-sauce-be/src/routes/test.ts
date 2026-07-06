import { Router } from "express";
import sequelize from "../config/database";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const [rows] = await sequelize.query("SELECT NOW() AS now");

    res.json(rows);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
