interface IConfig {
  bot: string;
  chatid: string;
}

const config: IConfig = {
  bot: process.env.NEXT_PUBLIC_TELEGRAM_BOT || "",
  chatid: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || "",
};

export default async function sendMessage(message: string) {
  try {
    const response = await fetch(
      `https://api.telegram.org/${config.bot}/sendMessage?chat_id=${config.chatid}&parse_mode=html&text=${message}`,

      {
        method: "post",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.ok) return true;
    return false;
  } catch (error) {
    throw new Error("Не получилось отправить сообщение");
  }
}
