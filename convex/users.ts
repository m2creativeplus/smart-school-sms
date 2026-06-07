import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getUser = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("staff")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first();
  },
});

export const getStudent = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("students")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first();
  },
});
