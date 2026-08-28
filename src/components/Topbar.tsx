import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.header`height: 82px; padding: 0 clamp(22px, 5vw, 76px); display: flex; align-items: center; justify-content: space-between; gap: 24px; border-bottom: 1px solid var(--line); background: rgba(244,239,230,.9); backdrop-filter: blur(12px); position: sticky; top: 0; z-index: 20;`
const Brand = styled(NavLink)`display: flex; align-items: center; text-decoration: none; flex: none; img { display: block; width: clamp(138px, 16vw, 190px); height: auto; }`
const Nav = styled.nav<{ $open: boolean }>`display: flex; gap: clamp(18px,3vw,36px); align-items: center; a { position: relative; padding: 10px 0; text-decoration: none; text-transform: uppercase; font-size: 11px; letter-spacing: .13em; font-weight: 800; } a::after { content: ''; position: absolute; height: 2px; left: 0; right: 100%; bottom: 3px; background: var(--ink); transition: right .25s ease; } a:hover::after, a.active::after { right: 0; } .contact { padding: 11px 15px; border-radius: 999px; background: var(--ink); color: var(--paper); } .contact::after { display:none; } @media(max-width:650px) { display:${({$open})=>$open?'flex':'none'}; position:absolute; left:0; right:0; top:82px; padding:26px; background:var(--paper); border-bottom:1px solid var(--line); flex-direction:column; align-items:flex-start; gap:14px; }`
const Menu = styled.button`display:none; border:0; background:transparent; font-weight:800; text-transform:uppercase; letter-spacing:.1em; font-size:11px; cursor:pointer; @media(max-width:650px){display:block;}`

export function Topbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <Header><Brand to="/" onClick={close} aria-label="Raccoons at Work Studios home"><img src="/assets/logo.png" alt="Raccoons at Work Studios" /></Brand><Menu onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="main-navigation">Menu</Menu><Nav id="main-navigation" $open={open}><NavLink to="/" onClick={close}>Home</NavLink><NavLink to="/about-us" onClick={close}>About</NavLink><NavLink className="contact" to="/contact" onClick={close}>Work with us ↗</NavLink></Nav></Header>
}
