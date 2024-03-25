"use client";
import InputField from "../../Inputs/InputField";
import { useForm } from "react-hook-form";
import SelectField from "../../Inputs/SelectField";
import { Button, Typography } from "@mui/material";

export default function MainForm({
  inputs,
  onSubmit,
  differentButton,
  btnText,
  formTitle,
  subTitle,
  formStyle,
  variant,
  children,
}) {
  const { formState, register, handleSubmit } = useForm();
  const { errors } = formState;
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center w-full  p-5 sm:max-w-[400px]  lg:max-w-[500px] bg-gray-100 rounded shadow-md"
      style={formStyle}
    >
      <Typography
        variant="h4"
        className="mb-4 font-bold text-[--color_primary]"
      >
        {formTitle}
      </Typography>
      {subTitle && (
        <Typography
          variant="subtitle1"
          className="mb-4 font-bold text-[--color_secondary]"
        >
          {subTitle}
        </Typography>
      )}
      <div className={"w-full"}>
        {inputs.map((input) => {
          return (
            <>
              {input.data.type === "select" ? (
                <SelectField
                  key={input.data.id}
                  select={input}
                  register={register}
                  errors={errors}
                  variant={variant}
                />
              ) : (
                <InputField
                  key={input.data.id}
                  input={input}
                  register={register}
                  errors={errors}
                  variant={variant}
                />
              )}
            </>
          );
        })}
        {children}
      </div>
      {differentButton ? (
        differentButton
      ) : (
        <Button
          type="form"
          variant="contained"
          size="large"
          color="primary"
          className={"mt-5 w-full  p-3 capitalize text-white font-bold"}
        >
          {btnText}
        </Button>
      )}
    </form>
  );
}
