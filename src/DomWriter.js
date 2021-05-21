const writer = (domNode) => (...data) => {
  if (data && data.length > 0) {
    domNode.innerHTML += data.join("");
  }
};

export default writer;

function processArguments(data) {
  if (!data) {
    return [];
  } else if (!Array.isArray(data)) {
    return [[data]];
  } else if (data.length > 1 && typeof data[data.length - 1] === "object") {
    return [data.slice(0, -1), data[data.length - 1]];
  } else {
    return [data];
  }
}

const emptyPrint = (tag) => (options) => {
  let node = tag;

  if (options) {
    for (const [key, value] of Object.entries(options)) {
      node += ` ${key}="${value}"`;
    }
  }

  return `<${node}/>`;
};

const simplePrint = (tag) => (data, options) => {
  let node = tag;

  if (options) {
    for (const [key, value] of Object.entries(options)) {
      node += ` ${key}="${value}"`;
    }
  }

  return `<${node}>${data}</${tag}>`;
};

const containerPrint = (tag) => (...params) => {
  const [data, options] = processArguments(params);

  let node = tag;

  if (options) {
    for (const [key, value] of Object.entries(options)) {
      node += ` ${key}="${value}"`;
    }
  }

  return `<${node}>${data.join("")}</${tag}>`;
};

const hr = emptyPrint("hr");

const h1 = simplePrint("h1");
const h2 = simplePrint("h2");
const p = simplePrint("p");
const button = simplePrint("button");

const div = containerPrint("div");

export { hr, h1, h2, p, button, div };
