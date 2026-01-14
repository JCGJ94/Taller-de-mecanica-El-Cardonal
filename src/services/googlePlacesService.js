import axios from "axios";

export const fetchGoogleReviews = async () => {
  try {
    const { data } = await axios.get("/api/reviews");
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    return [];
  }
};

