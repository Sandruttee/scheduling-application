export async function handleRegister(email, username, password, navigate) {
  try {
    const request = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({
        email,
        username,
        password,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    if (data.error_message) {
      toast.error(data.error_message);
    } else {
      toast.success(data.message);
      navigate("/");
    }
  } catch (err) {
    console.error(err);
    toast.error("Account creation failed");
  }
}

export async function handleLogin(username, password, navigate) {
  try {
    const request = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    if (data.error_message) {
      toast.error(data.error_message);
    } else {
      //👇🏻If login successful
      toast.success(data.message);
      //👇🏻 saves the email and id for identification
      localStorage.setItem("_id", data.data._id);
      localStorage.setItem("_myEmail", data.data._email);
      navigate("/dashboard");
    }
  } catch (err) {
    console.error(err);
  }
}
