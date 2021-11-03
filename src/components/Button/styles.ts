import styled from 'styled-components'
import theme from "../../styles/theme/theme";

interface IButtonProps {
  dFlex: boolean
}

export const Button = styled.button<IButtonProps>`
  display: ${props => props.dFlex ? 'flex' : 'inline-block'};
  align-items: ${props => props.dFlex ? 'flex': 'unset'};
  column-gap: ${props => props.dFlex ? '.25rem': 'unset'};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 1rem 2rem;
  font-weight: ${theme.font.weights.semiBold};
  transition: .3s;

  &:hover {
    background-color: ${theme.colors.primaryAlt};
  }
`

