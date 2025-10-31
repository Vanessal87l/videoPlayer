import React from "react";
async function proverka(previousState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  await new Promise((r) => setTimeout(r, 2000));
  if (email === "text@example.com" && password === "123") {
    return (
      <h1 className="text-xl text-green-800"> Muvaffaqiyatli kirdingiz ☺</h1>
    );
  } else if (email === "" || password === "") {
    return (
      <p className="text-xl text-yellow-500"> hamma maydonlarni toldiring!</p>
    );
  } else {
    return (
      <p className="text-xl text-red-700"> Informatsiya xato kiritildi‼</p>
    );
  }
}

export default function FormProverka() {
  const [result, formAction, isPending] = React.useActionState(proverka, "");

  return (
    <form
      className="text-xl flex items-center flex-col m-10 justify-center align-center "
      action={formAction}
    >
      <input
        className="text-md border rounded-md p-2 m-2 "
        type="email"
        name="email"
        placeholder="email kirit: "
      />
      <input
        className="text-md border rounded-md p-2 m-2"
        type="password"
        name="password"
        placeholder="password"
      />
      <button type="submit">{isPending ? "zagruzka ketvotti" : "Login"}</button>
      {result && <p>{result}</p>}
    </form>
  );
}
