import { useState } from "react";

export default function App() {
  return (
    <div className="p-6 flex flex-col gap-6">
      <TextUpdater />
      <TextInputForm />
      <UserCard name="Virat Kohli" email="virat.kohli@example.com" />
      <Button />
      <LoginForm />
    </div>
  );
}

function TextUpdater() {
  const [text, setText] = useState("");
  return (
    <div className="p-4 border rounded">
      <input
        type="text"
        className="border p-2 w-full"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-2">{text}</p>
    </div>
  );
}

function TextInputForm() {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded flex gap-2">
      <input
        type="text"
        className="border p-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}

function UserCard({ name, email }) {
  return (
    <div className="p-4 border rounded shadow-md bg-gray-100">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}

function Button() {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      onClick={() => console.log("Button clicked!")}
    >
      Click Me
    </button>
  );
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };
  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded flex flex-col gap-2">
      <input
        type="email"
        placeholder="Email"
        className="border p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
    </form>
  );
}
