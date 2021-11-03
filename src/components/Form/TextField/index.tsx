import React, { useCallback, useState } from 'react'

import * as S from './styles'

interface TextField {
  name: string
  id: string
  placeholder: string
  type?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextField = ({
  name,
  id,
  placeholder,
  onChange,
  type,
  value,
  ...rest
}: TextField) => {
  const handleChangeText = useCallback(
    (event): void => {
      onChange && onChange(event)
    },
    [onChange]
  )

  return (
    <S.Input
      name={name}
      id={id}
      placeholder={placeholder}
      type={type}
      onChange={handleChangeText}
      value={value}
      {...rest}
    />
  )
}
