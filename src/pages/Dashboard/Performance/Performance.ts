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
  width: 100%;
  height: 100vh;

`

export const Information = styled.div`

  margin:30px;
  padding:25px;
  width: 500px !important; 
  height: 180px;
  background: #FEFDFF;
  border-radius: 5px;
}
 
h4{
  display: flex;
  flex-direction: column;
}

p{
  padding:5px;
}



`

export const Table = styled.table`

  background: white;
  border-radius: 5px;
  margin: 8% 25%;

  h3{
    position:relative;
    left:95px;
    top:15px;
  }
`

export const TrTitle = styled.tr`
  margin: 50px 0 !important;
  height: 53px;
 
  td {
    padding: 20px;
    font-weight: 500;
  }

h4{
  position:relative;
  left:140px;
  top:20px;
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

  .teste{
    color: rgba(0, 0, 0, 0.5);
  }
`

export const ContainerForm = styled.form`
width:500px;
padding: 15px;

input {
  padding: 15px;
  width:400px;
  height: 85px;
  font-size: 1rem;
  font-weight: 400;
  border: 1px solid rgba(35, 35, 35, 0.33);
  box-sizing: border-box;
  border-radius: 5px;

}
`


export const Button = styled.div`
  display: flex;
  flex-direction: column;

  button {
    position: relative;
    top:30px;
    right:600px;
    background: #000;
    border: 0;
    width: 150px;
    height: 48px;
    border-radius: 5px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
`