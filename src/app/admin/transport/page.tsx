"use client";

import { DataTable } from "@/components/shared/DataTable";
import { Plus } from "lucide-react";

export default function TransportPage() {
  const columns = [
    { key: "routeName", label: "Route Name" },
    { key: "vehicleNo", label: "Vehicle Number" },
    { key: "driverName", label: "Driver Name" },
    { key: "driverPhone", label: "Driver Phone" },
  ];

  const data = [
    { routeName: "Main Hargeisa Route", vehicleNo: "SL-990-TR", driverName: "Ahmed Ali", driverPhone: "+252634455667" },
    { routeName: "West Airport Route", vehicleNo: "SL-431-TR", driverName: "Ismail Omar", driverPhone: "+252634488990" },
  ];

  return (
    <>
      <div className="content-header">
        <h1>Transport Routes</h1>
      </div>

      <div className="mt-4">
        <div className="box box-primary">
          <div className="box-header">
            <h3 className="box-title">Add Route</h3>
          </div>
          <div className="box-body">
            <div className="row">
               <div className="col-md-6">
                 <div className="form-group">
                   <label>Route Title *</label>
                   <input type="text" className="form-control" placeholder="Route Title" />
                 </div>
               </div>
               <div className="col-md-6">
                 <div className="form-group">
                   <label>Vehicle *</label>
                   <select className="form-control">
                     <option value="">Select</option>
                     <option value="v1">SL-990-TR</option>
                     <option value="v2">SL-431-TR</option>
                   </select>
                 </div>
               </div>
               <div className="col-md-12 mt-4">
                 <button className="btn btn-primary btn-sm pull-right">
                   <Plus size={12} className="inline mr-1" /> Save Route
                 </button>
               </div>
            </div>
          </div>
        </div>

        <div className="box box-info mt-4">
          <div className="box-header">
            <h3 className="box-title">Route List</h3>
          </div>
          <div className="box-body">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
