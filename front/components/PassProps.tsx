import styled from 'styled-components';

interface IProps {
    backColor?: string
}

export default styled.button`
  color: #FFF;
  font-size: 20px;
  margin: 10px;
  padding: 8px 20px;
  background-color: ${(props: IProps) => props.backColor ? props.backColor : '#555'};
`;