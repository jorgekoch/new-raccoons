import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: #25231f;
    background: #f4efe6;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    --ink: #25231f;
    --muted: #716d65;
    --cream: #f4efe6;
    --paper: #fffdf8;
    --sand: #ddd1bd;
    --sage: #cbd1bd;
    --peach: #e7c8ad;
    --line: rgba(37, 35, 31, .14);
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; min-width: 320px; min-height: 100vh; background: var(--cream); }
  body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: .22;
    background-image: radial-gradient(rgba(37,35,31,.16) .55px, transparent .55px);
    background-size: 5px 5px;
    z-index: -1;
  }
  button, input, textarea { font: inherit; }
  button, a { -webkit-tap-highlight-color: transparent; }
  a { color: inherit; }
  main { min-height: calc(100vh - 92px); }
  ::selection { background: var(--sage); color: var(--ink); }
`
