import { Metadata } from "next";
import { 
  Wallet, 
  Users, 
  CalendarCheck, 
  UserCheck, 
  CheckCircle,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard | Smart School SMS",
};

export default function DashboardPage() {
  return (
    <>
      <div className="content-header">
        <h1>Dashboard</h1>
        <ul className="breadcrumb">
          <li className="breadcrumb-item"><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
          <li className="breadcrumb-item active">Dashboard</li>
        </ul>
      </div>

      <div className="mt-4">
        <div className="row">
          {/* Fees Awaiting Payment */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="info-box">
              <span className="info-box-icon bg-aqua"><Wallet size={36} /></span>
              <div className="info-box-content">
                <span className="info-box-text">Fees Awaiting Payment</span>
                <span className="info-box-number">2/119</span>
              </div>
            </div>
          </div>

          {/* Converted Leads */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="info-box">
              <span className="info-box-icon bg-green"><Users size={36} /></span>
              <div className="info-box-content">
                <span className="info-box-text">Converted Leads</span>
                <span className="info-box-number">1/6</span>
              </div>
            </div>
          </div>

          {/* Staff Present Today */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="info-box">
              <span className="info-box-icon bg-yellow"><UserCheck size={36} /></span>
              <div className="info-box-content">
                <span className="info-box-text">Staff Present Today</span>
                <span className="info-box-number">0/9</span>
              </div>
            </div>
          </div>

          {/* Student Present Today */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="info-box">
              <span className="info-box-icon bg-red"><CalendarCheck size={36} /></span>
              <div className="info-box-content">
                <span className="info-box-text">Student Present Today</span>
                <span className="info-box-number">0/86</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-8 col-md-12">
            {/* Quick Links / Financial Overview Chart Area */}
            <div className="box box-primary">
              <div className="box-header">
                <h3 className="box-title">Fees Collection & Expenses For June 2026</h3>
              </div>
              <div className="box-body" style={{ height: "300px" }}>
                {/* Chart will go here */}
                <div className="flex items-center justify-center h-full text-gray-400 bg-gray-50 rounded">
                  Bar Chart Placeholder (Income vs Expense)
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
             {/* Small Stat Cards Area */}
             <div className="row">
               <div className="col-6 mb-3">
                 <div className="bg-aqua p-4 rounded text-white text-center shadow-sm hover:shadow-md transition cursor-pointer">
                   <div className="text-2xl font-bold mb-1">$7,300.00</div>
                   <div className="text-xs uppercase tracking-wider opacity-90">Monthly Fees Collection</div>
                 </div>
               </div>
               <div className="col-6 mb-3">
                 <div className="bg-red p-4 rounded text-white text-center shadow-sm hover:shadow-md transition cursor-pointer">
                   <div className="text-2xl font-bold mb-1">$2,400.00</div>
                   <div className="text-xs uppercase tracking-wider opacity-90">Monthly Expenses</div>
                 </div>
               </div>
               <div className="col-6 mb-3">
                 <div className="bg-green p-4 rounded text-white text-center shadow-sm hover:shadow-md transition cursor-pointer">
                   <div className="text-2xl font-bold mb-1">86</div>
                   <div className="text-xs uppercase tracking-wider opacity-90">Total Students</div>
                 </div>
               </div>
               <div className="col-6 mb-3">
                 <div className="bg-yellow p-4 rounded text-white text-center shadow-sm hover:shadow-md transition cursor-pointer">
                   <div className="text-2xl font-bold mb-1">9</div>
                   <div className="text-xs uppercase tracking-wider opacity-90">Total Staff</div>
                 </div>
               </div>
             </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
             <div className="box box-info">
              <div className="box-header">
                <h3 className="box-title">System Overview</h3>
              </div>
              <div className="box-body">
                <div className="row">
                  <div className="col-md-3">
                    <h5 className="font-semibold text-gray-700 border-b pb-2 mb-3">Fees Overview</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-red-500 font-medium"><i className="fas fa-circle mr-1"></i> 115 UNPAID</span>
                        <span className="text-gray-500">96.64%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-yellow-500 font-medium"><i className="fas fa-circle mr-1"></i> 2 PARTIAL</span>
                        <span className="text-gray-500">1.68%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-green-500 font-medium"><i className="fas fa-circle mr-1"></i> 2 PAID</span>
                        <span className="text-gray-500">1.68%</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <h5 className="font-semibold text-gray-700 border-b pb-2 mb-3">Enquiry Overview</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-blue-500 font-medium">4 ACTIVE</span>
                        <span className="text-gray-500">66.67%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-green-500 font-medium">1 WON</span>
                        <span className="text-gray-500">16.67%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 font-medium">1 PASSIVE</span>
                        <span className="text-gray-500">16.67%</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <h5 className="font-semibold text-gray-700 border-b pb-2 mb-3">Library Overview</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-red-500 font-medium">5 DUE FOR RETURN</span>
                        <span className="text-gray-500">83.33%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-green-500 font-medium">1 RETURNED</span>
                        <span className="text-gray-500">16.67%</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <h5 className="font-semibold text-gray-700 border-b pb-2 mb-3">Today's Attendance</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-green-500 font-medium">0 PRESENT</span>
                        <span className="text-gray-500">0.00%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-red-500 font-medium">0 ABSENT</span>
                        <span className="text-gray-500">0.00%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-yellow-500 font-medium">0 LATE</span>
                        <span className="text-gray-500">0.00%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
