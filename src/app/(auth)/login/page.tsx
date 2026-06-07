"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, User } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In demo mode, bypass auth and redirect
    router.push("/admin/dashboard");
  };

  const setDemoCredentials = (role: string) => {
    if (role === "superadmin") {
      setUsername("superadmin@gmail.com");
      setPassword("Test@1234");
    } else if (role === "admin") {
      setUsername("admin@gmail.com");
      setPassword("admin123");
    } else if (role === "teacher") {
      setUsername("teacher@gmail.com");
      setPassword("teacher123");
    } else if (role === "accountant") {
      setUsername("accountant@gmail.com");
      setPassword("accountant123");
    } else if (role === "receptionist") {
      setUsername("receptionist@gmail.com");
      setPassword("receptionist123");
    } else if (role === "librarian") {
      setUsername("librarian@gmail.com");
      setPassword("librarian123");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <img 
            src="https://demo.smart-school.in/uploads/school_content/admin_logo/1675055692-95346212463d7524c44084!1.png" 
            alt="Smart School Logo" 
          />
          <h2>Smart School</h2>
        </div>
        
        <div className="login-box-body">
          <p className="login-box-msg">Admin Login</p>
          
          <form onSubmit={handleLogin}>
            <div className="form-group relative">
              <input 
                type="email" 
                className="form-control pl-10 py-3" 
                placeholder="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
            </div>
            
            <div className="form-group relative mt-4">
              <input 
                type="password" 
                className="form-control pl-10 py-3" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
            </div>
            
            <button type="submit" className="btn btn-primary w-full mt-6 py-2.5 text-base rounded-md font-semibold">
              Sign In
            </button>
          </form>

          <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
            <a href="#" className="hover:text-primary transition-colors">Forgot Password?</a>
            <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">
              <User size={14} /> User Login
            </a>
          </div>

          <div className="mt-8">
            <div className="demo-credentials">
              <h5>Demo Accounts</h5>
              <div className="flex flex-wrap gap-1">
                <button type="button" onClick={() => setDemoCredentials("superadmin")} className="demo-cred-btn">Super Admin</button>
                <button type="button" onClick={() => setDemoCredentials("admin")} className="demo-cred-btn bg-blue-600">Admin</button>
                <button type="button" onClick={() => setDemoCredentials("teacher")} className="demo-cred-btn bg-green-600">Teacher</button>
                <button type="button" onClick={() => setDemoCredentials("accountant")} className="demo-cred-btn bg-yellow-600">Accountant</button>
                <button type="button" onClick={() => setDemoCredentials("receptionist")} className="demo-cred-btn bg-purple-600">Receptionist</button>
                <button type="button" onClick={() => setDemoCredentials("librarian")} className="demo-cred-btn bg-teal-600">Librarian</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
