import { Metadata } from "next";
import { DataTable } from "@/components/shared/DataTable";
import { Plus } from "lucide-react";

export const metadata: Metadata = {
  title: "Manage Lesson Plan | Smart School SMS",
};

export default function LessonPlanPage() {
  const columns = [
    { key: "teachers", label: "Teachers" },
    { key: "lesson", label: "Lesson" },
    { key: "topic", label: "Topic" },
    { key: "date", label: "Date" },
    { key: "timeFrom", label: "Time From" },
    { key: "timeTo", label: "Time To" },
  ];

  return (
    <>
      <div className="content-header">
        <h1>Manage Lesson Plan</h1>
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
                   <label>Subject Group *</label>
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
            <h3 className="box-title">Lesson Plan</h3>
          </div>
          <div className="box-body">
            <DataTable columns={columns} data={[]} />
          </div>
        </div>
      </div>
    </>
  );
}
