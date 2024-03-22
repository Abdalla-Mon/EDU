"use client";
import InputField from "../../Inputs/InputField";
import { useForm } from "react-hook-form";
import SubmitBtn from "../../../Buttons/SubmitBtn/SubmitBtn";

export default function MainForm({
  inputs,
  onSubmit,
  differentButton,
  btnText,
  formTitle,
  formStyle,
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
                ""
              ) : (
                <InputField
                  key={input.data.id}
                  input={input}
                  register={register}
                  errors={errors}
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
