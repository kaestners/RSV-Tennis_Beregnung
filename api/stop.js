export default async function handler(req, res) {
    const { zone, relays } = req.body;
    const API_KEY = process.env.API_KEY;

    let url =
        zone === "all"
            ? `https://api.hydrawise.com/api/v1/setzone.php?action=stopall&api_key=${API_KEY}`
            : `https://api.hydrawise.com/api/v1/setzone.php?action=stop&api_key=${API_KEY}&relay_id=${relays[zone]}`;

    const r = await fetch(url);
    const t = await r.text();

    res.status(200).send(t);
}