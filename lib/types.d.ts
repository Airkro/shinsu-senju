export type DataRecord = Record<string, unknown>

export interface GroupConfig {
  groupBy: string
  label?: string
}

export interface GroupNode {
  $meta: {
    groupBy: string
    value: unknown
  }
  children: TreeNode[]
}

export type TreeNode = DataRecord | GroupNode
