import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getFeesByStudent = query({
  args: { studentId: v.id("students") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("fee_collections")
      .filter((q) => q.eq(q.field("studentId"), args.studentId))
      .collect();
  },
});

export const getStaff = query({
  args: { roleId: v.optional(v.id("roles")), searchTerm: v.optional(v.string()) },
  handler: async (ctx, args) => {
    let staffQuery = ctx.db.query("staff");
    
    if (args.roleId) {
      staffQuery = staffQuery.filter(q => q.eq(q.field("roleId"), args.roleId));
    }
    
    const staff = await staffQuery.collect();
    
    if (args.searchTerm) {
      const term = args.searchTerm.toLowerCase();
      return staff.filter(s => 
        (s.firstName && s.firstName.toLowerCase().includes(term)) ||
        (s.lastName && s.lastName.toLowerCase().includes(term)) ||
        (s.employeeId && s.employeeId.toLowerCase().includes(term))
      );
    }
    
    return staff;
  },
});
