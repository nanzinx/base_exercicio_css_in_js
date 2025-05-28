import React, { useState, FormEvent, ChangeEvent } from 'react'
import { Container, Input, Button } from './styles'

export default function FormVagas() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ email, message })
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Seu email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <Input
        type="text"
        placeholder="Sua mensagem"
        value={message}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setMessage(e.target.value)
        }
      />
      <Button type="submit">Enviar</Button>
    </Container>
  )
}
