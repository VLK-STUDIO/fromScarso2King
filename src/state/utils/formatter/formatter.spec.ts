import { ListData } from "../../types";
import { formatter } from "./formatter";

describe("formatter.forCreation", () => {
  const cases = [
    {
      input: { data: { byId: {}, allIds: [] }, item: {} },
      expected: { byId: { "-1": {} }, allIds: ["-1"] },
      message: "should add a placeholder item",
    },
    {
      input: {
        data: {
          byId: { test: { id: "test", name: "test" } },
          allIds: ["test"],
        },
        item: { name: "example" },
      },
      expected: {
        byId: { test: { id: "test", name: "test" }, "-1": { name: "example" } },
        allIds: ["-1", "test"],
      },
      message: "should add a placeholder item into an existing list",
    },
  ];

  cases.forEach(({ input, message, expected }) => {
    const result = formatter(input.data as ListData<object>);
    test(message, () => {
      expect(result.forCreation({ item: input.item }).get()).toEqual(expected);
    });
  });
});

describe("formatter.removePlaceholders", () => {
  const cases = [
    {
      input: { byId: { "-1": { name: "test" } }, allIds: ["-1"] },
      expected: { byId: {}, allIds: [] },
      message: "should remove the placeholder item",
    },
    {
      input: {
        byId: { test: { id: "test", name: "test" }, "-1": { name: "example" } },
        allIds: ["-1", "test"],
      },
      expected: {
        byId: { test: { id: "test", name: "test" } },
        allIds: ["test"],
      },
      message: "should remove the placeholder item from an existing list",
    },
  ];

  cases.forEach(({ input, message, expected }) => {
    const result = formatter(input as ListData<object>);
    test(message, () => {
      expect(result.removePlaceholder().get()).toEqual(expected);
    });
  });
});

describe("formatter.insert", () => {
  const cases = [
    {
      input: {
        data: { byId: {}, allIds: [] },
        item: { id: "test" },
        key: "id",
      },
      expected: { byId: { test: { id: "test" } }, allIds: ["test"] },
      message: "should add a new item",
    },
    {
      input: {
        data: {
          byId: { test: { id: "test", name: "test" } },
          allIds: ["test"],
        },
        item: { id: "example", name: "example" },
        key: "id",
      },
      expected: {
        byId: {
          test: { id: "test", name: "test" },
          example: { id: "example", name: "example" },
        },
        allIds: ["example", "test"],
      },
      message: "should add a new item into an existing list",
    },
    {
      input: {
        data: {
          byId: { test: { id: "test", name: "test" } },
          allIds: ["test"],
        },
        item: { id: "test", name: "example" },
        key: "id",
      },
      expected: {
        byId: {
          test: { id: "test", name: "example" },
        },
        allIds: ["test"],
      },
      message:
        "should not duplicate items when adding an item with an existing id",
    },
  ];

  cases.forEach(({ input, message, expected }) => {
    const result = formatter<object>(input.data as ListData<object>);
    test(message, () => {
      expect(
        result.insert({ item: input.item, key: input.key as never }).get()
      ).toEqual(expected);
    });
  });
});

describe("formatter - removePlaceholder + insert", () => {
  const data = {
    byId: { "-1": { name: "example" }, test: { name: "text", id: "test" } },
    allIds: ["-1", "test"],
  };

  const item = { id: "example", name: "example" };

  const result = formatter<object>(data as ListData<object>);
  test("should remove placeholder and add a new item", () => {
    expect(
      result
        .removePlaceholder()
        .insert({ item, key: "id" as never })
        .get()
    ).toEqual({
      byId: {
        example: { id: "example", name: "example" },
        test: { name: "text", id: "test" },
      },
      allIds: ["example", "test"],
    });
  });
});
