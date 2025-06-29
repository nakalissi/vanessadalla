import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const data = await request.json();

    // Aqui você pode salvar em banco de dados, enviar e-mail, etc.
    // Exemplo: apenas logando no console
    console.log('Contato recebido:', data);

    // Retorne uma resposta de sucesso
    return NextResponse.json({ message: 'Contato recebido com sucesso!' }, { status: 200 });
}