import styled, { css } from 'styled-components'
const btn = (light, dark) => css`


  margin-top: 20px;

  height: 40px;
  width:95%;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 900;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
  transition: 0.5s;

  background-image: linear-gradient(${light}, ${dark});
  border: 1px solid ${dark};
  &:hover {
    background-image: linear-gradient(${light}, ${dark});
    &[disabled] {
      background-image: linear-gradient(${light}, ${dark});
    }
  }
  &:visited {
    color: black;
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const btnDefault = css`
  ${btn('#ffffff', '#d5d5d5')} color: #555;
`

const btnPrimary = btn('#4f93ce', '#285f8f')

export default styled.div`
  font-family: sans-serif;

 



  form {
    max-width: 400px;
    margin:10px auto;
    border: 1px solid #ccc;
    padding: 50px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    button {
     
      &[type='submit'] {
        ${btnPrimary};
      }
      &[type='button'] {
        ${btnDefault};
      }
    }}
  }
`
