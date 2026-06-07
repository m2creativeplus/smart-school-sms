import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const login = mutation({
  args: { email: v.string(), password: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (!user || user.password !== args.password) {
      return { success: false, message: "Invalid credentials" };
    }

    return { success: true, user: { id: user._id, name: user.name, role: user.role } };
  },
});

export const seedUsers = mutation({
  handler: async (ctx) => {
    const existing = await ctx.db.query("users").first();
    if (existing) return "Already seeded";
    
    await ctx.db.insert("users", { email: "superadmin@gmail.com", password: "password", role: "Super Admin", name: "Super Admin User" });
    await ctx.db.insert("users", { email: "william@gmail.com", password: "password", role: "Admin", name: "William Admin" });
    await ctx.db.insert("users", { email: "jason@gmail.com", password: "password", role: "Teacher", name: "Jason Teacher" });
    await ctx.db.insert("users", { email: "james.deckar@gmail.com", password: "password", role: "Accountant", name: "James Deckar" });
    await ctx.db.insert("users", { email: "maria.ford@gmail.com", password: "password", role: "Receptionist", name: "Maria Ford" });
    await ctx.db.insert("users", { email: "brandon@gmail.com", password: "password", role: "Librarian", name: "Brandon Librarian" });
    
    return "Seeded successfully!";
  }
});
