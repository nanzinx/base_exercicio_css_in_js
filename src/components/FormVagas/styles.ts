// src/components/FormVagas/styles.ts
import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Input = styled.input.attrs((props: any) => ({
  type: props.type || 'text',
  placeholder: props.placeholder
}))`
  padding: 12px;
  border: 1px solid #ccc;
`

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`
