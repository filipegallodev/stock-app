export async function loginUser(login: Login): Promise<boolean> {
  let error = false;
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    error = true;
  } finally {
    if (error) return false;
    return true;
  }
}
