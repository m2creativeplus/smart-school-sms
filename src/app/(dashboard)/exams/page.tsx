import { Metadata } from "next";
import { DataTable } from "@/components/shared/DataTable";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Exam List | Smart School SMS",
};

export default function ExamsPage() {
  const columns = [
    { key: "name", label: "Name" },
    { key: "session", label: "Session" },
    { key: "publish", label: "Publish" },
    { key: "publishResult", label: "Publish Result" },
    { key: "description", label: "Description" },
  ];

  return (
    <>
      <div className="content-header">
        <h1>Exam List</h1>
      </div>

      <div className="mt-4">
        <div className="box box-info">
          <div className="box-header">
            <h3 className="box-title">Exam List</h3>
            <div className="box-tools pull-right">
              {/* Add Exam button goes here */}
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
