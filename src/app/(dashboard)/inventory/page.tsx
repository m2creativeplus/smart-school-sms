"use client";

import { Metadata } from "next";
import { DataTable } from "@/components/shared/DataTable";
import { Plus } from "lucide-react";

export default function InventoryPage() {
  const columns = [
    { key: "name", label: "Name" },
    { key: "category", label: "Category" },
    { key: "supplier", label: "Supplier" },
    { key: "store", label: "Store" },
    { key: "quantity", label: "Quantity" },
    { key: "date", label: "Date" },
  ];

  return (
    <>
      <div className="content-header">
        <h1>Item Stock List</h1>
      </div>

      <div className="mt-4">
        <div className="box box-info">
          <div className="box-header">
            <h3 className="box-title">Item Stock List</h3>
            <div className="box-tools pull-right">
              <button className="btn btn-primary btn-sm">
                <Plus size={12} /> Add Item Stock
              </button>
            </div>
          </div>
          <div className="box-body">
            <DataTable columns={columns} data={[]} onSearch={(term) => console.log('Search:', term)} />
          </div>
        </div>
      </div>
    </>
  );
}
