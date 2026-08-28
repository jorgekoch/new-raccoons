import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.header`
  height: 92px;
  padding: 0 clamp(22px, 5vw, 76px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--line);
  background: rgba(244, 239, 230, .88);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 20;
`

const Brand = styled(NavLink)`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
`

const Logo = styled.img`
  display: block;
  width: clamp(138px, 16vw, 190px);
  height: auto;
  object-fit: contain;
`

const Nav = styled.nav<{ $open: boolean }>`
  display: flex; gap: 34px; align-items: center;
  a { text-decoration: none; text-transform: uppercase; font-size: 12px; letter-spacing: .13em; font-weight: 750; padding: 10px 0; position: relative; }
  a::after { content: ""; position: absolute; height: 2px; left: 0; right: 100%; bottom: 3px; background: var(--ink); transition: right .25s ease; }
  a:hover::after, a.active::after { right: 0; }
  @media (max-width: 650px) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')}; position: absolute; left: 0; right: 0; top: 92px; padding: 28px;
    background: var(--paper); border-bottom: 1px solid var(--line); flex-direction: column; align-items: flex-start; gap: 18px;
  }
`

const Menu = styled.button`
  display: none; border: 0; background: transparent; font-weight: 800; text-transform: uppercase; letter-spacing: .1em; font-size: 11px;
  @media (max-width: 650px) { display: block; }
`

export function Topbar() {
  const [open, setOpen] = useState(false)

  return <Header>
    <Brand to="/" onClick={() => setOpen(false)} aria-label="Raccoons at Work Studios home">
      <Logo src="/assets/logo.png" alt="Raccoons at Work Studios" />
    </Brand>
    <Menu onClick={() => setOpen(v => !v)} aria-expanded={open}>Menu</Menu>
    <Nav $open={open}>
      <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
      <NavLink to="/about-us" onClick={() => setOpen(false)}>About us</NavLink>
      <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
    </Nav>
  </Header>
}
