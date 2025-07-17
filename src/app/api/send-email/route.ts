import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { nome, email, mensagem } = await req.json()

    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { sucesso: false, erro: 'Campos obrigatórios ausentes' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: 'GiftPlay <contato@usconqtech.com.br>', // ✅ email verificado no Resend
      to: 'contato@usconqtech.com.br', // você recebe no mesmo email
      subject: `📩 Nova mensagem de contato de ${nome}`,
      html: `
        <div style="font-family: sans-serif; font-size: 15px;">
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensagem:</strong></p>
          <p style="white-space: pre-line;">${mensagem}</p>
        </div>
      `,
    })

    return NextResponse.json({ sucesso: true })
  } catch (error) {
    console.error('[ERRO ENVIO RESEND]', error)
    return NextResponse.json(
      { sucesso: false, erro: 'Erro ao enviar email de contato' },
      { status: 500 }
    )
  }
}
