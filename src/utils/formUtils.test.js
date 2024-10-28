import { submitForm } from "./formUtils";

describe("submit form", () => {
  test("no errors", async () => {
    const submitFormMessage = await submitForm(
      "mjoglekar",
      "maura.joglekar@gmail.com",
      "password123",
      "password123"
    );
    expect(submitFormMessage).toEqual("Signed up successfully!");
  });
  test("error with passwords", async () => {
    const submitFormMessage = await submitForm(
      "mjoglekar",
      "maura.joglekar@gmail.com",
      "password123",
      "password"
    );
    expect(submitFormMessage).toEqual("Passwords do not match");
  });
  test("error with username", async () => {
    const submitFormMessage = await submitForm(
      "mj",
      "maura.joglekar@gmail.com",
      "password123",
      "password"
    );
    expect(submitFormMessage).toEqual("Username is invalid");
  });
});
