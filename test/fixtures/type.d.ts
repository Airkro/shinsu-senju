import type { GroupConfig } from '../../lib/table-grouping.ts'
import type { Mappers } from '../../lib/tree-mapper.ts'
import type { Condition } from '../../lib/utils.ts'

export type Fixture = {
  description: string
  data: Record<string, unknown>[]
  options?: {
    groups?: GroupConfig | GroupConfig[]
    parentKey?: string
    mappers?: Mappers
    filterBy?: Condition
    target?: unknown
  }
}
