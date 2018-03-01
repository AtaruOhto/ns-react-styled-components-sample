import styled from 'styled-components';
import colors from 'styles/colors'
import medias from 'styles/medias'

export default styled.div`
  background-color: ${colors.brand};
  color: ${colors.fontGray};
  padding: 20px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
  
  ${medias.tablet(`
    font-size: 24px;
    width: 300px;
  `)
  }
  
  ${medias.pc(`
    font-size: 28px;
    width: 900px;
  `)
  }  
`;