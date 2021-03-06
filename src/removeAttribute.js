/**
 * Imports
 */

import setValue from './setValue'

/**
 * Remove an attribute from an element
 */

function removeAttribute (node, name) {
  switch (name) {
    case 'checked':
    case 'disabled':
    case 'selected':
      node[name] = false
      break
    case 'innerHTML':
      node.innerHTML = ''
      break
    case 'value':
      setValue(node, null)
      break
    default:
      node.removeAttribute(name)
      break
  }
}

/**
 * Exports
 */

export default removeAttribute
