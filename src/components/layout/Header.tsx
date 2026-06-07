import Link from "next/link";
import {
  Bell,
  Calendar,
  CheckCircle,
  MessageSquare,
  Search,
  Menu,
} from "lucide-react";

export function Header() {
  return (
    <header className="main-header">
      {/* Logo Area */}
      <Link href="/admin/dashboard" className="logo">
        <span className="logo-lg">
          <b>Smart</b> School
        </span>
      </Link>

      {/* Navbar Area */}
      <nav className="navbar navbar-static-top flex w-full items-center justify-between px-3">
        {/* Toggle Button */}
        <button className="navbar-btn" aria-label="Toggle navigation">
          <Menu size={20} />
        </button>

        {/* Search */}
        <div className="flex-1 flex justify-center ml-4">
            <div className="relative w-full max-w-md hidden md:block">
              <input 
                type="text" 
                placeholder="Search By Student Name, Roll Number, Enroll Number..." 
                className="w-full bg-white/20 border-none rounded-md px-4 py-1.5 text-white placeholder-white/70 focus:outline-none focus:bg-white/30 text-sm"
              />
              <button className="absolute right-2 top-1.5 text-white/70 hover:text-white">
                <Search size={16} />
              </button>
            </div>
        </div>

        {/* Right Navbar Links */}
        <div className="navbar-nav-right">
          {/* Calendar */}
          <Link href="/admin/calendar" className="navbar-btn" title="Calendar">
            <Calendar size={18} />
          </Link>
          
          {/* Tasks/Approvals */}
          <Link href="/admin/approvals" className="navbar-btn" title="Approvals">
            <CheckCircle size={18} />
          </Link>

          {/* Chat */}
          <Link href="/admin/chat" className="navbar-btn relative" title="Chat">
            <MessageSquare size={18} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1 rounded-full">
              0
            </span>
          </Link>

          {/* User Menu */}
          <div className="relative ml-2">
            <button className="flex items-center gap-2 hover:bg-black/10 p-1 rounded-md transition-colors">
              <img
                src="https://demo.smart-school.in/uploads/staff_images/1.jpg"
                className="w-8 h-8 rounded-full border border-white/30 object-cover"
                alt="User Image"
              />
              <span className="text-white text-sm font-semibold hidden sm:inline-block">
                Super Admin
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
