
import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-family: 'Oswald', sans-serif;
  margin-bottom: 1em;
`;

 const Input = styled.input`
   height: 2.5rem;
   width: 20rem;
   margin-top: 1em;
   outline: none;
  text-indent: 1em;
   font-size: 1em;

  ::placeholder {
     font-size: .8em;
   }
 `;

 const Button = styled.button`
  height: 2.5rem;
   padding: 0 1em;
  outline: none;
 cursor: pointer;
   background: #222;
   border: none;
  color: #fff;
  font-size: 1em;
 `;

export const Heading = () => {

  return (
    <Header>
      <H1>Galeria de Fotos</H1>
      <p>A fonte da Internet de imagens livremente utilizáveis.</p>
      <p>Desenvolvido por criadores em todos os lugares.</p>
      { <form>
        <Input type="text" placeholder="Search photos" />
        <Button>Search</Button>
      </form> }
    </Header>
  )
}