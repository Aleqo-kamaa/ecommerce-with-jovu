import { AdminDashboard as TAdminDashboard } from "../api/adminDashboard/AdminDashboard";

export const ADMINDASHBOARD_TITLE_FIELD = "adminName";

export const AdminDashboardTitle = (record: TAdminDashboard): string => {
  return record.adminName?.toString() || String(record.id);
};
