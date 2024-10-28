export async function submitForm(username, email, password, passwordConfirm) {
  try {
    const response = await fetch(
      "https://www.greatfrontend.com/api/questions/sign-up",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          password_confirm: passwordConfirm,
        }),
      }
    );

    const { message } = await response.json();
    console.log(message);
    return message;
  } catch (_) {
    const message = "Error submitting form!";
    console.log(message);
    return message;
  }
}

export function validateFormData(formdata, setErrors) {
  return true;
}
