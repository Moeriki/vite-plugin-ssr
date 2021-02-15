import { setFileFinder, UserFiles } from './findUserFiles.shared'
import { assert } from '../utils/assert'
import { sep as pathSep } from 'path'
import { getGlobal } from '../global.node'
const viteEntryFileBase = 'findUserFiles.vite'
assert(__dirname.endsWith(['dist', 'user-files'].join(pathSep)))
const viteEntry = require.resolve(`../../user-files/${viteEntryFileBase}.ts`)

setFileFinder(async () => {
  const viteEntryExports = await loadViteEntry(viteEntry)
  const { fileFinder } = viteEntryExports
  const filesByType = fileFinder() as UserFiles
  return filesByType
})

async function loadViteEntry(modulePath: string): Promise<any> {
  const { viteDevServer, isProduction, root } = getGlobal()

  if (isProduction) {
    const moduleExports = require(`${root}/dist/server/${viteEntryFileBase}.js`)
    return moduleExports
  } else {
    let moduleExports
    try {
      moduleExports = await viteDevServer.ssrLoadModule(modulePath)
    } catch (err) {
      viteDevServer.ssrFixStacktrace(err)
      throw err
    }
    return moduleExports
  }
}