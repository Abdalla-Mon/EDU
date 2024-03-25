export const loginInputs = [
  {
    data: {
      id: "email",
      type: "email",
      label: "Email",
      name: "email",
    },
    pattern: {
      required: {
        value: true,
        message: "Please enter an email",
      },
      pattern: {
        value: /\w+@[a-z]+\.[a-z]{2,}/gi,
        message: "Please enter a valid email",
      },
    },
  },
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
        message: "Please enter a password",
      },
    },
  },
];
