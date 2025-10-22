
function immutableRemoveObjectProperty(obj, property) {
  return Object.keys(obj).reduce(
    (result, item, index, array) => {
      if (item !== property) {
        return Object.assign({}, result, {
          [array[index]]: obj[item],
        });
      }
      return Object.assign({}, result);
    },
    {},
  );
}

function isEmptyObject(object) {
  return typeof object === 'object' && Object.values(object).length === 0;
}

function setItemStorage(key, value) {
  if (typeof key === 'string' && typeof value === 'string') {
    window.localStorage.setItem(key, value);
  }
}

function getItemStorage(key) {
  if (typeof key === 'string') {
    return window.localStorage.getItem(key);
  }

  return null;
}

function removeItemStorage(key) {
  if (typeof key === 'string') {
    window.localStorage.removeItem(key);
  }
}

export {
  immutableRemoveObjectProperty,
  isEmptyObject,
  setItemStorage,
  getItemStorage,
  removeItemStorage,
};
