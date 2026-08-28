import styled from 'styled-components'

const Page = styled.section`
  min-height: calc(100vh - 92px); display: grid; place-items: center; padding: clamp(36px, 7vw, 86px) 24px;
  overflow: hidden; position: relative;
  &::before { content: ""; position: absolute; width: 44vw; height: 44vw; min-width: 360px; min-height: 360px; border-radius: 50%; background: var(--sage); opacity: .42; top: -22%; right: -10%; }
  &::after { content: ""; position: absolute; width: 28vw; height: 28vw; min-width: 250px; min-height: 250px; border-radius: 50%; background: var(--peach); opacity: .38; bottom: -15%; left: -7%; }
`
const Tablet = styled.div`
  width: min(1040px, 88vw); aspect-ratio: 16 / 10; padding: clamp(10px, 1.5vw, 18px); border-radius: clamp(22px, 3vw, 38px); background: #25231f;
  box-shadow: 0 34px 80px rgba(60, 52, 41, .2), inset 0 0 0 2px rgba(255,255,255,.08); position: relative; z-index: 1;
  transform: rotate(-1.3deg);
  &::after { content: ""; position: absolute; width: 7px; height: 7px; border-radius: 50%; background: #5c5953; top: 50%; right: 6px; transform: translateY(-50%); }
`
const Screen = styled.div`
  width: 100%; height: 100%; border-radius: clamp(14px, 2vw, 25px); overflow: hidden; background: #ddd1bd; position: relative;
  video { width: 100%; height: 100%; object-fit: cover; background: #d8cebc; }
`
const Placeholder = styled.div`
  position: absolute; inset: 0; display: grid; place-items: center; text-align: center; padding: 30px; pointer-events: none;
  span { border: 1px solid rgba(37,35,31,.28); border-radius: 999px; padding: 11px 17px; font-size: 11px; text-transform: uppercase; letter-spacing: .14em; font-weight: 800; background: rgba(255,253,248,.55); }
`

export function Home() {
  return <Page aria-label="Showreel">
    <Tablet><Screen>
      <video controls preload="metadata" aria-label="Raccoons at Work Studios showreel">
        <source src="/videos/showreel.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>
      <Placeholder><span>Showreel · video coming soon</span></Placeholder>
    </Screen></Tablet>
  </Page>
}
