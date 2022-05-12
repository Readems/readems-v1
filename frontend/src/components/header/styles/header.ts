import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledHeaderContainer = styled(motion.div)`
  height: 70px;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  background: inherit;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    width: 40px;
  }

  svg {
    display: flex;
    align-items: center;
    font-size: 35px;
    display: none;
  }

  @media (max-width: 420px) {
    svg {
      display: flex;
    }
  }
`;
export const StyledHeaderRight = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  /* border: 2px solid wheat; */

  button {
    background: initial;
    color: #fff;
    margin: 0 20px;
    font-size: 18px;
  }
`;
