import { Metadata } from "next";
import { DataTable } from "@/components/shared/DataTable";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Student Details | Smart School SMS",
};

export default function StudentInformationPage() {
  const columns = [
    { key: "admissionNo", label: "Admission No" },
    { key: "studentName", label: "Student Name" },
    { key: "class", label: "Class" },
    { key: "fatherName", label: "Father Name" },
    { key: "dob", label: "Date Of Birth" },
    { key: "gender", label: "Gender" },
    { key: "category", label: "Category" },
    { key: "phone", label: "Mobile Number" },
  ];

  return (
    <>
      <div className="content-header">
        <h1>Student Information</h1>
      </div>

      <div className="mt-4">
        <div className="box box-primary">
          <div className="box-header">
            <h3 className="box-title"><Search size={16} /> Select Criteria</h3>
          </div>
          <div className="box-body">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Class *</label>
                      <select className="form-control">
                        <option value="">Select</option>
                        <option value="1">Class 1</option>
                        <option value="2">Class 2</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Section</label>
                      <select className="form-control">
                        <option value="">Select</option>
                        <option value="a">A</option>
                        <option value="b">B</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <button className="btn btn-primary btn-sm pull-right">
                        <Search size={12} /> Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 border-l border-gray-200">
                <div className="form-group">
                  <label>Search By Keyword</label>
                  <input type="text" className="form-control" placeholder="Search By Student Name, Roll Number, Enroll Number..." />
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
            <h3 className="box-title">Student List</h3>
          </div>
          <div className="box-body">
            <DataTable columns={columns} data={[]} />
          </div>
        </div>
      </div>
    </>
  );
}
