import { Router } from "express";
import { RouterConf } from ".";
import { markmapController } from "../controller/markmap";

export const markmapRoutes: Array<RouterConf> = [
  {
    path: "/api",
    router: Router().post("/generate", markmapController.generate),
  }
];
