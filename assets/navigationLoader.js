// https://stackoverflow.com/questions/2946656/advantages-of-createelement-over-innerhtml
function isArray(a) {
  return Object.prototype.toString.call(a) === "[object Array]";
}

function make(desc) {
  if (!isArray(desc)) {
    return make.call(this, Array.prototype.slice.call(arguments));
  }

  var name = desc[0];
  var attributes = desc[1];

  var el = document.createElement(name);

  var start = 1;
  if (
    typeof attributes === "object" &&
    attributes !== null &&
    !isArray(attributes)
  ) {
    for (var attr in attributes) {
      el[attr] = attributes[attr];
    }
    start = 2;
  }

  for (var i = start; i < desc.length; i++) {
    if (isArray(desc[i])) {
      el.appendChild(make(desc[i]));
    } else {
      el.appendChild(document.createTextNode(desc[i]));
    }
  }

  return el;
}

window.addEventListener("load", () => {
  const nav = make([
    "nav",
    [
      "div",
      [
        "section",
        ["a", { href: "/" }, ["img", { src: "/logo.svg" }]],
        ["a", { href: "/" }, ["button", "Home"]],
        [
          "a",
          { href: "/games" },
          ["button", ["i", { className: "fa-solid fa-gamepad" }], "Games"],
        ],
      ],
      [
        "section",
        [
          "a",
          { href: "/settings" },
          ["button", ["i", { className: "fa-solid fa-gear" }], "Settings"],
        ],
      ],
    ],
  ]);
  document.body.prepend(nav);
});
