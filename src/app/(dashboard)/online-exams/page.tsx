"use client";

import { Metadata } from "next";
import { DataTable } from "@/components/shared/DataTable";
import { Plus } from "lucide-react";

export default function OnlineExamsPage() {
  const columns = [
    { key: "exam", label: "Exam" },
    { key: "attempt", label: "Attempt" },
    { key: "examFrom", label: "Exam From" },
    { key: "examTo", label: "Exam To" },
    { key: "duration", label: "Duration" },
    { key: "publishResult", label: "Publish Result" },
  ];

  return (
    <>
      <div className="content-header">
        <h1>Online Exam List</h1>
      </div>

      <div className="mt-4">
        <div className="box box-info">
          <div className="box-header">
            <h3 className="box-title">Online Exam List</h3>
            <div className="box-tools pull-right">
              <button className="btn btn-primary btn-sm">
                <Plus size={12} /> Add Online Exam
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
