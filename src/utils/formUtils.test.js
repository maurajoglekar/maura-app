import { submitForm } from "./formUtils";

describe("submit form", () => {
  test("no errors", async () => {
    const { message } = await submitForm(
      "mjoglekar",
      "maura.joglekar@gmail.com",
      "password123",
      "password123"
    );
    expect(message).toEqual("Signed up successfully!");
  });
  test("error with passwords", async () => {
    const { message } = await submitForm(
      "mjoglekar",
      "maura.joglekar@gmail.com",
      "password123",
      "password"
    );
    expect(message).toEqual("Passwords do not match");
  });
  test("error with username", async () => {
    const { message } = await submitForm(
      "mj",
      "maura.joglekar@gmail.com",
      "password123",
      "password"
    );
    expect(message).toEqual("Username is invalid");
  });
});
