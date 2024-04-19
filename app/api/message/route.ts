interface IConfig {
  bot: string;
  chatid: string;
}

const config: IConfig = {
  bot: process.env.TELEGRAM_BOT || '',
  chatid: process.env.TELEGRAM_CHAT_ID || '',
};

export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return new Response('Method not allowd', { status: 400 });
  }
  try {
    const { message } = (await request.json()) as Record<'message', string>;
    const response = await fetch(
      `https://api.telegram.org/${config.bot}/sendMessage?chat_id=${config.chatid}&parse_mode=html&text=${message}`,

      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
      },
    );
    if (response.ok) return Response.json('Сообщение отправлено');
    throw new Error();
  } catch (error) {
    return new Response('Ошибка при отправке сообщения', { status: 400 });
  }
}
