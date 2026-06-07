"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { useMutation } from "convex/react";
// import { api } from "../../../convex/_generated/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }
    // Hardcoded bypass for 30 min PoC to prove UI/Routing works instantly even before Convex syncs
    if (password === "password") {
       router.push("/dashboard");
    } else {
       setError("Invalid credentials");
    }
  };

  const copyRole = (rEmail: string, rPass: string) => {
    setEmail(rEmail);
    setPassword(rPass);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Left side: Login form */}
      <div className="w-full lg:w-1/3 bg-white flex flex-col justify-center items-center p-8 relative z-10">
        <div className="w-full max-w-sm">
          <div className="mb-8 flex justify-center">
            <h1 className="text-3xl font-bold text-gray-800">Smart School</h1>
          </div>
          <h3 className="text-xl font-semibold mb-6 text-gray-700">Admin Login</h3>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-black"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-gray-800 text-white font-bold py-3 rounded hover:bg-gray-700 transition"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 space-y-2">
            <div className="flex gap-2">
              <button onClick={() => copyRole('superadmin@gmail.com','password')} className="flex-1 bg-[#0084B4] text-white py-2 px-2 rounded text-xs hover:opacity-90">Super Admin</button>
              <button onClick={() => copyRole('william@gmail.com','password')} className="flex-1 bg-[#1bbed3] text-white py-2 px-2 rounded text-xs hover:opacity-90">Admin</button>
              <button onClick={() => copyRole('jason@gmail.com','password')} className="flex-1 bg-[#999999] text-white py-2 px-2 rounded text-xs hover:opacity-90">Teacher</button>
            </div>
            <div className="flex gap-2">
              <button onClick={() => copyRole('james.deckar@gmail.com','password')} className="flex-1 bg-[#999999] text-white py-2 px-2 rounded text-xs hover:opacity-90">Accountant</button>
              <button onClick={() => copyRole('maria.ford@gmail.com','password')} className="flex-1 bg-[#e91e63] text-white py-2 px-2 rounded text-xs hover:opacity-90">Receptionist</button>
              <button onClick={() => copyRole('brandon@gmail.com','password')} className="flex-1 bg-[#4aa64e] text-white py-2 px-2 rounded text-xs hover:opacity-90">Librarian</button>
            </div>
            <div className="text-center pt-4">
              <p className="text-sm text-gray-500">*Note: Select Class 1 and Section A for demo testing.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side: Background Image and News */}
      <div className="hidden lg:flex w-2/3 bg-cover bg-center" style={{ backgroundImage: "url('https://demo.smart-school.in/uploads/school_content/login_image/1663064530-1070210809632059d2b8b0b!1662796232-1721792380631c41c80d038!login_bg3.jpg')" }}>
        <div className="p-12 text-white bg-black bg-opacity-50 w-full h-full flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">What's New In Mount Carmel School</h2>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold">National Level Workshop for Science Teachers</h4>
              <p className="text-sm opacity-80">A two-day capacity building programme was...</p>
            </div>
            <div className="h-px bg-white opacity-20 my-2"></div>
            <div>
              <h4 className="text-xl font-semibold">New Books Added to Library</h4>
              <p className="text-sm opacity-80">The school library has added new educational and...</p>
            </div>
            <div className="h-px bg-white opacity-20 my-2"></div>
            <div>
              <h4 className="text-xl font-semibold">Unit Test Schedule Released</h4>
              <p className="text-sm opacity-80">The schedule for the upcoming unit test has been...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
