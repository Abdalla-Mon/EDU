"use client";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";

export default function InputField({
  input,
  variant = "filled",
  register,
  errors,
  watch,
  trigger,
}) {
  const [inputData, setInputData] = useState(input.data);
  const showPassword = inputData.type !== "text";
  const handleClickShowPassword = () => {
    setInputData({
      ...inputData,
      type: inputData.type === "password" ? "text" : "password",
    });
  };
  const hidePasswrod = () => {
    setInputData({
      ...inputData,
      type: "password",
    });
  };
  const [type, setType] = useState(null);
  const fieldValue = watch(inputData.id);

  useEffect(() => {
    if (type) {
      if (input.data.type === "password" || input.data.type === "email") {
        trigger(inputData.id);
      }
    }
  }, [fieldValue]);
  return (
    <TextField
      fullWidth
      sx={input.sx && input.sx}
      className={"mb-3"}
      onInput={() => setType(true)}
      variant={variant}
      error={Boolean(errors[inputData.id])}
      helperText={errors[inputData.id]?.message}
      {...inputData}
      {...register(inputData.id, input.pattern)}
      InputProps={{
        endAdornment: input.data.type === "password" && (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
            >
              {!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
