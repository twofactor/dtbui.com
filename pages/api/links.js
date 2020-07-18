// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const links = [
  { title: "Home", link: "/" },
  { title: "Twitter", link: "https://twitter.com/ghosttyped" },
  { title: "Github", link: "https://github.com/twofactor" },
  { title: "Minecraft", link: "https://www.dtbui.com/minecraft" },
  { title: "Contact Me", link: "mailto:uselestufdb@gmail.com" },
];

export default (req, res) => {
  res.statusCode = 200;
  res.json(links);
};
