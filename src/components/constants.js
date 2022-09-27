const total = {
  accessories: {
    glasses: 17,
    earrings: 32,
    hats: 28,
    neckwear: 18,
  },
  body: 17,
  eyes: 17,
  hair: 73,
  noses: 1,
  mouths: 24,
  eyebrows: 15,
  facial_hair: 17,
  clothes: {
    layer_1: 5,
    layer_2: 5,
    layer_3: 5,
  },
};

const getItems = (name, length, path) => {
  let array = [];
  for (var i = 1; i <= length; i++) {
    array.push({
      index: i,
      id: `${name}${i}`,
      listName: name,
      path: `${path}${name}`,
      status: "",
    });
  }
  return array;
};

const getAllItems = (object, path = "") => {
  let totalObject = {};
  for (const key in object) {
    if (object[key] instanceof Object) {
      totalObject = {
        ...totalObject,
        [key]: getAllItems(object[key], `${path}${key}/`),
      };
    } else {
      totalObject = { ...totalObject, [key]: getItems(key, object[key], path) };
    }
  }
  return totalObject;
};

export const getTotalItems = () => {
  let totalObj = getAllItems(total);
  return totalObj;
};
