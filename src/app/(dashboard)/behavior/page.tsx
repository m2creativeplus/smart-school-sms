import { Metadata } from "next";
import { DataTable } from "@/components/shared/DataTable";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Behaviour Records | Smart School SMS",
};

export default function BehaviourPage() {
  const columns = [
    { key: "studentName", label: "Student Name" },
    { key: "admissionNo", label: "Admission No" },
    { key: "class", label: "Class" },
    { key: "title", label: "Title" },
    { key: "point", label: "Point" },
    { key: "date", label: "Date" },
    { key: "description", label: "Description" },
    { key: "assignedBy", label: "Assigned By" },
  ];

  return (
    <>
      <div className="content-header">
        <h1>Behaviour Records</h1>
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
                   <label>Class</label>
                   <select className="form-control">
                     <option value="">Select</option>
                   </select>
                 </div>
               </div>
               <div className="col-md-4">
                 <div className="form-group">
                   <label>Section</label>
                   <select className="form-control">
                     <option value="">Select</option>
                   </select>
                 </div>
               </div>
               <div className="col-md-4">
                 <div className="form-group">
                   <label>Student</label>
                   <select className="form-control">
                     <option value="">Select</option>
                   </select>
                 </div>
               </div>
               <div className="col-md-12 mt-2">
                 <button className="btn btn-primary btn-sm pull-right">Search</button>
               </div>
            </div>
          </div>
        </div>

        <div className="box box-info mt-4">
          <div className="box-header">
            <h3 className="box-title">Student Behaviour List</h3>
          </div>
          <div className="box-body">
            <DataTable columns={columns} data={[]} />
          </div>
        </div>
      </div>
    </>
  );
}
