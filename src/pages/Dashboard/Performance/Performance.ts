import styled from 'styled-components'
import { theme } from 'config'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 980px;
  margin: 0 auto;
  @media (max-width: 970px) {
    padding: 0 12%;
  }
`

export const Title = styled.h2`
  font-size: 24px;
  background: white;
  padding: 20px 0;
`

export const Body = styled.body`
  width: 100vw;
  height: 100vh;

`

export const Test = styled.div`
  margin:25px;
  width: 480px;
  height: 180px;
  background: #FEFDFF;
  border-radius: 5px;
}
 
div{
  padding:14px;
  
}

`

export const Table = styled.table`
  /* width: 100%; */
  background: white;
  border-radius: 5px;
  margin: 5% 5% 15% 25%;

  h3{
  
position:relative;
left:95px;
  }
`

export const TrTitle = styled.tr`
  margin: 50px 0 !important;
  height: 53px;
  h3{

  }
  div{
  
  }
  td {
    padding: 20px;
  }
`

export const TrSecond = styled.tr`
  height: 53px;
  background: white;
  td {
    padding: 20px;
  }
  button {
    background: transparent;
    border: 0;
  }
`