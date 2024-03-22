"use client";
import InputField from "../../Inputs/InputField";
import { useForm } from "react-hook-form";
import SubmitBtn from "../../../Buttons/SubmitBtn/SubmitBtn";
import SelectField from "../../Inputs/SelectField";

export default function MainForm({
  inputs,
  onSubmit,
  differentButton,
  btnText,
  formTitle,
  formStyle,
  variant,
  selectWidth,
  inputWidth,
}) {
  const { formState, register, handleSubmit } = useForm();
  const { errors } = formState;
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className
      style={formStyle}
    >
      <h3>{formTitle}</h3>
      <div>
        {inputs.map((input) => {
          return (
            <>
              {input.data.type === "select" ? (
                <SelectField
                  key={input.data.id}
                  select={input}
                  width={selectWidth}
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
                  width={inputWidth}
                />
              )}
            </>
          );
        })}
      </div>
      {differentButton ? differentButton : <SubmitBtn text={btnText} />}
    </form>
  );
}
