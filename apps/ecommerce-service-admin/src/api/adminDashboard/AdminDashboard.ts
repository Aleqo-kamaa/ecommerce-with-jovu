export type AdminDashboard = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  activity: string | null;
  adminName: string | null;
  email: string | null;
  salesReports: string | null;
  productAnalytics: string | null;
};
