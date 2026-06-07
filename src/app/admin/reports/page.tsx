"use client";

import { PieChart, FileText, BarChart2, Calendar, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ReportsPage() {
  const reportCards = [
    { title: "Student Information Reports", icon: FileText, desc: "Student details, admission, profiles, sibling report", color: "bg-aqua" },
    { title: "Finance Reports", icon: BarChart2, desc: "Fees collection, balance, expenses, transaction history", color: "bg-green" },
    { title: "Attendance Reports", icon: Calendar, desc: "Daily attendance sheets, monthly statistics, staff logs", color: "bg-yellow" },
    { title: "Human Resource Reports", icon: ShieldCheck, desc: "Staff directory reports, payroll summaries, active leaves", color: "bg-red" },
  ];

  return (
    <>
      <div className="content-header">
        <h1>Reports Center</h1>
      </div>

      <div className="mt-4">
        <div className="row">
          {reportCards.map((report, idx) => (
            <div key={idx} className="col-md-6 col-sm-12 mb-4">
              <div className="box box-info hover:shadow-md transition cursor-pointer">
                <div className="box-body flex items-start gap-4 p-4">
                  <div className={`p-4 rounded text-white ${report.color}`}>
                    <report.icon size={32} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">{report.title}</h4>
                    <p className="text-sm text-gray-500">{report.desc}</p>
                    <button className="btn btn-default btn-xs mt-3">View Detailed Report</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
