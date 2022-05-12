import React, { FC, ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { logo } from '../images';
import {
  StyledHeaderContainer,
  StyledHeaderLeft,
  StyledHeaderRight,
} from './styles/header';
import AppIcon from '../Icons/AppIcon';
import { Avatar } from '../Icons';
import Sidebar from '../sidebar/Sidebar';

interface HeaderProps {
  homepage?: boolean;
}

const Header: FC<HeaderProps> = ({ homepage }): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(true);
  return (
    <div>
      <StyledHeaderContainer
        style={{ background: homepage ? '#3f7ac2' : 'initial' }}
      >
        <StyledHeaderLeft>
          <AppIcon.Menu onClick={toggleSidebar} />
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </StyledHeaderLeft>

        <StyledHeaderRight>
          <button type="button">Dashboard</button>
          <Avatar width="40" height="40" />
        </StyledHeaderRight>
      </StyledHeaderContainer>
      <AnimatePresence>
        {isOpen && <Sidebar setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </div>
  );
};

Header.defaultProps = {
  homepage: false,
};

export default Header;
