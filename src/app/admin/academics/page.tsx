import { Metadata } from "next";
import { DataTable } from "@/components/shared/DataTable";
import { Plus } from "lucide-react";

export const metadata: Metadata = {
  title: "Class Timetable | Smart School SMS",
};

export default function ClassTimetablePage() {
  const columns = [
    { key: "monday", label: "Monday" },
    { key: "tuesday", label: "Tuesday" },
    { key: "wednesday", label: "Wednesday" },
    { key: "thursday", label: "Thursday" },
    { key: "friday", label: "Friday" },
    { key: "saturday", label: "Saturday" },
    { key: "sunday", label: "Sunday" },
  ];

  return (
    <>
      <div className="content-header">
        <h1>Class Timetable</h1>
      </div>

      <div className="mt-4">
        <div className="box box-primary">
          <div className="box-header">
            <h3 className="box-title">Select Criteria</h3>
            <div className="box-tools pull-right">
              <button className="btn btn-primary btn-sm">
                <Plus size={12} /> Add
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
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Section *</label>
                  <select className="form-control">
                    <option value="">Select</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <button className="btn btn-primary btn-sm pull-right">
                   Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="box box-info mt-4">
          <div className="box-header">
            <h3 className="box-title">Class Timetable</h3>
          </div>
          <div className="box-body">
            <DataTable columns={columns} data={[]} />
          </div>
        </div>
      </div>
    </>
  );
}
