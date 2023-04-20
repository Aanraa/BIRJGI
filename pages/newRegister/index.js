import { useState } from "react";
import { useRouter } from "next/router";
// import { getSession, signIn } from "next-auth/client";
// import { firebaseClient } from "@/lib/firebaseClient";

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.rePassword) {
      setErrorMsg("Passwords do not match");
      return;
    }
    try {
      const db = firebaseClient.firestore();
      const existingUser = await db
        .collection("users")
        .where("email", "==", formData.email)
        .get();
      if (!existingUser.empty) {
        setErrorMsg("Email already exists");
        return;
      }
      await firebaseClient
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password);
      await db.collection("users").add({
        username: formData.username,
        email: formData.email,
      });
      await signIn("firebase", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });
      router.push("/");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="bg-gray-500">
      <section class="bg-gray-100 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Бүртгүүлэх
              </h1>
              {errorMsg && <p>{errorMsg}</p>}
              <form
                class="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    И-майл
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="samdan112@gmail.com"
                    required=""
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Нэр
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Gan-erdene"
                    required=""
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    for="pass"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Нууц үг
                  </label>
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="••••••••"
                    required=""
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Дахин нууц үг
                  </label>
                  <input
                    type="password"
                    name="repass"
                    id="repass"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={formData.rePassword}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Бүртгүүлэх
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Аль хэдийн хаяг нээсэн!
                  <a
                    href="/login"
                    class="font-medium text-blue-500 hover:underline dark:text-primary-500 ml-1 cursor-pointer"
                  >
                    Нэвтрэх
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
