import React from 'react'
import Vaga from '../../components/Vaga'
import { Container } from './styles'

const ListaVagas: React.FC = () => {
  const vagas = [
    {
      title: 'Desenvolvedor Front-end',
      description: 'Trabalhe com React, CSS e mais.'
    },
    {
      title: 'Desenvolvedor Back-end',
      description: 'Node.js, bancos de dados e APIs.'
    },
    { title: 'Designer UI/UX', description: 'Criação de interfaces modernas.' }
  ]

  return (
    <Container>
      {vagas.map((vaga, index) => (
        <Vaga key={index} title={vaga.title} description={vaga.description} />
      ))}
    </Container>
  )
}

export default ListaVagas
