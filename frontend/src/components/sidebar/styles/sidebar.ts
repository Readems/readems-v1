import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledSidebarWrapper = styled(motion.div)`
  max-width: 300px;
  width: 100%;
  height: 80vh;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  /* border: 2px solid gray; */
  overflow-y: scroll;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  /* box-shadow: 0px 0px 8px rgb(255, 0, 0); */
  box-shadow: 0px 0px 5px gray;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledSidebarContainer = styled(motion.div)`
  width: 100%;
  padding: 20px;
`;

export const StyledSidebarHeader = styled(motion.div)`
  position: sticky;
  top: 0;
  left: 0;
  background: #fff;
  display: flex;
  flex-direction: column;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    position: absolute;
    right: 0;
    background: inherit;
    font-size: 30px;
  }
`;

export const StyledSearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0 5px;
  margin: 20px 0;
  margin-top: 50px;

  input {
    width: 100%;
    padding: 10px 5px;
  }

  svg {
    font-size: 18px;
    display: flex;
    align-items: center;
  }
`;

export const StyledSidebarMenu = styled.ul`
  li {
    padding: 10px 0;
  }

  li h4 {
    border-bottom: none;
    font-size: 18px;
    margin-top: 20px;
  }

  li a {
    display: flex;
    align-items: center;
    padding: 5px 0;
    border-bottom: 2px solid gray;

    :last-child {
      border-bottom: none;
    }
  }

  /* li a:last-child {
    border-bottom: none;
    color: blue;
  } */
`;
