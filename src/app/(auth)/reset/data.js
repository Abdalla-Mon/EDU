export const resetInputs = [
  {
    data: {
      id: "email",
      type: "email",
      name: "email",
      label: "Email",
    },
    pattern: {
      required: {
        value: true,
        message: "Email is required",
      },
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: "Invalid email address",
      },
    },
  },
];
export const resetPasswordInputs = [
  {
    data: {
      id: "password",
      type: "password",
      label: "Password",
      name: "password",
    },
    pattern: {
      required: {
        value: true,
        message: "Password is required",
      },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        message:
          "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number",
      },
    },
  },
  {
    data: {
      id: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      name: "confirmPassword",
    },
    pattern: {
      required: {
        value: true,
        message: "Confirm password is required",
      },
      validate: {
        matchesPreviousPassword: (value) => {
          const password = document.getElementById("password").value;
          return password === value || "Passwords should match!";
        },
      },
    },
  },
];
