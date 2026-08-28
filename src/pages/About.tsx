import styled from 'styled-components'

const Page = styled.section`max-width: 1240px; margin: 0 auto; padding: clamp(70px, 10vw, 140px) clamp(24px, 6vw, 80px);`
const Eyebrow = styled.p`margin: 0 0 20px; text-transform: uppercase; letter-spacing: .18em; font-size: 11px; font-weight: 850; color: var(--muted);`
const Title = styled.h1`font-size: clamp(58px, 11vw, 150px); letter-spacing: -.075em; line-height: .78; margin: 0; text-transform: uppercase;`
const Intro = styled.p`font-size: clamp(23px, 3.2vw, 43px); line-height: 1.08; letter-spacing: -.035em; font-weight: 650; max-width: 980px; margin: clamp(52px, 8vw, 100px) 0 0;`
const Grid = styled.div`
  display: grid; grid-template-columns: .8fr 1.2fr; gap: clamp(40px, 8vw, 120px); margin-top: clamp(70px, 10vw, 130px); border-top: 1px solid var(--line); padding-top: 32px;
  @media(max-width: 760px){ grid-template-columns: 1fr; }
`
const Label = styled.div`font-size: 12px; font-weight: 850; letter-spacing: .13em; text-transform: uppercase;`
const Copy = styled.div`
  p { margin: 0 0 28px; font-size: clamp(17px, 1.65vw, 21px); line-height: 1.65; color: #49453f; }
  strong { color: var(--ink); }
`
const Tags = styled.div`display: flex; flex-wrap: wrap; gap: 9px; margin-top: 40px; span { padding: 9px 13px; border-radius: 999px; background: var(--paper); border: 1px solid var(--line); font-size: 11px; text-transform: uppercase; letter-spacing: .1em; font-weight: 750; }`

export function About() {
  return <Page>
    <Eyebrow>Meet the cooperative</Eyebrow><Title>About us</Title>
    <Intro><em>A diverse gamedev cooperative crafting authentic original IPs and providing expert outsourcing for the indie community.</em></Intro>
    <Grid><Label>What moves us</Label><Copy>
      <p>As a studio, we want to create games that make sense to us as developers—games that entertain us and speak to the core of every team member. We aim to build projects that reflect our identity and embrace our unique style, whether in art or gameplay.</p>
      <p>Our studio operates as a <strong>cooperative</strong>, focused on diversity and providing a welcoming environment for artists, programmers, animators, and all creators alike, both in our projects and our workplace.</p>
      <p>While our primary focus is on original IPs, we also provide outsourcing services for other indie companies in <strong>Art, TechArt, and Programming.</strong></p>
      <Tags><span>Original IPs</span><span>Art</span><span>TechArt</span><span>Programming</span></Tags>
    </Copy></Grid>
  </Page>
}
