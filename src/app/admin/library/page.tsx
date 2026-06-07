"use client";

import { Metadata } from "next";
import { DataTable } from "@/components/shared/DataTable";
import { Plus } from "lucide-react";

export default function LibraryPage() {
  const columns = [
    { key: "bookTitle", label: "Book Title" },
    { key: "bookNo", label: "Book No" },
    { key: "isbnNo", label: "ISBN No" },
    { key: "publisher", label: "Publisher" },
    { key: "author", label: "Author" },
    { key: "subject", label: "Subject" },
    { key: "rackNo", label: "Rack No" },
    { key: "qty", label: "Qty" },
    { key: "available", label: "Available" },
    { key: "price", label: "Book Price" },
  ];

  return (
    <>
      <div className="content-header">
        <h1>Book List</h1>
      </div>

      <div className="mt-4">
        <div className="box box-info">
          <div className="box-header">
            <h3 className="box-title">Book List</h3>
            <div className="box-tools pull-right">
              <button className="btn btn-primary btn-sm">
                <Plus size={12} /> Add Book
              </button>
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
