const API_URL = "https://dev.codeleap.co.uk/careers/";

export async function getPosts() {
  const response = await fetch(`${API_URL}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar posts");
  }

  return response.json();
}

export async function createPost(
  title: string,
  content: string,
  username: string,
) {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      title,
      content,
    }),
  });

  return response.json();
}
