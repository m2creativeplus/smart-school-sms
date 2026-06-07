"use client";

import { DataTable } from "@/components/shared/DataTable";
import { Plus } from "lucide-react";

export default function IncomePage() {
  const columns = [
    { key: "name", label: "Name" },
    { key: "invoiceNo", label: "Invoice No" },
    { key: "date", label: "Date" },
    { key: "incomeHead", label: "Income Head" },
    { key: "amount", label: "Amount ($)" },
  ];

  const data = [
    { name: "Special Donors", invoiceNo: "INV-9002", date: "2026-06-01", incomeHead: "Donations", amount: "5000.00" },
    { name: "Old Furniture Sale", invoiceNo: "INV-9003", date: "2026-06-03", incomeHead: "Misc Income", amount: "2300.00" },
  ];

  return (
    <>
      <div className="content-header">
        <h1>Income List</h1>
      </div>

      <div className="mt-4">
        <div className="box box-primary">
          <div className="box-header">
            <h3 className="box-title">Add Income</h3>
          </div>
          <div className="box-body">
            <div className="row">
               <div className="col-md-4">
                 <div className="form-group">
                   <label>Income Head *</label>
                   <select className="form-control">
                     <option value="">Select</option>
                     <option value="donations">Donations</option>
                     <option value="misc">Misc Income</option>
                   </select>
                 </div>
               </div>
               <div className="col-md-4">
                 <div className="form-group">
                   <label>Name *</label>
                   <input type="text" className="form-control" placeholder="Name" />
                 </div>
               </div>
               <div className="col-md-4">
                 <div className="form-group">
                   <label>Invoice Number</label>
                   <input type="text" className="form-control" placeholder="Invoice Number" />
                 </div>
               </div>
               <div className="col-md-6 mt-3">
                 <div className="form-group">
                   <label>Date *</label>
                   <input type="date" className="form-control" />
                 </div>
               </div>
               <div className="col-md-6 mt-3">
                 <div className="form-group">
                   <label>Amount ($) *</label>
                   <input type="number" className="form-control" placeholder="Amount" />
                 </div>
               </div>
               <div className="col-md-12 mt-4">
                 <button className="btn btn-primary btn-sm pull-right">
                   <Plus size={12} className="inline mr-1" /> Save Income
                 </button>
               </div>
            </div>
          </div>
        </div>

        <div className="box box-info mt-4">
          <div className="box-header">
            <h3 className="box-title">Income Result</h3>
          </div>
          <div className="box-body">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
