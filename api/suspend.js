export default async function handler(req, res) {
    const { zone, relays, duration } = req.body;
    const API_KEY = process.env.API_KEY;

    let until = Math.floor(Date.now()/1000) + duration;

    let url =
        zone === "all"
            ? `https://api.hydrawise.com/api/v1/setzone.php?action=suspendall&api_key=${API_KEY}&custom=${until}`
            : `https://api.hydrawise.com/api/v1/setzone.php?action=suspend&api_key=${API_KEY}&relay_id=${relays[zone]}&custom=${until}`;

    const r = await fetch(url);
    const t = await r.text();

    res.status(200).send(t);
}
