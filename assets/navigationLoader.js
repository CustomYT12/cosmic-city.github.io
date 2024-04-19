import { make } from "./modules/make.js"

window.addEventListener("load", () => {
  const nav = make([
    "nav",
    [
      "div",
      [
        "section",
        ["a", { href: "/" }, 
        ["img", { src: "/logo.svg" }]],
        ["a", { href: "/" }, 
        ["button",["i", {className: "fa-solid fa-house" }], "Home"]],
        [
          "a",
          { href: "/games" },
          ["button", ["i", { className: "fa-solid fa-gamepad" }], "Games"],
        ],
        [
          "a",
          { href: "/chat" },
          ["button", ["i", { className: "fa-solid fa-comments" }], "Chat"],
        ],
        [
          "a",
          { href: "/news" },
          ["button", ["i", { className: "fa-solid fa-newspaper" }], "News"],
        ],
      ],
      [
        "section",
        [
          "a",
          { href: "/changelog" },
          ["button", ["i", { className: "fa-solid fa-wrench" }], "Changelog"],
        ],
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
