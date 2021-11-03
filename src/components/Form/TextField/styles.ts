import styled from 'styled-components'
import theme from 'styles/theme/theme'

export const Input = styled.input`
  width: 100%;
  padding-right: 0.5rem;
  background-color: transparent;
  color: ${theme.colors.text};
  font-weight: ${theme.font.weights.semiBold};

  ::placeholder {
    color: ${theme.colors.text};
  }
`
