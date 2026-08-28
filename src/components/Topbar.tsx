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
  gap: 12px;
  font-weight: 900;
  letter-spacing: -.04em;
  line-height: .88;
  text-transform: uppercase;
`

const Mark = styled.span`
  width: 43px;
  height: 32px;
  position: relative;
  display: inline-block;
  &::before, &::after { content: ""; position: absolute; background: var(--ink); }
  &::before { width: 38px; height: 19px; border-radius: 48% 48% 55% 55%; left: 2px; top: 8px; }
  &::after { width: 14px; height: 14px; transform: rotate(45deg); left: 2px; top: 2px; box-shadow: 20px -20px 0 var(--ink); }
`

const BrandText = styled.span`font-size: 15px; max-width: 92px;`
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
    <Brand to="/" onClick={() => setOpen(false)} aria-label="Raccoons at Work Studios home"><Mark /><BrandText>Raccoons at Work Studios</BrandText></Brand>
    <Menu onClick={() => setOpen(v => !v)} aria-expanded={open}>Menu</Menu>
    <Nav $open={open}>
      <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
      <NavLink to="/about-us" onClick={() => setOpen(false)}>About us</NavLink>
      <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
    </Nav>
  </Header>
}
