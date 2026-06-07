"use client";

import { DataTable } from "@/components/shared/DataTable";
import { Plus } from "lucide-react";

export default function ExpensesPage() {
  const columns = [
    { key: "name", label: "Name" },
    { key: "invoiceNo", label: "Invoice No" },
    { key: "date", label: "Date" },
    { key: "expenseHead", label: "Expense Head" },
    { key: "amount", label: "Amount ($)" },
  ];

  const data = [
    { name: "Electricity Bill June", invoiceNo: "EXP-109", date: "2026-06-02", expenseHead: "Electricity Bill", amount: "1200.00" },
    { name: "Whiteboard Markers", invoiceNo: "EXP-110", date: "2026-06-04", expenseHead: "Stationery", amount: "200.00" },
  ];

  return (
    <>
      <div className="content-header">
        <h1>Expense List</h1>
      </div>

      <div className="mt-4">
        <div className="box box-primary">
          <div className="box-header">
            <h3 className="box-title">Add Expense</h3>
          </div>
          <div className="box-body">
            <div className="row">
               <div className="col-md-4">
                 <div className="form-group">
                   <label>Expense Head *</label>
                   <select className="form-control">
                     <option value="">Select</option>
                     <option value="utility">Utility Bills</option>
                     <option value="stationery">Stationery</option>
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
                   <Plus size={12} className="inline mr-1" /> Save Expense
                 </button>
               </div>
            </div>
          </div>
        </div>

        <div className="box box-info mt-4">
          <div className="box-header">
            <h3 className="box-title">Expense Result</h3>
          </div>
          <div className="box-body">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  );
}
