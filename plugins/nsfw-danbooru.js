import fetch from 'node-fetch';

const handler = async (m, { conn, args, text }) => {
  if (!db.data.chats[m.chat].nsfw)
    return m.reply('🌾 Los comandos de *NSFW* están desactivados en este Grupo.');

  if (!text)
    return conn.reply(m.chat, '🕸 Ingresa un tag para realizar la búsqueda.', m);

  const tag = args[0];
  const url = `${api.url}/nsfw/danbooru?keyword=${tag}&apikey=${api.key}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!Array.isArray(data.results) || data.results.length === 0)
      return conn.reply(m.chat, `🕸 No se encontraron resultados para *${tag}*`, m);

    await conn.sendMessage(m.chat, {
      image: { url: data.results[0] }
    }, { quoted: m });

  } catch (error) {
    await m.reply(`🌾 Error.`);
  }
};

handler.help = ['danbooru', 'dbooru'];
handler.command = ['danbooru', 'dbooru'];
handler.tags = ['nsfw'];

export default handler;