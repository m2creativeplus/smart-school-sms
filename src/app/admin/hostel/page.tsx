"use client";

import { DataTable } from "@/components/shared/DataTable";
import { Plus } from "lucide-react";

export default function HostelPage() {
  const columns = [
    { key: "hostelName", label: "Hostel Name" },
    { key: "type", label: "Type" },
    { key: "address", label: "Address" },
    { key: "intake", label: "Intake Capacity" },
  ];

  const data = [
    { hostelName: "Boys Premium Wing", type: "Boys", address: "Hargeisa HQ, Somaliland", intake: "150" },
    { hostelName: "Girls Premium Wing", type: "Girls", address: "Hargeisa West, Somaliland", intake: "120" },
  ];

  return (
    <>
      <div className="content-header">
        <h1>Hostel List</h1>
      </div>

      <div className="mt-4">
        <div className="box box-primary">
          <div className="box-header">
            <h3 className="box-title">Add Hostel</h3>
          </div>
          <div className="box-body">
            <div className="row">
               <div className="col-md-4">
                 <div className="form-group">
                   <label>Hostel Name *</label>
                   <input type="text" className="form-control" placeholder="Hostel Name" />
                 </div>
               </div>
               <div className="col-md-4">
                 <div className="form-group">
                   <label>Type *</label>
                   <select className="form-control">
                     <option value="">Select</option>
                     <option value="boys">Boys</option>
                     <option value="girls">Girls</option>
                   </select>
                 </div>
               </div>
               <div className="col-md-4">
                 <div className="form-group">
                   <label>Intake Capacity *</label>
                   <input type="number" className="form-control" placeholder="Capacity" />
                 </div>
               </div>
               <div className="col-md-12 mt-3">
                 <div className="form-group">
                   <label>Address</label>
                   <textarea className="form-control" placeholder="Address"></textarea>
                 </div>
               </div>
               <div className="col-md-12 mt-4">
                 <button className="btn btn-primary btn-sm pull-right">
                   <Plus size={12} className="inline mr-1" /> Save Hostel
                 </button>
               </div>
            </div>
          </div>
        </div>

        <div className="box box-info mt-4">
          <div className="box-header">
            <h3 className="box-title">Hostel Details</h3>
          </div>
          <div className="box-body">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
