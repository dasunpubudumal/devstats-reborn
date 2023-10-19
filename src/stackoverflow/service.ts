import {StackOverflowClient} from "../utils/stackOverflowClient";
import {StackOverflowUser} from "./models/response";

export class StackOverflowService {
  constructor(private stackOverflowClient: StackOverflowClient) {}

  async fetchStackOverflowUserInformation(
    userId: string
  ): Promise<StackOverflowUser> {
    try {
      return await this.stackOverflowClient.query(userId);
    } catch (err) {
      return Promise.reject();
    }
  }
}
