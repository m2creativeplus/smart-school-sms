import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getDashboardStats = query({
  args: {},
  handler: async (ctx) => {
    // Collect stats from various tables
    const students = await ctx.db.query("students").collect();
    const staff = await ctx.db.query("staff").collect();
    const fees = await ctx.db.query("fee_collections").collect();
    
    // Calculate simple metrics
    const totalStudents = students.length;
    const totalStaff = staff.length;
    
    // In a real system, you would sum the actual amounts.
    // For demo purposes, we're returning some placeholder metrics 
    // structured identically to the demo system.
    return {
      totalStudents,
      totalStaff,
      monthlyFeesCollection: 7300.00, 
      monthlyExpenses: 2400.00,
      feesAwaitingPayment: { count: 2, total: 119 },
      convertedLeads: { count: 1, total: 6 },
      staffPresentToday: { count: 0, total: totalStaff },
      studentsPresentToday: { count: 0, total: totalStudents }
    };
  },
});
