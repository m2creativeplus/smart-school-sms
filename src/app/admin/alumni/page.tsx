import { Metadata } from "next";
import { DataTable } from "@/components/shared/DataTable";

export const metadata: Metadata = {
  title: "Alumni | Smart School SMS",
};

export default function AlumniPage() {
  const columns = [
    { key: "admissionNo", label: "Admission No" },
    { key: "studentName", label: "Student Name" },
    { key: "class", label: "Class" },
    { key: "gender", label: "Gender" },
    { key: "currentEmail", label: "Current Email" },
    { key: "currentPhone", label: "Current Phone" },
    { key: "occupation", label: "Occupation" },
  ];

  return (
    <>
      <div className="content-header">
        <h1>Alumni List</h1>
      </div>

      <div className="mt-4">
        <div className="box box-primary">
          <div className="box-header">
            <h3 className="box-title">Select Criteria</h3>
          </div>
          <div className="box-body">
            <div className="row">
               <div className="col-md-6">
                 <div className="form-group">
                   <label>Pass Out Session *</label>
                   <select className="form-control">
                     <option value="">Select</option>
                   </select>
                 </div>
               </div>
               <div className="col-md-6">
                 <div className="form-group">
                   <label>Class *</label>
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
            <h3 className="box-title">Alumni List</h3>
          </div>
          <div className="box-body">
            <DataTable columns={columns} data={[]} />
          </div>
        </div>
      </div>
    </>
  );
}
