import { igdl } from 'ruhend-scraper';

const handler = async (m, { args, conn }) => {
  if (!args[0]) {
    return conn.reply(m.chat, `${emoji} Ingrese su enlace de Instagram ☁️.`, m);
  }

  try {
    await m.react(rwait);
    const res = await igdl(args[0]);
    const data = res.data;

    for (let media of data) {
      await conn.sendFile(m.chat, media.url, 'instagram.mp4', `${emoji} Aqui tienes, *DESCARGAS AsunaYuuki* (⁠づ⁠｡⁠◕⁠‿⁠‿⁠◕⁠｡⁠)⁠づ.`, m);
    await m.react(done);
    }
  } catch (e) {
    return conn.reply(m.chat, `${msm} Ocurrió un error.`, m);
    await m.react(error);
  }
};

handler.command = ['instagram', 'ig'];
handler.tags = ['dow'];
handler.help = ['instagram', 'ig'];

export default handler;