import React, { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import {
  StyledSidebarContainer,
  StyledSidebarWrapper,
  StyledSearchBox,
  StyledSidebarMenu,
  StyledSidebarHeader,
} from './styles/sidebar';
import AppIcon from '../Icons/AppIcon';

interface SidebarProps {
  setIsOpen: Function;
}

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    // transition: {
    //   type: 'tween',
    //   delay: 0.5,
    // },
  },
  exit: {
    x: 1000,
    transition: { type: 'spring', delay: 0.2 },
  },
};

const Sidebar: FC<SidebarProps> = ({ setIsOpen }): ReactElement => (
  <StyledSidebarWrapper
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    <StyledSidebarContainer>
      <StyledSidebarHeader
        initial={{ y: -550 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      >
        <button type="button" onClick={() => setIsOpen(false)}>
          <AppIcon.Close />
        </button>
        <StyledSearchBox>
          <AppIcon.Search />
          <input type="text" placeholder="Search for writers or publications" />
        </StyledSearchBox>
      </StyledSidebarHeader>

      <StyledSidebarMenu>
        <li>
          <h4>Readers</h4>
        </li>
        <li>
          <NavLink to="/discover" onClick={() => setIsOpen(false)}>
            Discover
          </NavLink>
        </li>
        <li>
          <NavLink to="/featured" onClick={() => setIsOpen(false)}>
            Featured
          </NavLink>
        </li>
        <li>
          <NavLink to="/readems-readers" onClick={() => setIsOpen(false)}>
            Readems Readers
          </NavLink>
        </li>

        <li>
          <h4>Writers</h4>
        </li>
        <li>
          <NavLink to="/">Switch to Readems</NavLink>
        </li>
        <li>
          <NavLink to="/paid">Go Paid</NavLink>
        </li>
        <li>
          <NavLink to="/podcasts">For podcasts</NavLink>
        </li>
        <li>
          <NavLink to="/bloggers">For bloggers</NavLink>
        </li>
        <li>
          <NavLink to="/finance-writers">For finance writers</NavLink>
        </li>
        <li>
          <NavLink to="/comic-creators">For comic creators</NavLink>
        </li>
        <li>
          <NavLink to="/food-writers">For food writers</NavLink>
        </li>
        <li>
          <NavLink to="/local-news">For local news</NavLink>
        </li>
        <li>
          <h4>Resources</h4>
        </li>
        <li>
          <NavLink to="/paid-guide">Going paid guide</NavLink>
        </li>
        <li>
          <NavLink to="/resource-center">Resource center</NavLink>
        </li>
        <li>
          <NavLink to="/community-programs">Community&programs</NavLink>
        </li>
        <li>
          <NavLink to="/help-center">Help center</NavLink>
        </li>
      </StyledSidebarMenu>
    </StyledSidebarContainer>
  </StyledSidebarWrapper>
);

export default Sidebar;
