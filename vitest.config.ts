import { mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

// https://vitest.dev/config
export default mergeConfig(viteConfig, {
  test: {
    include : [ 'tests/**/*.{test,spec}.?(c|m)[jt]s?(x)' ],
    setupFiles: './tests/setup.ts'
  }
})
