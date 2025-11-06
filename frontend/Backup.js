import React from "react";
import "./Backup.css";

function Backup() {
  return (
    <div className="backup-container">
      <h2 className="backup-title">Backup & Restore</h2>
      <p className="backup-subtitle">
        Manage your inventory data with backup and restore functionality.
      </p>

      <div className="backup-sections">
        {/* Export Section */}
        <div className="backup-card">
          <h3>Export Data</h3>
          <p>
            Create a backup of all your inventory data in JSON or Excel format.
          </p>
          <div className="backup-buttons">
            <button className="json-btn">Export as JSON</button>
            <button className="excel-btn">Export as Excel</button>
          </div>
        </div>

        {/* Import Section */}
        <div className="backup-card">
          <h3>Import Data</h3>
          <p>
            Restore your inventory data from a previously exported backup file.
          </p>
          <div className="import-section">
            <input type="file" id="file-upload" />
            <p className="file-note">
              Supported formats: JSON, Excel (.xlsx)
            </p>
          </div>
        </div>
      </div>

      {/* Important Notes Section */}
      <div className="important-notes">
        <h4>⚠ Important Notes</h4>
        <ul>
          <li>Backup files contain sensitive data. Store them securely.</li>
          <li>Restoring data will add records to your existing database.</li>
          <li>Duplicate records may be created if the same data already exists.</li>
          <li>Always test backup in a development environment first.</li>
          <li>Regular backups are recommended for data protection.</li>
        </ul>
      </div>
    </div>
  );
}

export default Backup;