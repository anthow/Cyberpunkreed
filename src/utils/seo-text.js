export function htmlToExcerpt(html, max = 160) {
  if (!html) return ""

  const text = String(html)
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim()

  if (text.length <= max) return text
  return `${text.slice(0, max - 1).trimEnd()}…`
}
