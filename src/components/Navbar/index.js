import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileMenuLink } from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <div style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </div>
        </NavLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileNavLogo to="/" onClick={() => setIsOpen(false)}>
              <DiCssdeck size="3rem" />
            </MobileNavLogo>
            <MobileMenuLink href="#about" onClick={() => setIsOpen(false)}>About</MobileMenuLink>
            <MobileMenuLink href="#skills" onClick={() => setIsOpen(false)}>Skills</MobileMenuLink>
            <MobileMenuLink href="#experience" onClick={() => setIsOpen(false)}>Experience</MobileMenuLink>
            <MobileMenuLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileMenuLink>
            <MobileMenuLink href="#education" onClick={() => setIsOpen(false)}>Education</MobileMenuLink>
            <GitHubButton style={{ padding: '10px 16px', background: theme.primary, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
