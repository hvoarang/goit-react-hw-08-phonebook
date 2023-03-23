import styled from 'styled-components';
import { getRandomHexColor } from '../../utils/getColorsFn';

export const SectionHome = styled.section`
  h1 {
    font-size: 55px;

    &::first-letter {
      color: ${getRandomHexColor()};
    }
  }

  p {
    font-size: 20px;
  }

  span {
    color: ${getRandomHexColor()};
  }
`;
