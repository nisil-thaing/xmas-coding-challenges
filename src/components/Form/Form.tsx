import type { ReactNode, Ref } from 'react';
import { useImperativeHandle } from 'react';
import type { DefaultValues, FieldValues, Path, PathValue, Resolver, UseFormProps } from 'react-hook-form';
import { FormProvider, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import type { $ZodType, $ZodTypeInternals } from 'zod/v4/core';

type ZodSchema<T extends FieldValues> = $ZodType<T, FieldValues, $ZodTypeInternals<T, FieldValues>>;

export interface FormRef<T extends FieldValues> {
  reset: (values?: DefaultValues<T>) => void;
  setValue: (name: Path<T>, value: PathValue<T, Path<T>>) => void;
  getValues: () => T;
  clearErrors: () => void;
}

export interface FormProps<T extends FieldValues> {
  ref?: Ref<FormRef<T>>;
  schema?: ZodSchema<T>;
  defaultValues?: DefaultValues<T>;
  options?: Omit<UseFormProps<T>, 'resolver' | 'defaultValues'>;
  onSubmit: (data: T) => void | Promise<void>;
  children: ReactNode;
  className?: string;
}

export const Form = <T extends FieldValues>({
  ref,
  schema,
  defaultValues,
  options,
  onSubmit,
  children,
  className,
}: FormProps<T>) => {
  const methods = useForm<T>({
    resolver: schema ? (zodResolver(schema) as Resolver<T>) : undefined,
    defaultValues,
    ...options,
  });

  useImperativeHandle(ref, () => ({
    reset: values => methods.reset(values),
    setValue: (name, value) => methods.setValue(name, value),
    getValues: () => methods.getValues(),
    clearErrors: () => methods.clearErrors(),
  }));

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
};
