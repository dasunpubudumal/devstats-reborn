import {describe, expect, test} from "@jest/globals";
import {StackOverflowService} from "./service";
import {StackOverflowClient} from "../utils/stackOverflowClient";
import {instance, mock, when} from "ts-mockito";
import {StackOverflowUser} from "./models/response";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

const returnValue = {
  items: [
    {
      badge_counts: {
        bronze: 10,
        silver: 18,
        gold: 1,
      },
      account_id: 21063,
      is_employee: false,
      last_modified_date: 1642769100,
      last_access_date: 1696844122,
      reputation_change_year: 93,
      reputation_change_quarter: 0,
      reputation_change_month: 0,
      reputation_change_week: 0,
      reputation_change_day: 0,
      reputation: 2306,
      creation_date: 1230907349,
      user_type: "registered",
      user_id: 50911,
      location: "Bristol, United Kingdom",
      website_url: "",
      link: "https://stackoverflow.com/users/50911/dominic-betts",
      profile_image: "https://i.stack.imgur.com/YhtCa.jpg?s=256&g=1",
      display_name: "Dominic Betts",
    },
  ],
  has_more: false,
  quota_max: 10000,
  quota_remaining: 9984,
};

/**
 * Using stubs/mocks with ts-mockito library https://github.com/NagRock/ts-mockito
 */
describe("Check if information are fetched correctly", () => {
  let clientMock: StackOverflowClient = mock(StackOverflowClient);
  let client : StackOverflowClient = instance(clientMock);

  const service: StackOverflowService = new StackOverflowService(client);

  beforeEach(() => {
    when(clientMock.query("123")).thenResolve(returnValue);
  });

  test("Stackoverflow information fetch (USER)", async () => {
    try {
      const response: StackOverflowUser = await service.fetchStackOverflowUserInformation("123");
      expect(response).toHaveProperty('items');
    } catch (err) {
      console.error(err);
    }
  });
});
