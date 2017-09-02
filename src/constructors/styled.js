// @flow
import type { Target } from '../types'

export default (styledComponent: Function, constructWithOptions: Function) => {
  const styled = (tag: Target) => constructWithOptions(styledComponent, tag)

  return new Proxy(styled, {
    get(target, name) {
      return name in target
        ? target[name]
        : styled(name)
    },
  })
}
