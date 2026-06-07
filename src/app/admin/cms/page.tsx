"use client";

import { DataTable } from "@/components/shared/DataTable";
import { Plus } from "lucide-react";

export default function CMSPage() {
  const columns = [
    { key: "title", label: "Title" },
    { key: "category", label: "Category" },
    { key: "date", label: "Date" },
    { key: "status", label: "Status" },
  ];

  const data = [
    { title: "Annual Science Fair 2026", category: "Events", date: "2026-06-15", status: "Published" },
    { title: "Summer Admission Notice", category: "News", date: "2026-06-05", status: "Published" },
  ];

  return (
    <>
      <div className="content-header">
        <h1>Front CMS Content</h1>
      </div>

      <div className="mt-4">
        <div className="box box-primary">
          <div className="box-header">
            <h3 className="box-title">Create CMS Page</h3>
          </div>
          <div className="box-body">
            <div className="row">
               <div className="col-md-6">
                 <div className="form-group">
                   <label>Title *</label>
                   <input type="text" className="form-control" placeholder="Title" />
                 </div>
               </div>
               <div className="col-md-6">
                 <div className="form-group">
                   <label>Category *</label>
                   <select className="form-control">
                     <option value="">Select</option>
                     <option value="events">Events</option>
                     <option value="news">News</option>
                     <option value="gallery">Gallery</option>
                   </select>
                 </div>
               </div>
               <div className="col-md-12 mt-3">
                 <div className="form-group">
                   <label>Description</label>
                   <textarea className="form-control" rows={3} placeholder="Description"></textarea>
                 </div>
               </div>
               <div className="col-md-12 mt-4">
                 <button className="btn btn-primary btn-sm pull-right">
                   <Plus size={12} className="inline mr-1" /> Save Content
                 </button>
               </div>
            </div>
          </div>
        </div>

        <div className="box box-info mt-4">
          <div className="box-header">
            <h3 className="box-title">CMS Pages List</h3>
          </div>
          <div className="box-body">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
