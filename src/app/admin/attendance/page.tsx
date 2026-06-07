import { Metadata } from "next";
import { DataTable } from "@/components/shared/DataTable";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Student Attendance | Smart School SMS",
};

export default function AttendancePage() {
  const columns = [
    { key: "admissionNo", label: "Admission No" },
    { key: "rollNumber", label: "Roll Number" },
    { key: "name", label: "Name" },
    { key: "attendance", label: "Attendance" },
    { key: "note", label: "Note" },
  ];

  return (
    <>
      <div className="content-header">
        <h1>Student Attendance</h1>
      </div>

      <div className="mt-4">
        <div className="box box-primary">
          <div className="box-header">
            <h3 className="box-title"><Search size={16} /> Select Criteria</h3>
          </div>
          <div className="box-body">
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Class *</label>
                  <select className="form-control">
                    <option value="">Select</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Section *</label>
                  <select className="form-control">
                    <option value="">Select</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Attendance Date *</label>
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="col-md-12">
                <button className="btn btn-primary btn-sm pull-right">
                  <Search size={12} /> Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="box box-info mt-4">
          <div className="box-header">
            <h3 className="box-title">Student List</h3>
          </div>
          <div className="box-body">
            <div className="alert alert-info">Please select criteria to view student list.</div>
            <DataTable columns={columns} data={[]} />
          </div>
        </div>
      </div>
    </>
  );
}
