import { Metadata } from "next";
import { DataTable } from "@/components/shared/DataTable";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Staff Directory | Smart School SMS",
};

export default function StaffDirectoryPage() {
  const columns = [
    { key: "staffId", label: "Staff ID" },
    { key: "name", label: "Name" },
    { key: "role", label: "Role" },
    { key: "department", label: "Department" },
    { key: "designation", label: "Designation" },
    { key: "mobileNumber", label: "Mobile Number" },
  ];

  return (
    <>
      <div className="content-header">
        <h1>Staff Directory</h1>
      </div>

      <div className="mt-4">
        <div className="box box-primary">
          <div className="box-header">
            <h3 className="box-title"><Search size={16} /> Select Criteria</h3>
          </div>
          <div className="box-body">
            <div className="row">
              <div className="col-md-6 border-r border-gray-200">
                <div className="form-group">
                  <label>Role</label>
                  <select className="form-control">
                    <option value="">Select</option>
                    <option value="Admin">Admin</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Accountant">Accountant</option>
                    <option value="Librarian">Librarian</option>
                    <option value="Receptionist">Receptionist</option>
                    <option value="Super Admin">Super Admin</option>
                  </select>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-sm pull-right">
                    <Search size={12} /> Search
                  </button>
                </div>
              </div>
              <div className="col-md-6 pl-4">
                <div className="form-group">
                  <label>Search By Keyword</label>
                  <input type="text" className="form-control" placeholder="Search By Staff ID, Name, Role etc..." />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-sm pull-right">
                    <Search size={12} /> Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="box box-info mt-4">
          <div className="box-header">
            <h3 className="box-title">Staff List</h3>
            <div className="box-tools pull-right">
               {/* View toggle buttons would go here */}
            </div>
          </div>
          <div className="box-body">
            <DataTable columns={columns} data={[]} />
          </div>
        </div>
      </div>
    </>
  );
}
