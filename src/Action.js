export const increment = (nodeId) => ({
  type: increment,
  nodeId
});
export const addChild = (nodeId, childId) => ({
  type: addChild,
  nodeId,
  childId
});

export const removeNode = (nodeId) => ({
  type: removeNode,
  nodeId
});
