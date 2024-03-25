"use client";
import { TextField } from "@mui/material";

export default function InputField({
  input,
  variant = "filled",
  register,
  errors,
}) {
  const inputData = input.data;
  return (
    <TextField
      fullWidth
      sx={input.sx && input.sx}
      className={"mb-3"}
      variant={variant}
      error={Boolean(errors[inputData.id])}
      helperText={errors[inputData.id]?.message}
      {...input.data}
      {...register(inputData.id, input.pattern)}
    />
  );
}
