// netlify/functions/rebuild.js

export async function handler(event, context) {
  const res = await fetch("https://api.netlify.com/build_hooks/6879b761109255663ad649b8", {
    method: "POST",
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Triggered site rebuild", response: await res.text() }),
  };
}