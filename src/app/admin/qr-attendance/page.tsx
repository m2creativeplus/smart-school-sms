import { Metadata } from "next";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "QR Code Attendance | Smart School SMS",
};

export default function QRAttendancePage() {
  return (
    <>
      <div className="content-header">
        <h1>QR Code Attendance</h1>
      </div>

      <div className="mt-4 row">
        <div className="col-md-4">
           <div className="box box-primary">
             <div className="box-header">
               <h3 className="box-title">Scan QR Code</h3>
             </div>
             <div className="box-body text-center">
               {/* QR Scanner Placeholder */}
               <div className="bg-gray-100 border border-gray-300 w-full aspect-square flex items-center justify-center rounded-md mb-4">
                 <div className="text-gray-400">
                    <p><i className="fa fa-camera text-4xl mb-2"></i></p>
                    <p>Camera Not Available</p>
                 </div>
               </div>
               
               <p className="text-sm text-gray-500 mb-2">or enter manually</p>
               <div className="input-group">
                 <input type="text" className="form-control" placeholder="Scan or Enter ID" />
                 <div className="input-group-btn">
                   <button className="btn btn-primary"><Search size={14} /></button>
                 </div>
               </div>
             </div>
           </div>
        </div>
        
        <div className="col-md-8">
           <div className="box box-info">
             <div className="box-header">
               <h3 className="box-title">Recent Scans</h3>
             </div>
             <div className="box-body">
               <div className="alert alert-info">No recent scans today.</div>
             </div>
           </div>
        </div>
      </div>
    </>
  );
}
