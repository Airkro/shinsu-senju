import type { GroupConfig } from '../../lib/table2tree.ts'
import type { Options } from '../../lib/tree-mapper.ts'

export type Fixture = {
  description: string
  data: Record<string, unknown>[]
  options?: {
    paths?: GroupConfig | GroupConfig[]
  } & Options
}
