import * as yup from "yup";

const phoneRegExp = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;

export const schema = yup.object({
  name: yup.string().required("Укажите Ваше имя"),
  phone: yup
    .string()
    .required("Укажите номер телефона для связи")
    .matches(phoneRegExp, "Введите корректный номер телефона"),
  date: yup
    .date()
    .min(new Date().toISOString().split("T")[0], "Укажите корректную дату")
    .required("Укажите дату начала аренды"),
  days: yup
    .number()
    .typeError("Укажите количество дней аренды")
    .positive()
    .min(1, "Минимальное время аренды 1 сутки")
    .required("Укажите количество дней аренды"),
  delivery: yup.string().required(),
  address: yup.array().of(
    yup.object().shape({
      value: yup.string(),
    })
  ),
});
