import { FormEvent, useState } from 'react'
import styled from 'styled-components'

const Page = styled.section`max-width: 1240px; margin: 0 auto; padding: clamp(70px, 10vw, 130px) clamp(24px, 6vw, 80px);`
const Header = styled.div`display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: end; margin-bottom: clamp(60px, 8vw, 100px); @media(max-width:760px){grid-template-columns:1fr;}`
const Title = styled.h1`font-size: clamp(58px, 10vw, 138px); line-height: .8; letter-spacing: -.07em; text-transform: uppercase; margin: 0;`
const Lead = styled.p`font-size: clamp(20px, 2.4vw, 31px); line-height: 1.2; letter-spacing: -.025em; margin: 0; max-width: 520px;`
const Form = styled.form`display: grid; grid-template-columns: 1fr 1fr; gap: 28px 22px; border-top: 1px solid var(--line); padding-top: 38px; @media(max-width:650px){grid-template-columns:1fr;}`
const Field = styled.label<{ $wide?: boolean }>`display: grid; gap: 9px; ${({$wide})=>$wide && 'grid-column: 1 / -1;'} span { font-size: 10px; font-weight: 850; letter-spacing: .15em; text-transform: uppercase; } input, textarea { width:100%; border:0; border-bottom: 1px solid #999184; background: transparent; padding: 12px 2px 14px; outline: none; color: var(--ink); font-size: 18px; } textarea { resize: vertical; min-height: 150px; } input:focus, textarea:focus { border-color: var(--ink); }`
const Send = styled.button`grid-column: 1 / -1; justify-self: end; margin-top: 12px; border: 0; border-radius: 999px; background: var(--ink); color: var(--paper); padding: 17px 28px; text-transform: uppercase; letter-spacing: .13em; font-size: 11px; font-weight: 850; cursor: pointer; transition: transform .2s ease; &:hover { transform: translateY(-2px); }`
const Note = styled.p`grid-column: 1/-1; margin: 0; color: var(--muted); font-size: 13px;`

export function Contact() {
  const [sent, setSent] = useState(false)
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true) }
  return <Page>
    <Header><Title>Say<br/>hello.</Title><Lead>Have a game, an idea, or a project that could use a few extra raccoon paws? Drop us a line.</Lead></Header>
    <Form onSubmit={submit}>
      <Field><span>Name</span><input name="name" required autoComplete="name" placeholder="Your name" /></Field>
      <Field><span>Email</span><input name="email" type="email" required autoComplete="email" placeholder="you@email.com" /></Field>
      <Field $wide><span>Message</span><textarea name="message" required placeholder="Tell us about your project..." /></Field>
      {sent && <Note>Thanks! The form interface is ready. Connect your preferred email/API endpoint before launch to deliver messages.</Note>}
      <Send type="submit">Send message ↗</Send>
    </Form>
  </Page>
}
