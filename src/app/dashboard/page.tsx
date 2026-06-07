import { User, Settings, LayoutDashboard, Users, BookOpen, GraduationCap, Video, FileText, CreditCard, Box, Bus, MessageSquare, Briefcase, Calendar, DownloadCloud, PenTool, CheckSquare } from "lucide-react";

export default function Dashboard() {
  const modules = [
    { name: "Front Office", icon: User },
    { name: "Student Information", icon: Users },
    { name: "Fees Collection", icon: CreditCard },
    { name: "Online Course", icon: Video },
    { name: "Behaviour Records", icon: CheckSquare },
    { name: "Multi Branch", icon: LayoutDashboard },
    { name: "Gmeet Live Classes", icon: Video },
    { name: "Zoom Live Classes", icon: Video },
    { name: "Income", icon: CreditCard },
    { name: "Expenses", icon: CreditCard },
    { name: "QR Code Attendance", icon: CheckSquare },
    { name: "CBSE Examination", icon: FileText },
    { name: "Examinations", icon: FileText },
    { name: "Attendance", icon: CheckSquare },
    { name: "Online Examinations", icon: FileText },
    { name: "Academics", icon: GraduationCap },
    { name: "Annual Calendar", icon: Calendar },
    { name: "Lesson Plan", icon: PenTool },
    { name: "Human Resource", icon: Briefcase },
    { name: "Communicate", icon: MessageSquare },
    { name: "Download Center", icon: DownloadCloud },
    { name: "Homework", icon: PenTool },
    { name: "Library", icon: BookOpen },
    { name: "Inventory", icon: Box },
    { name: "Student CV", icon: FileText },
    { name: "Transport", icon: Bus },
    { name: "Hostel", icon: Box },
    { name: "Certificate", icon: FileText },
    { name: "Front CMS", icon: LayoutDashboard },
    { name: "Alumni", icon: Users },
    { name: "Reports", icon: FileText },
    { name: "System Setting", icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#1E282C] text-white flex flex-col h-screen overflow-y-auto">
        <div className="p-4 bg-[#367FA9] text-center font-bold text-xl tracking-wider">
          SMART SCHOOL
        </div>
        <div className="flex-1 py-4">
          <ul className="space-y-1">
            {modules.map((m, i) => (
              <li key={i}>
                <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-[#2C3B41] transition border-l-4 border-transparent hover:border-blue-500">
                  <m.icon size={18} className="text-gray-400" />
                  <span className="text-sm font-medium">{m.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* Topbar */}
        <header className="h-16 bg-[#3C8DBC] text-white flex items-center px-6 justify-between shadow z-10">
          <h2 className="text-lg font-medium">Dashboard</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm">Welcome, Super Admin</span>
            <div className="w-8 h-8 rounded-full bg-white text-blue-500 font-bold flex items-center justify-center">S</div>
          </div>
        </header>

        {/* Dashboard Cards */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded shadow-sm border-l-4 border-blue-500 flex items-center justify-between">
              <div>
                <h3 className="text-gray-500 text-xs font-bold">TOTAL STUDENTS</h3>
                <p className="text-2xl font-bold text-gray-800">1,245</p>
              </div>
              <Users size={32} className="text-gray-300" />
            </div>
            <div className="bg-white p-6 rounded shadow-sm border-l-4 border-green-500 flex items-center justify-between">
              <div>
                <h3 className="text-gray-500 text-xs font-bold">FEES COLLECTED</h3>
                <p className="text-2xl font-bold text-gray-800">$45,200</p>
              </div>
              <CreditCard size={32} className="text-gray-300" />
            </div>
            <div className="bg-white p-6 rounded shadow-sm border-l-4 border-purple-500 flex items-center justify-between">
              <div>
                <h3 className="text-gray-500 text-xs font-bold">TOTAL STAFF</h3>
                <p className="text-2xl font-bold text-gray-800">84</p>
              </div>
              <Briefcase size={32} className="text-gray-300" />
            </div>
            <div className="bg-white p-6 rounded shadow-sm border-l-4 border-orange-500 flex items-center justify-between">
              <div>
                <h3 className="text-gray-500 text-xs font-bold">PENDING TASKS</h3>
                <p className="text-2xl font-bold text-gray-800">12</p>
              </div>
              <CheckSquare size={32} className="text-gray-300" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded shadow-sm h-96 flex items-center justify-center">
            <p className="text-gray-400">Dashboard Intelligence Data Loading...</p>
          </div>
        </main>
      </div>
    </div>
  );
}
