import React from 'react'
import { Container, Title, Description } from './styles'

interface VagaProps {
  title: string
  description: string
}

const Vaga: React.FC<VagaProps> = ({ title, description }) => (
  <Container>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Container>
)

export default Vaga
