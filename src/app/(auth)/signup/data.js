export const signupInputs = [
  {
    data: {
      id: "firstName",
      type: "text",
      label: "First Name",
      name: "firstName",
    },
    sx: {
      width: "100%",
      "@media (min-width:600px)": {
        width: "48%",
      },
      mr: "4%",
    },
    pattern: {
      required: {
        value: true,
        message: "First name is required",
      },
    },
  },
  {
    data: {
      id: "lastName",
      type: "text",
      label: "Last Name",
      name: "lastName",
    },
    sx: {
      width: "100%",
      "@media (min-width:600px)": {
        width: "48%",
      },
    },
    pattern: {
      required: {
        value: true,
        message: "Last name is required",
      },
    },
  },
  {
    data: {
      id: "email",
      type: "email",
      label: "Email",
      name: "email",
    },
    sx: {
      width: "calc(100% - 100px)",
      mr: "10px",
    },
    pattern: {
      required: {
        value: true,
        message: "Email is required",
      },
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: "Please enter a valid email",
      },
    },
  },
  {
    data: {
      id: "role",
      type: "select",
      label: "Role",
      name: "role",
      options: [
        { value: "STUDENT", label: "Student" },
        { value: "INSTRUCTOR", label: "Instructor" },
      ],
    },
    sx: {
      width: "90px",
    },
    pattern: {
      required: {
        value: true,
        message: "Role is required",
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
