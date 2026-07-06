import express from "express";
import cors from "cors";
import testRoute from "./routes/test";
import typeSauceRoute from "./routes/typeSauce";
import hoaDonRoute from "./routes/hoaDon";
import { UPLOAD_DIR } from "./utils/image";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(UPLOAD_DIR));

app.use("/test", testRoute);
app.use("/api/type-sauce", typeSauceRoute);
app.use("/api/hoa-don", hoaDonRoute);

app.get("/", (_req, res) => {
  res.send("API is running...");
});

export default app;
