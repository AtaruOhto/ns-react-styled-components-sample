import React from 'react';
import styled from 'styled-components'

const MyHeader = styled.header`
    background-color: #7085FE;
    border-bottom: 1px solid #ccc;
    padding: 20px;
`;

const MyTitle = styled.h1`
  font-size: 24px;
  text-align: center;
  color: #FEE970;
`;

export default () => (
    <MyHeader>
        <MyTitle>Hello I am Styled Title!</MyTitle>
    </MyHeader>
)
