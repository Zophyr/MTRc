const COLOR_MAP = [
  {
    color: "#b6121b"
  },
  {
    color: "#b3083c"
  },
  {
    color: "#c5112e"
  },
  {
    color: "#ef3125"
  },
  {
    color: "#a94c11"
  },
  {
    color: "#f69021"
  },
  {
    color: "#f0cb01"
  },
  {
    color: "#015848"
  },
  {
    color: "#4aab44"
  },
  {
    color: "#5fc1a8"
  },
  {
    color: "#0077c3"
  },
  {
    color: "#c5112e"
  },
  {
    color: "#c5112e"
  },
  {
    color: "#bf2e1d"
  },
  {
    color: "#f45f7d"
  },
  {
    color: "#d26f1a"
  },
  {
    color: "#ffd105"
  },
  {
    color: "#01674f"
  },
  {
    color: "#7bc043"
  },
  {
    color: "#76c8ba"
  },
  {
    color: "#017db1"
  },
  {
    color: "#243e9b"
  },
  {
    color: "#ee184e"
  },
  {
    color: "#d31048"
  },
  {
    color: "#f79e8c"
  },
  {
    color: "#cf711a"
  },
  {
    color: "#eaa712"
  },
  {
    color: "#fde054"
  },
  {
    color: "#016a66"
  },
  {
    color: "#a8c39a"
  },
  {
    color: "#028fc5"
  },
  {
    color: "#8ad3e4"
  },
  {
    color: "#7673a8"
  },
  {
    color: "#f7b3c0"
  },
  {
    color: "#f67f25"
  },
  {
    color: "#f57220"
  },
  {
    color: "#fbb134"
  },
  {
    color: "#fde24d"
  },
  {
    color: "#016c52"
  },
  {
    color: "#b3d78d"
  },
  {
    color: "#90d2ce"
  },
  {
    color: "#0199c8"
  },
  {
    color: "#9698cb"
  },
  {
    color: "#69686d"
  },
  {
    color: "#f47b20"
  },
  {
    color: "#fcbb5d"
  },
  {
    color: "#f8d39e"
  },
  {
    color: "#ffe386"
  },
  {
    color: "#017f7b"
  },
  {
    color: "#d1e5aa"
  },
  {
    color: "#82cec2"
  },
  {
    color: "#1cb7ed"
  },
  {
    color: "#b5d7f2"
  },
  {
    color: "#c178b0"
  },
  {
    color: "#bcc0c3"
  },
  {
    color: "#fed8a7"
  },
  {
    color: "#fcb062"
  },
  {
    color: "#ffea00"
  },
  {
    color: "#018f83"
  },
  {
    color: "#d8e03d"
  },
  {
    color: "#8ad4df"
  },
  {
    color: "#1cb7ed"
  },
  {
    color: "#b396c6"
  },
  {
    color: "#c6c5ca"
  },
  {
    color: "#d2d6d9"
  },
  {
    color: "#f2f1f6"
  },
  {
    color: "#efea44"
  },
  {
    color: "#fff454"
  },
  {
    color: "#ffea00"
  },
  {
    color: "#4b711a"
  },
  {
    color: "#c5e1e2"
  },
  {
    color: "#7abde8"
  },
  {
    color: "#b8e2fa"
  },
  {
    color: "#c8a9d3"
  },
  {
    color: "#e6e5ea"
  },
  {
    color: "#f2f1f6"
  },
  {
    color: "#f2f1f6"
  },
  {
    color: "#19b375"
  },
  {
    color: "#b6aa80"
  },
  {
    color: "#01b296"
  },
  {
    color: "#d8e03d"
  },
  {
    color: "#6dafe3"
  },
  {
    color: "#4cc8ec"
  },
  {
    color: "#a9b8d9"
  },
  {
    color: "#b9a2aa"
  },
  {
    color: "#f8cacc"
  },
  {
    color: "#f2f1f6"
  },
  {
    color: "#ffffff"
  }
];

document.documentElement.requestFullscreen();

const colorMap = document.getElementById("color-map");

for (let i = 0; i < 88; i++) {
  let div = document.createElement("div");
  div.classList.add("color-block");
  div.id = i;
  div.style.backgroundColor = COLOR_MAP[i].color;
  div.style.backgroundColor = colorMap.appendChild(div);
}
