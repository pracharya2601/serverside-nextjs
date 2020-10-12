import React from 'react';
import styled from 'styled-components';

const CustomButtom = ({title, onClick}) => {
  return (
    <Button onClick={onClick}>
      {title}
    </Button>
  )
}

const Button = styled.button`
  background-color : red;
  padding: 5px 12px 5px 12px;
  color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    background-color: orange;
    color: black;
  }
`

export default CustomButtom;