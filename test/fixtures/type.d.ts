import type { GroupConfig } from '../../lib/table-grouping.ts'
import type { FilterBy } from '../../lib/tree-filter.ts'
import type { Mappers } from '../../lib/tree-mapper.ts'

export type Fixture = {
  description: string
  data: Record<string, unknown>[]
  options?: {
    groups?: GroupConfig | (object | GroupConfig)[]
    parentKey?: string
    mappers?: Mappers
    filterBy?: FilterBy
  }
}
