import * as yup from 'yup'

const phoneRegExp = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/

export const schema = yup.object({
  name: yup.string().required('Укажите Ваше имя'),
  phone: yup
    .string()
    .required('Укажите номер телефона для связи')
    .matches(phoneRegExp, 'Введите корректный номер телефона'),
})
