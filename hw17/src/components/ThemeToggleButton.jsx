import styled from '@emotion/styled'
import { Button } from '@mui/material'

const StyledButton = styled(Button)`
margin-top: 20px;
`

const ThemeToggleButton = ({ onClick }) => {
  return (
    <StyledButton variant="contained" color="primary" onClick={onClick}>
      Toggle Theme
    </StyledButton>
  )
}

export default ThemeToggleButton
