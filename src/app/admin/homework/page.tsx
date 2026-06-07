"use client";

import { DataTable } from "@/components/shared/DataTable";
import { Plus } from "lucide-react";

export default function HomeworkPage() {
  const columns = [
    { key: "class", label: "Class" },
    { key: "section", label: "Section" },
    { key: "subject", label: "Subject" },
    { key: "homeworkDate", label: "Homework Date" },
    { key: "submissionDate", label: "Submission Date" },
    { key: "status", label: "Status" },
  ];

  const data = [
    { class: "Class 1", section: "A", subject: "Mathematics", homeworkDate: "2026-06-01", submissionDate: "2026-06-05", status: "Active" },
    { class: "Class 2", section: "B", subject: "English", homeworkDate: "2026-06-02", submissionDate: "2026-06-06", status: "Active" },
  ];

  return (
    <>
      <div className="content-header">
        <h1>Homework List</h1>
      </div>

      <div className="mt-4">
        <div className="box box-primary">
          <div className="box-header">
            <h3 className="box-title">Select Criteria</h3>
            <div className="box-tools pull-right">
              <button className="btn btn-primary btn-sm">
                <Plus size={12} className="inline mr-1" /> Add Homework
              </button>
            </div>
          </div>
          <div className="box-body">
            <div className="row">
               <div className="col-md-6">
                 <div className="form-group">
                   <label>Class *</label>
                   <select className="form-control">
                     <option value="">Select</option>
                     <option value="1">Class 1</option>
                     <option value="2">Class 2</option>
                   </select>
                 </div>
               </div>
               <div className="col-md-6">
                 <div className="form-group">
                   <label>Section *</label>
                   <select className="form-control">
                     <option value="">Select</option>
                     <option value="a">A</option>
                     <option value="b">B</option>
                   </select>
                 </div>
               </div>
               <div className="col-md-12 mt-3">
                 <button className="btn btn-primary btn-sm pull-right">Search</button>
               </div>
            </div>
          </div>
        </div>

        <div className="box box-info mt-4">
          <div className="box-header">
            <h3 className="box-title">Homework Result</h3>
          </div>
          <div className="box-body">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
