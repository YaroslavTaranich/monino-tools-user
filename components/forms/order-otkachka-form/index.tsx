'use client';

import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { generateTelegramMessage } from '@/utils/generate-telegram-message';
import { FormLoader } from '../form-loader';
import { SuccessMessage, ErrorMessage } from '../message';
import { schema } from './schema';
import styles from './order-form.module.scss';
import { Button, InputFancyLabel, TextareaFancyLabel } from '@/components/UI';

const defaultValues = {
  name: '',
  phone: '',
  address: undefined,
};

interface IFormInputs {
  name: string;
  phone: string;
  address?: string;
}

type Status = 'idle' | 'loading' | 'error' | 'success';

const resolver = yupResolver(schema);

export function OrderOtkachkaForm() {
  const [fetchStatus, setFetchStatus] = useState<Status>('idle');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver, defaultValues });

  const onSubmit = (data: IFormInputs) => {
    const message = generateTelegramMessage(data, 'Заявка на откачку воды');
    setFetchStatus('loading');
    fetch('/api/message', { method: 'POST', body: JSON.stringify({ message }) })
      .then((res) => setFetchStatus(res.ok ? 'success' : 'error'))
      .catch(() => setFetchStatus('error'));
  };

  if (fetchStatus === 'loading') return <FormLoader />;

  if (fetchStatus === 'error') return <ErrorMessage />;

  if (fetchStatus === 'success') return <SuccessMessage />;

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
        name="address"
        control={control}
        render={({ field }) => (
          <TextareaFancyLabel label="Ваш адрес" {...field} />
        )}
      />

      <Button submit className={styles.form__button}>
        Отправить
      </Button>
    </form>
  );
}
