import React from 'react'

import {
  Container,
  LabelContainer,
  Label,
  InputField,
} from './styles'

interface InputProps {
  label: string,
  icon?: React.ReactNode,
  onChangeText: (value: string) => void,
}

const Input = ({ label, icon, onChangeText }: InputProps) => (
  <Container>
    <LabelContainer>
      { icon }
      <Label>{ label }</Label>
    </LabelContainer>
    <InputField onChangeText={onChangeText} />
  </Container>
)

export default Input
