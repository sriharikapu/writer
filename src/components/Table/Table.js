import styled from 'styled-components'

const Table = styled.table`
  font-family: 'Roboto Mono', monospace;
  background-color: #3B3B3B;
  border-radius: 25px;
  width: 100%;
  padding: 20px 25px;
  border-spacing: 0;
  
  td, th {
    font-weight: lighter;
    letter-spacing: -0.84px;
    text-align: center;
    padding: 20px 0;
    
    &:first-of-type {
      padding-left: 20px;
    }
    
    &:last-of-type {
      padding-right: 20px;
    }
  }
  
  th {
    padding: 20px 0 30px 0;
  }
  
  tr:not(:first-of-type) td {
    border-top: 1px solid #D8D8D8;
  }
  
  button {
    text-transform: lowercase;
  }
`

export default Table
