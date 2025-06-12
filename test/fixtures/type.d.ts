import type { GroupConfig } from '../../lib/table-grouping.ts'
import type { Mappers } from '../../lib/tree-mapper.ts'

export type Fixture = {
  description: string
  data: Record<string, unknown>[]
  options?: {
    paths?: GroupConfig | GroupConfig[]
  } & Mappers
}
