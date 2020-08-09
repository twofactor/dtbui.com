export default async (req, res) => {
  const status = await fetch("https://hil-gam1-5.server.pro/server/status", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      host: "hil-gam1-5.server.pro",
      Accept: "*/*",
      "User-Agent": "insomnia/2020.3.3",
    },
    body: "id=13523443",
  }).then((data) => data.json());

  res.statusCode = 200;
  const response = {
    online: status.online,
    players: [],
  };

  for (let player of status.players) {
    response.players.push({
      player: player,
      profile: "https://minotar.net/avatar/" + player,
    });
  }

  res.json(response);
};
