import styled from 'styled-components'

const FormSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  & > * {
    margin: 8px 5px;
    &:first-child {
      text-align: right;
    }
    
    &:last-child {
      text-align: left;
    }
  }
`

export default FormSection
