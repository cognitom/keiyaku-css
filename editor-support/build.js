import fs from 'fs'
import { join } from 'path'

const dir = __dirname
const original = fs.readFileSync('keiyaku.css', 'utf8')
const themes = {
  caret: original.replace(/\.keiyaku/g, '.content'),
  marked2: original.replace(/\.keiyaku/g, '#wrapper')
}

for (name in themes) {
  const tmpl = fs.readFileSync(join(dir, 'tmpl', `${ name }.css`), 'utf8')
  const css = tmpl.replace('{{ content }}', themes[name])
  fs.writeFileSync(join(dir, `keiyaku-${ name }.css`), css)
}
