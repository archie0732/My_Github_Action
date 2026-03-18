const autoLogin = async () => {
  const email = Bun.env.EMAIL;
  const password = Bun.env.PASSWORD;
  const path = Bun.env.LOGIN_PATH;

  if (!email || !password || !path) {
    throw new Error("Lost .env file");
  }

  try {
    const response = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`login fail: ${response.status}`);
    }

    console.log("Login successful!");
  }
  catch (e) {
    console.error(e);
    throw e;
  }
};

autoLogin();
