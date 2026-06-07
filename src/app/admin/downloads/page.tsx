"use client";

import { DataTable } from "@/components/shared/DataTable";
import { Upload } from "lucide-react";

export default function DownloadsPage() {
  const columns = [
    { key: "title", label: "Content Title" },
    { key: "type", label: "Type" },
    { key: "date", label: "Upload Date" },
    { key: "description", label: "Description" },
  ];

  const data = [
    { title: "Syllabus June 2026", type: "Syllabus", date: "2026-06-01", description: "Class 10 Syllabus Overview" },
    { title: "Physics Lecture Note 1", type: "Other Downloads", date: "2026-06-03", description: "Mechanics Fundamentals" },
  ];

  return (
    <>
      <div className="content-header">
        <h1>Upload Content List</h1>
      </div>

      <div className="mt-4">
        <div className="box box-primary">
          <div className="box-header">
            <h3 className="box-title">Upload Content</h3>
          </div>
          <div className="box-body">
            <div className="row">
               <div className="col-md-6">
                 <div className="form-group">
                   <label>Content Title *</label>
                   <input type="text" className="form-control" placeholder="Title" />
                 </div>
               </div>
               <div className="col-md-6">
                 <div className="form-group">
                   <label>Content Type *</label>
                   <select className="form-control">
                     <option value="">Select</option>
                     <option value="assignment">Assignments</option>
                     <option value="syllabus">Syllabus</option>
                     <option value="other">Other Downloads</option>
                   </select>
                 </div>
               </div>
               <div className="col-md-6 mt-3">
                 <div className="form-group">
                   <label>Available For *</label>
                   <div className="flex gap-4 mt-2">
                     <label className="flex items-center gap-1">
                       <input type="checkbox" /> All Classes
                     </label>
                     <label className="flex items-center gap-1">
                       <input type="checkbox" /> Super Admin
                     </label>
                   </div>
                 </div>
               </div>
               <div className="col-md-6 mt-3">
                 <div className="form-group">
                   <label>File Upload *</label>
                   <input type="file" className="form-control" />
                 </div>
               </div>
               <div className="col-md-12 mt-4">
                 <button className="btn btn-primary btn-sm pull-right">
                   <Upload size={12} className="inline mr-1" /> Upload File
                 </button>
               </div>
            </div>
          </div>
        </div>

        <div className="box box-info mt-4">
          <div className="box-header">
            <h3 className="box-title">Content List</h3>
          </div>
          <div className="box-body">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
