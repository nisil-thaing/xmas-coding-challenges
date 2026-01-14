import type { ComponentProps } from 'react';
import type { FieldValues, Path } from 'react-hook-form';
import { useController, useFormContext } from 'react-hook-form';

import { cn } from '@/lib/tailwind';

import { Input } from '@/components/ui/input';

export interface InputFieldProps<T extends FieldValues> extends Omit<ComponentProps<'input'>, 'name'> {
  name: Path<T>;
  label?: string;
}

export const InputField = <T extends FieldValues>({ name, label, className, ...props }: InputFieldProps<T>) => {
  const { control } = useFormContext<T>();
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>
      )}
      <Input
        {...field}
        {...props}
        id={name}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <span id={`${name}-error`} className="text-sm text-destructive">
          {error.message}
        </span>
      )}
    </div>
  );
};
