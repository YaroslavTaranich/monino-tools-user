interface IFormValues {
  tool?: string;
  name: string;
  phone: string;
  date?: string;
  days?: number;
  delivery?: string;
  address?: string;
  price?: number;
  pricePerDay?: number;
  zalog?: number;
}

const translateMap: Record<keyof IFormValues, string> = {
  tool: '<b>Инструмент: </b>',
  name: '<b>Имя: </b>',
  phone: '<b>Номер телефона: </b>',
  date: '<b>Дата начала аренды: </b>',
  days: '<b>Дней аренды: </b>',
  delivery: '<b>Доставка: </b>',
  address: '<b>Адресс доставки: </b>',
  price: '<b>Стоимость аренды: </b>',
  pricePerDay: '<b>Цена в день: </b>',
  zalog: '<b>Сумма залога: </b>',
};

export function generateTelegramMessage(
  formValues: IFormValues,
  title = 'Заявка с сайта',
): string {
  const keys = Object.keys(formValues) as unknown as Array<keyof IFormValues>;
  const htmlTitle = `<b>${title}</b>%0A`;
  return (
    htmlTitle
    + keys
      .map((key) => {
        if (key === 'phone') {
          return `${translateMap[key]} <code>${formValues[key]}</code>`;
        }
        if (key === 'delivery') {
          return `${translateMap[key]} ${
            formValues.delivery === 'yes' ? 'Да' : 'Самовывоз'
          }`;
        }
        return `${translateMap[key]} ${formValues[key]}`;
      })
      .join('%0A')
      .replaceAll('/n', '')
  );
}
