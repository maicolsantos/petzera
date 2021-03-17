import React from 'react'
import { PlusCircle } from 'react-feather'

import {
  ContainerGradient,
  Title,
  Card,
  CardTitle,
} from './styles'

const Home = () => (
  <ContainerGradient>
    <Title>PetZera</Title>
    <Card>
      <CardTitle>Adicionar Pet</CardTitle>
      <PlusCircle color="#0093E9" />
    </Card>
  </ContainerGradient>
)

export default Home
