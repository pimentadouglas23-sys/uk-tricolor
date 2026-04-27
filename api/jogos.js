export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const r = await fetch(
      'https://api.football-data.org/v4/teams/1840/matches?status=SCHEDULED&limit=5',
      { headers: { 'X-Auth-Token': 'a784771d5f3341b296080add6ea513a8' } }
    );
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
