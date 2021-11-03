import React, { useCallback, useEffect, useState } from 'react'
import { Container } from '..'

import * as S from './styles'

interface FormStateProps {
  values: {
    email: string
  }
}

export const Subscribe = () => {
  const [inputEmail, setInputEmail] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault()
      alert(inputEmail)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <S.Section className="section" id="subscribe">
      <Container>
        <S.Title> Travel News </S.Title>
        <S.Subtitle>
          Receba ofertas com descontos de até 30% no seu e-mail.
        </S.Subtitle>

        <S.Form onSubmit={handleSubmit} autoComplete="off">
          <S.Input
            name="email"
            id="email"
            type="email"
            value={inputEmail}
            onChange={(event) => setInputEmail(event.target.value)}
            placeholder="Digite seu e-mail"
          />
          <S.Button>Inscrever</S.Button>
        </S.Form>
      </Container>
    </S.Section>
  )
}
