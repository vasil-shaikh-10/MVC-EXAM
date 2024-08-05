import { getUser, Login } from "../../components/api_user.js";

const loginForm = async (e) => {
  e.preventDefault();
  const data = await getUser();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const user = {
    email,
    password,
  };
  console.log(data, user);
  Login(user);
};

document.getElementById("loginForm").addEventListener("submit", loginForm);