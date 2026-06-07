"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Building2, 
  Users, 
  Wallet, 
  GraduationCap, 
  CalendarDays, 
  BookOpen, 
  UsersRound, 
  MessageSquare, 
  Download, 
  BookMarked, 
  Library, 
  Package, 
  Bus, 
  Home, 
  FileCheck, 
  GraduationCap as AlumniIcon,
  PieChart, 
  Settings,
  ChevronRight,
  ClipboardCheck,
  CheckSquare,
  DollarSign,
  CreditCard,
  QrCode
} from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Front Office", icon: Building2, path: "/admin/front-office" },
    { name: "Student Information", icon: Users, path: "/admin/students" },
    { name: "Fees Collection", icon: Wallet, path: "/admin/fees" },
    { name: "Income", icon: DollarSign, path: "/admin/income" },
    { name: "Expenses", icon: CreditCard, path: "/admin/expenses" },
    { name: "QR Code Attendance", icon: QrCode, path: "/admin/qr-attendance" },
    { name: "Examinations", icon: ClipboardCheck, path: "/admin/exams" },
    { name: "Attendance", icon: CheckSquare, path: "/admin/attendance" },
    { name: "Online Examinations", icon: BookOpen, path: "/admin/online-exams" },
    { name: "Academics", icon: GraduationCap, path: "/admin/academics" },
    { name: "Annual Calendar", icon: CalendarDays, path: "/admin/calendar" },
    { name: "Lesson Plan", icon: BookMarked, path: "/admin/lesson-plan" },
    { name: "Human Resource", icon: UsersRound, path: "/admin/hr" },
    { name: "Communicate", icon: MessageSquare, path: "/admin/communicate" },
    { name: "Download Center", icon: Download, path: "/admin/downloads" },
    { name: "Homework", icon: BookMarked, path: "/admin/homework" },
    { name: "Library", icon: Library, path: "/admin/library" },
    { name: "Inventory", icon: Package, path: "/admin/inventory" },
    { name: "Transport", icon: Bus, path: "/admin/transport" },
    { name: "Hostel", icon: Home, path: "/admin/hostel" },
    { name: "Certificate", icon: FileCheck, path: "/admin/certificates" },
    { name: "Front CMS", icon: Building2, path: "/admin/cms" },
    { name: "Alumni", icon: AlumniIcon, path: "/admin/alumni" },
    { name: "Reports", icon: PieChart, path: "/admin/reports" },
    { name: "System Setting", icon: Settings, path: "/admin/settings" },
  ];

  return (
    <aside className="main-sidebar">
      {/* User Panel */}
      <div className="user-panel">
        <img
          src="https://demo.smart-school.in/uploads/staff_images/1.jpg"
          className="avatar"
          alt="User Image"
        />
        <div className="info">
          <p className="text-white font-semibold text-sm mb-1 truncate">Super Admin</p>
          <div className="flex items-center gap-1 text-[11px] text-green-400">
            <span className="w-2 h-2 rounded-full bg-green-500"></span> Online
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="sidebar-search">
        <input type="text" placeholder="Search..." />
      </div>

      {/* Menu */}
      <ul className="sidebar-menu">
        {menuItems.map((item) => {
          const isActive = pathname.startsWith(item.path);
          return (
            <li key={item.name} className={isActive ? "active" : ""}>
              <Link href={item.path}>
                <div className="nav-icon">
                  <item.icon size={16} />
                </div>
                <span>{item.name}</span>
                <div className="pull-right-container">
                  <ChevronRight size={14} className="text-gray-500" />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
