"use client";

import { DataTable } from "@/components/shared/DataTable";
import { Plus } from "lucide-react";

export default function CertificatesPage() {
  const columns = [
    { key: "title", label: "Certificate Name" },
    { key: "type", label: "Type" },
    { key: "sidebarText", label: "Footer Left Text" },
    { key: "background", label: "Background Image" },
  ];

  const data = [
    { title: "Standard Transfer Certificate", type: "Student", sidebarText: "Principal Signature", background: "tc_bg.png" },
    { title: "Academic Merit Certificate", type: "Student", sidebarText: "Director Signature", background: "merit_bg.png" },
  ];

  return (
    <>
      <div className="content-header">
        <h1>Student Certificate</h1>
      </div>

      <div className="mt-4">
        <div className="box box-primary">
          <div className="box-header">
            <h3 className="box-title">Add Student Certificate</h3>
          </div>
          <div className="box-body">
            <div className="row">
               <div className="col-md-6">
                 <div className="form-group">
                   <label>Certificate Name *</label>
                   <input type="text" className="form-control" placeholder="Certificate Name" />
                 </div>
               </div>
               <div className="col-md-6">
                 <div className="form-group">
                   <label>Type *</label>
                   <select className="form-control">
                     <option value="student">Student</option>
                     <option value="staff">Staff</option>
                   </select>
                 </div>
               </div>
               <div className="col-md-12 mt-3">
                 <div className="form-group">
                   <label>Footer Left Text</label>
                   <input type="text" className="form-control" placeholder="Footer Left Text" />
                 </div>
               </div>
               <div className="col-md-12 mt-4">
                 <button className="btn btn-primary btn-sm pull-right">
                   <Plus size={12} className="inline mr-1" /> Save Certificate
                 </button>
               </div>
            </div>
          </div>
        </div>

        <div className="box box-info mt-4">
          <div className="box-header">
            <h3 className="box-title">Certificate List</h3>
          </div>
          <div className="box-body">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
