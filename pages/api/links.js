// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const links = [
  { title: "Home", link: "/" },
  { title: "Twitter", link: "https://twitter.com/ghosttyped" },
  { title: "Github", link: "https://github.com/twofactor" },
  { title: "Resume", link: "https://www.dropbox.com/s/7gelp5zgfgzvggo/David%20Bui%20Resume%201.1.2b.pdf?dl=0" },
  { title: "Minecraft", link: "https://www.powhattan.org/" },
  { title: "Contact Me", link: "mailto:david@dtbui.com" },
];

export default (req, res) => {
  res.statusCode = 200;
  res.json(links);
};
