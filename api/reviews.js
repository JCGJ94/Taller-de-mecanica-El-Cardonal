export default async function handler(req, res) {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    // 🔎 DEBUG: comprobar si existen las env vars
    if (!apiKey || !placeId) {
      return res.status(200).json({
        debug: true,
        GOOGLE_PLACES_API_KEY_exists: !!apiKey,
        GOOGLE_PLACE_ID_exists: !!placeId,
        envKeys: Object.keys(process.env).filter(k =>
          k.includes("GOOGLE")
        )
      });
    }

    const url =
      `https://maps.googleapis.com/maps/api/place/details/json` +
      `?place_id=${placeId}` +
      `&fields=reviews,rating,user_ratings_total,name` +
      `&language=es` +
      `&key=${apiKey}`;

    const r = await fetch(url);
    const data = await r.json();

    if (data.status !== "OK") {
      return res.status(400).json({
        debug: true,
        googleStatus: data.status,
        googleError: data.error_message,
        raw: data
      });
    }

    const reviews = (data.result?.reviews || []).map((x) => ({
      stars: x.rating,
      text: x.text,
      author_name: x.author_name,
    }));

    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");
    return res.status(200).json({
      debug: false,
      count: reviews.length,
      reviews
    });

  } catch (e) {
    return res.status(500).json({
      debug: true,
      error: "Server error",
      details: String(e)
    });
  }
}
