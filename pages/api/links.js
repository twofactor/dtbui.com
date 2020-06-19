// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const links = [
  { title: "Home", link: "/" },
  { title: "Twitter", link: "https://twitter.com/ghosttyped" },
  { title: "Minecraft", link: "https://www.powhattan.org/" },
  { title: "Contact Me", link: "mailto:david@dtbui.com" },
];

export default (req, res) => {
  res.statusCode = 200;
  res.json(links);
};
