"use client";
import { TextField } from "@mui/material";
import { motion } from "framer-motion";

export default function InputField({
  input,
  variant = "filled",
  register,
  errors,
}) {
  const inputData = input.data;
  return (
    <div>
      <TextField
        variant={variant}
        {...inputData}
        {...register(inputData.id, input.pattern)}
      />
      <motion.p layout className="field_error">
        {errors[inputData.id]?.message}
      </motion.p>
    </div>
  );
}
