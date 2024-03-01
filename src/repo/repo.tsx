
import { Root } from "@/models/types";
import { readFile } from "fs/promises";

export default class SideshowRepo {
  async GetAllItems() {

    var collectiblesData = await readFile(process.cwd() + "/src/data/data.json", "utf-8");

    var gatheredResponses : Root = JSON.parse(collectiblesData);
    return gatheredResponses;
  }
  
}
