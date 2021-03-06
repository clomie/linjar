export interface VNode {
  type: string | Component
  attributes: Attrs | null
  children: ChildNodes
}

export interface Component<P = Record<string, unknown>> {
  (props: P & { children?: ChildNodes }): VNode
}

type Attrs = { [name: string]: unknown } & {
  dangerouslySetInnerHTML?: { __html: string }
}

type ChildNode = VNode | object | string | number | boolean | null | undefined
export type ChildNodes = ChildNode[]

export const h = (
  type: string | Component,
  props: Attrs | null,
  ...children: ChildNodes
): VNode => ({ type, attributes: props || {}, children })

export const Fragment: Component = () => h('', null) // make dummy VNode
