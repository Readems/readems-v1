import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../images';
import {
  StyledHeaderContainer,
  StyledHeaderLeft,
  StyledHeaderRight,
} from './styles/header';
import AppIcon from '../Icons/AppIcon';
import { Avatar } from '../Icons';

interface HeaderProps {
  homepage?: boolean;
}

const Header: FC<HeaderProps> = ({ homepage }): ReactElement => (
  <StyledHeaderContainer style={{ background: homepage ? 'blue' : 'initial' }}>
    <StyledHeaderLeft>
      <AppIcon.Menu />
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </StyledHeaderLeft>

    <StyledHeaderRight>
      <button type="button">Dashboard</button>
      <Avatar width="40" height="40" />
    </StyledHeaderRight>
  </StyledHeaderContainer>
);

Header.defaultProps = {
  homepage: false,
};

export default Header;
