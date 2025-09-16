import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, service, message } = body

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Nome, email e mensagem são obrigatórios" }, { status: 400 })
    }

    // Aqui você pode integrar com um serviço de email como SendGrid, Resend, etc.
    // Por enquanto, vamos apenas simular o envio
    console.log("Novo contato recebido:", {
      name,
      email,
      company,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simular delay de processamento
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ message: "Mensagem enviada com sucesso!" }, { status: 200 })
  } catch (error) {
    console.error("Erro ao processar contato:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
