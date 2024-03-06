export async function loginUser(login: Login): Promise<boolean> {
  let hasError = false;
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      }
    );
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    hasError = true;
  } finally {
    if (hasError) return false;
    return true;
  }
}

export async function createUser(register: User): Promise<boolean> {
  let hasError = false;
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/user/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register),
      }
    );
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    hasError = true;
  } finally {
    if (hasError) return false;
    return true;
  }
}
