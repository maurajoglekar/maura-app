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
    return { message, status: response.status };
  } catch (error) {
    const data = error;
    return data;
  }
}

export function validateFormData(formdata, setErrors) {
  return true;
}
