import { STACKOVERFLOW_ROOT } from "./constants";

export class StackOverflowClient {
  async query(userId: string) {
    const response = await fetch(
      `${STACKOVERFLOW_ROOT}/${userId}?page=1&pagesize=1&order=desc&min=1&sort=reputation&site=stackoverflow`
    );
    if (response.status != 200) {
      throw new Error("Error in retrieving from StackOverflow");
    }
    const results = await response.json();
    return results;
  }
}
