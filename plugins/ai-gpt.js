import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {
  const text = args.join(' ').trim();

  if (!text) {
    return m.reply('🫟 Escribe una *petición* para que *ChatGPT* te responda.');
  }

  const apiUrl = `${api.url}/ai/chatgpt?text=${encodeURIComponent(text)}&apikey=${api.key}`;

  try {
    const { key } = await conn.sendMessage(
      m.chat,
      { text: '✍🏼 *ChatGPT* está procesando tu respuesta...' },
      { quoted: m }
    );

    const res = await fetch(apiUrl);
    const json = await res.json();

    if (!json || !json.result) {
      return conn.reply(m.chat, '🫆 No se pudo obtener una *respuesta* válida.');
    }

    const response = json.result.trim();
    await conn.sendMessage(m.chat, { text: response, edit: key });
  } catch (error) {
    console.error(error);
    await m.reply('⚠️ Ocurrió un error al procesar tu solicitud.');
  }
};

handler.help = ['ia', 'chatgpt'];
handler.tags = ['ai'];
handler.command = ['ia', 'chatgpt'];

export default handler;