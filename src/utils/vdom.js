// import { hasOwn } from 'element-ui/src/utils/util';
import { hasOwn } from '../utils/util';

export function isVNode(node) {
  return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions');
};
