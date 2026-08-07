export const WHATSAPP_NUMBER = "918153001114";
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I would like to book an appointment.",
);
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const getAssetPath = (path: string) => {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
};
