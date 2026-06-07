"use client";

import { Save } from "lucide-react";

export default function SettingsPage() {
  return (
    <>
      <div className="content-header">
        <h1>General Settings</h1>
      </div>

      <div className="mt-4">
        <div className="box box-primary">
          <div className="box-header">
            <h3 className="box-title">Edit School Details</h3>
          </div>
          <div className="box-body">
            <div className="row">
               <div className="col-md-6 mb-3">
                 <div className="form-group">
                   <label>School Name *</label>
                   <input type="text" className="form-control" defaultValue="Smart School SMS" />
                 </div>
               </div>
               <div className="col-md-6 mb-3">
                 <div className="form-group">
                   <label>School Code</label>
                   <input type="text" className="form-control" defaultValue="SS-1092" />
                 </div>
               </div>
               <div className="col-md-12 mb-3">
                 <div className="form-group">
                   <label>Address *</label>
                   <input type="text" className="form-control" defaultValue="Hargeisa HQ, Republic of Somaliland" />
                 </div>
               </div>
               <div className="col-md-4 mb-3">
                 <div className="form-group">
                   <label>Phone *</label>
                   <input type="text" className="form-control" defaultValue="+252634455667" />
                 </div>
               </div>
               <div className="col-md-4 mb-3">
                 <div className="form-group">
                   <label>Email *</label>
                   <input type="email" className="form-control" defaultValue="admin@smartschool.sl" />
                 </div>
               </div>
               <div className="col-md-4 mb-3">
                 <div className="form-group">
                   <label>Session *</label>
                   <select className="form-control">
                     <option value="2026">2026-27</option>
                     <option value="2025">2025-26</option>
                   </select>
                 </div>
               </div>
               <div className="col-md-4 mt-3">
                 <div className="form-group">
                   <label>Currency</label>
                   <input type="text" className="form-control" defaultValue="USD ($)" readOnly />
                 </div>
               </div>
               <div className="col-md-4 mt-3">
                 <div className="form-group">
                   <label>Time Zone</label>
                   <input type="text" className="form-control" defaultValue="East Africa Time (GMT+3)" readOnly />
                 </div>
               </div>
               <div className="col-md-12 mt-4">
                 <button className="btn btn-primary btn-sm pull-right">
                   <Save size={12} className="inline mr-1" /> Save Settings
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
