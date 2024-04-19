import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Controller, useFieldArray, useForm, useWatch,
} from 'react-hook-form';
import { calculatePrice, calculateZalog } from '@/utils/calculate-price';
import { generateTelegramMessage } from '@/utils/generate-telegram-message';
import { FormLoader } from '../form-loader';
import { SuccessMessage, ErrorMessage } from '../message';
import { schema } from './schema';
import styles from './order-form.module.scss';
import { ITool } from '@/services/api';
import {
  Button,
  InputFancyLabel,
  InputInline,
  RadioInput,
  Rub,
  TextareaFancyLabel,
} from '@/components/UI';

const defaultValues = {
  name: '',
  phone: '',
  date: new Date().toISOString().split('T')[0] as unknown as Date,
  days: 1,
  delivery: 'no',
  address: undefined,
};

interface IFormInputs {
  name: string;
  phone: string;
  date: Date;
  days: number;
  delivery: string;
  address?: { value?: string | undefined }[] | undefined;
}

type Status = 'idle' | 'loading' | 'error' | 'success';

interface IMessageValues {
  tool: string;
  name: string;
  phone: string;
  date: string;
  days: number;
  delivery: string;
  address?: string;
  price: number;
  pricePerDay: number;
  zalog: number;
}

const resolver = yupResolver(schema);

const getMessageValues = (
  formValues: IFormInputs,
  toolName: string,
  price: number,
  zalog: number,
): IMessageValues => {
  const result: IMessageValues = {
    tool: toolName,
    name: formValues.name,
    phone: formValues.phone,
    date: new Date(formValues.date).toISOString().split('T')[0],
    days: formValues.days,
    delivery: formValues.delivery || 'no',
    price: calculatePrice(price, formValues.days) * formValues.days,
    pricePerDay: calculatePrice(price, formValues.days),
    zalog: calculatePrice(zalog, formValues.days),
  };

  if (result.delivery === 'yes' && formValues.address) {
    result.address = formValues.address[0].value;
  }

  return result;
};

interface IOrderFormProps {
  tool: ITool;
}

function OrderForm({ tool }: IOrderFormProps) {
  const [fetchStatus, setFetchStatus] = useState<Status>('idle');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver, defaultValues });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'address',
  });

  const delivery = useWatch({ control, name: 'delivery' });
  const days = useWatch({ control, name: 'days' });

  const onSubmit = (data: IFormInputs) => {
    const message = generateTelegramMessage(
      getMessageValues(data, tool.label, tool.price, tool.zalog),
    );
    setFetchStatus('loading');
    fetch('/api/message', { method: 'POST', body: JSON.stringify({ message }) })
      .then((res) => setFetchStatus(res.ok ? 'success' : 'error'))
      .catch(() => setFetchStatus('error'));
  };

  useEffect(() => {
    if (delivery === 'yes' && fields.length === 0) {
      append({ value: '' });
    } else {
      remove(0);
    }
  }, [delivery]);

  if (fetchStatus === 'loading') return <FormLoader />;

  if (fetchStatus === 'error') return <ErrorMessage />;

  if (fetchStatus === 'success') return <SuccessMessage />;

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={styles.form__title}>
        Взять в аренду
        {tool.label}
      </h3>
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
      <Controller
        name="date"
        control={control}
        render={({ field }) => (
          <InputInline
            label="Дата начала аренды"
            type="date"
            error={errors.date?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="days"
        control={control}
        render={({ field }) => (
          <InputInline
            label="Дней аренды"
            type="number"
            min={1}
            error={errors.days?.message}
            {...field}
          />
        )}
      />

      <div className={styles.radio}>
        <Controller
          name="delivery"
          control={control}
          render={({ field }) => (
            <RadioInput
              label="Самовывоз"
              {...field}
              value="no"
              defaultChecked
            />
          )}
          defaultValue="no"
        />
        <Controller
          name="delivery"
          control={control}
          render={({ field }) => (
            <RadioInput label="Доставка" {...field} value="yes" />
          )}
        />
      </div>
      {fields.map((address, index) => (
        <Controller
          key={address.id}
          name={`address.${index}.value`}
          control={control}
          render={({ field }) => (
            <TextareaFancyLabel label="Адресс доставки" {...field} />
          )}
        />
      ))}
      {delivery === 'yes' && (
        <p className={styles.notice}>
          Стоимость доставки рассчитывается отдельно
        </p>
      )}
      <div className={styles.price}>
        <div className={styles.price__label}>Стоимость аренды:</div>
        <div className={styles.price__number}>
          {calculatePrice(tool.price, days) * days}
          {' '}
          <Rub />
        </div>
      </div>
      <div className={styles.price}>
        <div className={styles.price__label}>Сумма залога:</div>
        <div className={styles.price__number}>
          {calculateZalog(tool.zalog, tool.price, days)}
          {' '}
          <Rub />
        </div>
      </div>

      <Button submit className={styles.form__button}>
        Отправить
      </Button>
    </form>
  );
}

export default OrderForm;
