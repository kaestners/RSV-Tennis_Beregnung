export default async function handler(req, res) {
    const { zone, relays, duration } = req.body;
    const API_KEY = process.env.API_KEY;

    let url =
        zone === "all"
            ? `https://api.hydrawise.com/api/v1/setzone.php?action=runall&api_key=${API_KEY}&custom=${duration}`
            : `https://api.hydrawise.com/api/v1/setzone.php?action=run&api_key=${API_KEY}&relay_id=${relays[zone]}&custom=${duration}`;

    const r = await fetch(url);
    const t = await r.text();

    res.status(200).send(t);
}