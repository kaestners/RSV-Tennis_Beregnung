export default async function handler(req, res) {
    const API_KEY = process.env.API_KEY;

    const response = await fetch(
        `https://api.hydrawise.com/api/v1/status?api_key=${API_KEY}`
    );

    const data = await response.json();

    res.status(200).json(data);
}