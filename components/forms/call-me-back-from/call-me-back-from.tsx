import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, InputFancyLabel } from "../../UI";
import { FormLoader } from "../form-loader";
import { ErrorMessage, SuccessMessage } from "../message";
import { generateTelegramMessage } from "@/utils/generate-telegram-message";
import styles from "./call-me-back-from.module.scss";
import { schema } from "./schema";

const resolver = yupResolver(schema);

const defaultValues = {
  name: "",
  phone: "",
};

interface IFormInputs {
  name: string;
  phone: string;
}

function CallMeBackFrom() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver, defaultValues });

  const [fetchStatus, setFetchStatus] = useState<
    "idle" | "loading" | "error" | "success"
  >("idle");

  const onSubmit = (data: IFormInputs) => {
    setFetchStatus("loading");
    const message = generateTelegramMessage(data);
    fetch("/api/message", { method: "POST", body: JSON.stringify({ message }) })
      .then(() => setFetchStatus("success"))
      .catch(() => setFetchStatus("error"));
  };

  if (fetchStatus === "loading") return <FormLoader />;

  if (fetchStatus === "error") return <ErrorMessage />;

  if (fetchStatus === "success") return <SuccessMessage />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2 className={styles.form__title}>Мы вам перезвоним!</h2>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <InputFancyLabel
            label="Ваше имя"
            error={errors.name?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <InputFancyLabel
            label="Ваш номер телефона"
            error={errors.phone?.message}
            {...field}
          />
        )}
      />
      <Button submit>Отправить</Button>
    </form>
  );
}

export default CallMeBackFrom;
