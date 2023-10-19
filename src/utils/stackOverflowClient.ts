import {STACKOVERFLOW_ROOT} from "./constants";
import {StackOverflowUser} from "../api/stackoverflow/models/response";

export class StackOverflowClient {
  async query(userId: string): Promise<StackOverflowUser> {
    const response: Response = await fetch(
      `${STACKOVERFLOW_ROOT}/${userId}?page=1&pagesize=1&order=desc&min=1&sort=reputation&site=stackoverflow`
    );
    if (response.status != 200) {
      throw new Error("Error in retrieving from StackOverflow");
    }
    return await response.json();
  }
}
