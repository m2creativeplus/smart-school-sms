"use client";

export function DataTable({ 
  columns, 
  data, 
  onSearch 
}: { 
  columns: { key: string; label: string }[]; 
  data: any[];
  onSearch?: (term: string) => void;
}) {
  return (
    <div className="table-responsive">
      {onSearch && (
        <div className="mb-4 flex justify-between items-center">
          <div className="relative w-64">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search..."
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>
      )}
      <table className="table table-striped table-bordered table-hover ss-table dataTable no-footer">
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col.key}>{col.label}</th>
            ))}
            <th className="text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + 1} className="text-center text-danger py-4">
                <i className="fa fa-info-circle mr-1"></i> No data available in table
              </td>
            </tr>
          ) : (
            data.map((row, idx) => (
              <tr key={idx}>
                {columns.map(col => (
                  <td key={col.key}>{row[col.key]}</td>
                ))}
                <td className="text-right">
                  <button className="btn btn-default btn-xs mr-1" title="Show"><i className="fa fa-reorder"></i></button>
                  <button className="btn btn-default btn-xs mr-1" title="Edit"><i className="fa fa-pencil"></i></button>
                  <button className="btn btn-default btn-xs" title="Delete"><i className="fa fa-remove"></i></button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
