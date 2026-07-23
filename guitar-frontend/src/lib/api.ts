const BASE_URL = `${process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"}/api`;

export const getTeacher = async () => {
  const res = await fetch(`${BASE_URL}/teachers?populate=photo`);
  const data = await res.json();
  return data.data?.[0] ?? null;
};

export const getPrices = async () => {
  const res = await fetch(`${BASE_URL}/prices`);
  const data = await res.json();
  return data.data;
};

export const getVideos = async () => {
  const res = await fetch(`${BASE_URL}/videos`);
  const data = await res.json();
  return data.data;
};

export const getReviews = async () => {
  const res = await fetch(`${BASE_URL}/reviews?populate=photo`);
  const data = await res.json();
  return data.data;
};

export const getPhotos = async () => {
  const res = await fetch(`${BASE_URL}/photos?populate=image`);
  const data = await res.json();
  return data.data;
};

export const getPromo = async () => {
  const res = await fetch(`${BASE_URL}/promo?populate=image`);
  if (!res.ok) return null;
  const data = await res.json();
  return data.data ?? null;
};

