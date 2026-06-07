import { Metadata } from "next";
import { DataTable } from "@/components/shared/DataTable";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Communicate | Smart School SMS",
};

export default function CommunicatePage() {
  const columns = [
    { key: "title", label: "Title" },
    { key: "date", label: "Date" },
    { key: "action", label: "Action" }
  ];

  return (
    <>
      <div className="content-header">
        <h1>Notice Board</h1>
      </div>

      <div className="mt-4 row">
        <div className="col-md-8">
           <div className="box box-info">
             <div className="box-header">
               <h3 className="box-title">Notice Board</h3>
             </div>
             <div className="box-body">
               <DataTable columns={columns} data={[]} />
             </div>
           </div>
        </div>
        <div className="col-md-4">
           <div className="box box-primary">
             <div className="box-header">
               <h3 className="box-title">Message</h3>
             </div>
             <div className="box-body">
               {/* Quick message form would go here */}
               <div className="form-group">
                 <input type="text" className="form-control" placeholder="Title" />
               </div>
               <div className="form-group">
                 <textarea className="form-control" rows={4} placeholder="Message..."></textarea>
               </div>
               <button className="btn btn-primary btn-block">Send</button>
             </div>
           </div>
        </div>
      </div>
    </>
  );
}
