import fetch from 'node-fetch'

const handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, '☁️ Porfavor, Ingresa el enlace o término de búsqueda de TikTok.', m)

  const isUrl = /(?:https?:\/\/)?(?:www\.)?(?:vm|vt|t)?\.?tiktok\.com\/([^\s]+)/gi.test(text) 
  const apiUrl = isUrl
    ? `${api.url}/dow/tiktok?url=${text}&apikey=${api.key}`
    : `${api.url}/search/tiktok?query=${encodeURIComponent(text)}&apikey=${api.key}`

  try {
    const res = await fetch(apiUrl)
    if (!res.ok) throw new Error(`Error del servidor: ${res.status}`)
    const json = await res.json()

    const data = isUrl ? json.data : json.data?.[0]
    if (!data) return conn.reply(m.chat, '🐼 No se encontraron resultados.', m)

    const {
      title = 'Sin título',
      dl,
      watermark,
      cover,
      duration,
      author = {},
      stats = {},
      music = {}
    } = data

    const caption = `
🕸 *Título ›* ${title}

🐼 *Autor ›* ${author.nickname || author.unique_id || 'Desconocido'}
> ⏳ *Duración ›* ${duration || 'N/A'}
> ❤️ *Likes ›* ${(stats.likes || 0).toLocaleString()}
> ✉️ *Comentarios ›* ${(stats.comments || 0).toLocaleString()}
> 👀 *Vistas ›* ${(stats.views || stats.plays || 0).toLocaleString()}
> 📦 *Compartidos ›* ${(stats.shares || 0).toLocaleString()}
> 🌾 *Audio ›* ${music.title ? music.title + " -" : 'Desconocido'} ${music.author ? music.author : ''}\n\n${dev}
    `.trim()

    const head = await fetch(dl, { method: 'HEAD' })
    const contentType = head.headers.get('content-type') || ''

    if (contentType.includes('video')) {
      return conn.sendMessage(m.chat, { video: { url: dl }, caption }, { quoted: m })
    }

    return conn.reply(m.chat, '☁️ Contenido no soportado o error al procesar.', m)

  } catch (e) {
    console.error(e)
    conn.reply(m.chat, '📦 Error.', m)
  }
}

handler.help = ['tiktok', 'tt']
handler.tags = ['dow']
handler.command = ['tiktok', 'tt']

export default handler