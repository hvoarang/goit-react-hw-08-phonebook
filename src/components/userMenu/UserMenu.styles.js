import styled from 'styled-components';
import { getRandomHexColor } from '../../utils/getColorsFn';

export const UserTitle = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  p {
    font-size: 22px;
    &::first-letter {
      color: ${getRandomHexColor()};
    }
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    &:hover,
    &:focus {
      background-color: ${getRandomHexColor()};
      color: #fff;
      cursor: pointer;
    }
  }
`;
