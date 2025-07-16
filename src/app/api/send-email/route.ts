// app/api/send-email/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { email } = await req.json()

  try {
    await resend.emails.send({
      from: 'GiftPlay <noreply@giftplay.com>',
      to: email,
      subject: 'Seu jogo está pronto para download!',
      html: `
        <h2>Obrigado por comprar o Corrida ao Céu 🚀</h2>
        <p>Você pode baixar seu jogo clicando no link abaixo:</p>
        <a href="https://giftplay.com/download/corrida-ao-ceu.zip">Baixar jogo</a>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Falha ao enviar e-mail' }, { status: 500 })
  }
}
