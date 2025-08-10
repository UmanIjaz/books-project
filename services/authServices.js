// ----------- Register -----------
export function registerUser({ name, email, password, role = "customer" }) {
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  // Check if email already exists
  const exists = storedUsers.find((u) => u.email === email);
  if (exists) {
    throw new Error("Email already registered");
  }

  const newUser = { name, email, password, role };

  const updatedUsers = [...storedUsers, newUser];
  localStorage.setItem("users", JSON.stringify(updatedUsers));

  return newUser;
}

// ----------- Login -----------
export function loginUser({ email, password }) {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Simulate a token (for future)
  return {
    user: {
      name: user.name,
      email: user.email,
      role: user.role,
      token: "fake-jwt-token",
    },
  };
}
