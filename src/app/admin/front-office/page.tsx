import { Metadata } from "next";
import { DataTable } from "@/components/shared/DataTable";
import { Plus } from "lucide-react";

export const metadata: Metadata = {
  title: "Admission Enquiry | Smart School SMS",
};

export default function FrontOfficePage() {
  const columns = [
    { key: "name", label: "Name" },
    { key: "phone", label: "Phone" },
    { key: "source", label: "Source" },
    { key: "enquiryDate", label: "Enquiry Date" },
    { key: "lastFollowUp", label: "Last Follow Up Date" },
    { key: "nextFollowUp", label: "Next Follow Up Date" },
    { key: "status", label: "Status" },
  ];

  return (
    <>
      <div className="content-header">
        <h1>Admission Enquiry</h1>
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
               <div className="col-md-3">
                 <div className="form-group">
                   <label>Enquiry Date</label>
                   <input type="date" className="form-control" />
                 </div>
               </div>
               <div className="col-md-3">
                 <div className="form-group">
                   <label>Source</label>
                   <select className="form-control">
                     <option value="">Select</option>
                     <option value="Advertisement">Advertisement</option>
                     <option value="Front Office">Front Office</option>
                     <option value="Google">Google</option>
                   </select>
                 </div>
               </div>
               <div className="col-md-3">
                 <div className="form-group">
                   <label>Status</label>
                   <select className="form-control">
                     <option value="">Select</option>
                     <option value="Active">Active</option>
                     <option value="Passive">Passive</option>
                     <option value="Dead">Dead</option>
                     <option value="Won">Won</option>
                   </select>
                 </div>
               </div>
               <div className="col-md-3 mt-4 pt-2">
                 <button className="btn btn-primary btn-sm btn-block">Search</button>
               </div>
             </div>
          </div>
        </div>

        <div className="box box-info mt-4">
          <div className="box-header">
            <h3 className="box-title">Admission Enquiry List</h3>
          </div>
          <div className="box-body">
            <DataTable columns={columns} data={[]} />
          </div>
        </div>
      </div>
    </>
  );
}
