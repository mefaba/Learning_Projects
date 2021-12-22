const Mayact = {
  createElement,
  render,
};

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        return typeof child === "object" ? child : createTextElement(child);
      }),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

const element1 = Mayact.createElement(
  "div",
  { id: "foo" },
  Mayact.createElement("a", null, "bar"),
  Mayact.createElement("b"),
  "Text inside div"
);

//If we have a comment like below one, when babel transpiles the JSX it will use the function we define.

/** @jsx Mayact.createElement */
const element = (
  <div id="foo2">
    <a>Merhaba</a>
    <b />
  </div>
);

function render(elementAST, mainNode) {
  const elementNode =
    elementAST.type == "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(elementAST.type);

  const isProperty = function (key) {
    return key !== "children";
  };

  Object.keys(elementAST.props)
    .filter(isProperty)
    .forEach((name) => {
      elementNode[name] = elementAST.props[name];
    });

  elementAST.props.children.forEach((child) => render(child, elementNode));

  mainNode.appendChild(elementNode);
}

const rootNode = document.getElementById("root");
Mayact.render(element, rootNode);
