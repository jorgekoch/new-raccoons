import styled from 'styled-components'

const Page = styled.section`
  min-height: calc(100vh - 92px);
  padding: clamp(48px, 7vw, 84px) clamp(22px, 5vw, 76px) clamp(70px, 8vw, 110px);
  overflow: hidden;
`

const Hero = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, .85fr) minmax(520px, 1.35fr);
  gap: clamp(42px, 7vw, 110px);
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`

const Copy = styled.div`
  position: relative;
  z-index: 2;
`

const Eyebrow = styled.p`
  margin: 0 0 22px;
  font-size: 11px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: .18em;
  font-weight: 850;
  color: var(--muted);
`

const Title = styled.h1`
  margin: 0;
  max-width: 680px;
  font-size: clamp(58px, 7.7vw, 128px);
  line-height: .8;
  letter-spacing: -.075em;
  text-transform: uppercase;
  text-wrap: balance;
`

const Intro = styled.p`
  max-width: 620px;
  margin: clamp(30px, 4vw, 54px) 0 0;
  font-size: clamp(20px, 2.2vw, 31px);
  line-height: 1.18;
  letter-spacing: -.03em;
  color: #403c36;
`

const Meta = styled.div`
  margin-top: 38px;
  display: flex;
  flex-wrap: wrap;
  gap: 9px;

  span {
    padding: 9px 12px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(255, 253, 248, .58);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .11em;
    text-transform: uppercase;
  }
`

const Stage = styled.div`
  min-width: 0;
  position: relative;
  padding: 50px 0 60px;

  &::before {
    content: "CO-OP / ORIGINAL IP / OUTSOURCING / INDIE /";
    position: absolute;
    left: -7%;
    top: 4px;
    white-space: nowrap;
    font-size: clamp(34px, 5.8vw, 88px);
    line-height: 1;
    letter-spacing: -.055em;
    font-weight: 900;
    color: rgba(37, 35, 31, .065);
    transform: rotate(-4deg);
    pointer-events: none;
  }

  &::after {
    content: "ART • TECHART • CODE •";
    position: absolute;
    right: -7%;
    bottom: 6px;
    white-space: nowrap;
    font-size: clamp(28px, 4.4vw, 66px);
    line-height: 1;
    letter-spacing: -.05em;
    font-weight: 900;
    color: rgba(37, 35, 31, .055);
    transform: rotate(3deg);
    pointer-events: none;
  }
`

const TabletWrap = styled.div`
  position: relative;
  z-index: 1;
  transform: rotate(-1.6deg);

  &::before {
    content: "play our reel";
    position: absolute;
    z-index: 3;
    left: -30px;
    top: -30px;
    width: 96px;
    height: 96px;
    display: grid;
    place-items: center;
    border: 1px solid var(--line);
    border-radius: 50%;
    background: var(--paper);
    font-size: 10px;
    line-height: 1.2;
    font-weight: 850;
    letter-spacing: .12em;
    text-transform: uppercase;
    text-align: center;
    box-shadow: 0 18px 34px rgba(58, 50, 40, .09);
  }

  @media (max-width: 600px) {
    &::before { width: 76px; height: 76px; left: -8px; top: -22px; font-size: 9px; }
  }
`

const Tablet = styled.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  padding: clamp(10px, 1.25vw, 16px);
  border-radius: clamp(22px, 3vw, 38px);
  background: #25231f;
  box-shadow:
    0 35px 80px rgba(60, 52, 41, .21),
    0 8px 18px rgba(60, 52, 41, .12),
    inset 0 0 0 2px rgba(255,255,255,.07);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #5c5953;
    top: 50%;
    right: 6px;
    transform: translateY(-50%);
  }
`

const Screen = styled.div`
  width: 100%;
  height: 100%;
  border-radius: clamp(14px, 2vw, 25px);
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(255,255,255,.2), transparent 36%),
    #d8cebc;
  position: relative;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #d8cebc;
  }
`

const Placeholder = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 30px;
  pointer-events: none;

  span {
    border: 1px solid rgba(37,35,31,.22);
    border-radius: 999px;
    padding: 11px 17px;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: .14em;
    font-weight: 850;
    background: rgba(255,253,248,.7);
    backdrop-filter: blur(7px);
  }
`

const Strip = styled.div`
  max-width: 1440px;
  margin: clamp(70px, 8vw, 110px) auto 0;
  padding-top: 24px;
  border-top: 1px solid var(--line);
  display: grid;
  grid-template-columns: .7fr 1.3fr;
  gap: 36px;
  align-items: start;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

const StripLabel = styled.p`
  margin: 0;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: .15em;
  font-weight: 850;
  color: var(--muted);
`

const StripCopy = styled.p`
  margin: 0;
  max-width: 900px;
  font-size: clamp(18px, 2.2vw, 30px);
  line-height: 1.22;
  letter-spacing: -.025em;
`

export function Home() {
  return (
    <Page aria-label="Raccoons at Work Studios home">
      <Hero>
        <Copy>
          <Eyebrow>Independent gamedev cooperative</Eyebrow>
          <Title>Games with a point of view.</Title>
          <Intro>
            We make original games that feel like us — and help indie teams bring theirs to life through art, TechArt and programming.
          </Intro>
          <Meta>
            <span>Original IPs</span>
            <span>Art</span>
            <span>TechArt</span>
            <span>Programming</span>
          </Meta>
        </Copy>

        <Stage>
          <TabletWrap>
            <Tablet>
              <Screen>
                <video controls preload="metadata" aria-label="Raccoons at Work Studios showreel">
                  <source src="/videos/showreel.mp4" type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
                <Placeholder><span>Showreel · video coming soon</span></Placeholder>
              </Screen>
            </Tablet>
          </TabletWrap>
        </Stage>
      </Hero>

      <Strip>
        <StripLabel>What kind of studio?</StripLabel>
        <StripCopy>
          Cooperative by structure, diverse by design, and proudly indie. We care about making work with personality — not work that could have come from anywhere.
        </StripCopy>
      </Strip>
    </Page>
  )
}
