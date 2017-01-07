import fs from 'fs'

const original = fs.readFileSync('keiyaku.css', 'utf8')
const themes = {
  caret: original.replace(/\.keiyaku/g, '.content'),
  marked2: original.replace(/\.keiyaku/g, '#wrapper')
}

for (name in themes) {
  const tmpl = fs.readFileSync(`editor-support/${ name }.css`, 'utf8')
  const css = tmpl.replace('{{ content }}', themes[name])
  fs.writeFileSync(`keiyaku-${ name }.css`, css)
}
