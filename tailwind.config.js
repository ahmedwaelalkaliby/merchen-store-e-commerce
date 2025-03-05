/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image-men":
          "url('https://static.pullandbear.net/assets/public/74c6/cadf/0390451f99ee/1fac074a4e6f/NEWIN-H/NEWIN-H.jpg?ts=1725372917549&w=1920')",
        "hero-image-women":
          "url('https://static.pullandbear.net/2/cms/assets/uploads/newinh_61.jpg?imwidth=1920&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20240904080000')",
        "t-shirt-men":
          "url('https://static.pullandbear.net/2/cms/assets/uploads/camisetassv_6.jpg?imwidth=1700&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20240808152311')",
        "pants-men":
          "url('https://static.pullandbear.net/assets/public/b200/96b8/89f344afa6e1/78f667453999/DENIM-1/DENIM-1.jpg?ts=1725373381597&w=1920')",
        "dresses-women":
          "url('https://static.pullandbear.net/2/cms/assets/uploads/vestidos_55.png?imwidth=1920&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20240904080000')",
        "dresses-women-sm":
          "url('https://static.pullandbear.net/2/cms/assets/uploads/vestidossv_5.jpg?imwidth=563&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20240904080000')",
        "tops-women":
          "url('https://static.pullandbear.net/2/cms/assets/uploads/topssv_6.jpg?imwidth=1700&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20240808152311')",
        "tops-women-sm":
          "url('https://static.pullandbear.net/assets/public/c15f/6bd5/2b26403d9fc1/e67324dddd33/07771322800-A7M/07771322800-A7M.jpg?ts=1724938105623&w=750')",
        "more-itmes":
          "url('https://r4.wallpaperflare.com/wallpaper/709/359/672/tv-show-breaking-bad-anna-gunn-betsy-brandt-wallpaper-1990589d01ca8d1b560778efe091965d.jpg')",
        "more-items-men-sm":
          "url('https://static.pullandbear.net/2/cms/assets/uploads/stwdsv_4.jpg?imwidth=563&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20240830021706')",
        "hero-image-men-sm":
          "url('https://static.pullandbear.net/2/cms/assets/uploads/newinVes_127.jpg?imwidth=563&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20240830021706')",
        "hero-image-women-sm":
          "url('https://static.pullandbear.net/2/cms/assets/uploads/newinVes_131.jpg?imwidth=563&impolicy=pullandbear-itxmediumhigh&imformat=chrome&ts=20240904080000')",
        "t-shirt-men-sm":
          "url('https://static.pullandbear.net/assets/public/e627/947a/ea584b26b3fd/b8b801567815/07249592570-A7M/07249592570-A7M.jpg?ts=1725373575538&w=750')",
        "pants-men-sm":
          "url('https://static.pullandbear.net/assets/public/411d/2288/5483417aa4c2/8b2c089c1557/07678521802-A7M/07678521802-A7M.jpg?ts=1725370370046&w=750')",
      },
      backgroundVideos: {
        "hero-men": "url('./public/assets/videos/homenewindesktop_2.mp4')",
      },
      placeholderColor: ["active"],
    },
  },
  variants: {
    extend: {
      placeholderColor: ["active"],
    },
  },
  plugins: [],
});
