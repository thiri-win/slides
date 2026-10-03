import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav, baseShortcuts) => {
  return baseShortcuts.filter(s => s.name !== 'goto')
})
