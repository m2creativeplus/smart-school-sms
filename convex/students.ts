import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getStudents = query({
  args: { 
    classId: v.optional(v.id("classes")),
    sectionId: v.optional(v.id("sections")),
    searchTerm: v.optional(v.string())
  },
  handler: async (ctx, args) => {
    let studentQuery = ctx.db.query("students");
    
    // Simple filter for class if provided
    if (args.classId) {
      studentQuery = studentQuery.filter(q => q.eq(q.field("classId"), args.classId));
    }
    
    const students = await studentQuery.collect();
    
    // In-memory search for demo purposes
    if (args.searchTerm) {
      const term = args.searchTerm.toLowerCase();
      return students.filter(s => 
        (s.firstName && s.firstName.toLowerCase().includes(term)) ||
        (s.lastName && s.lastName.toLowerCase().includes(term)) ||
        (s.admissionNo && s.admissionNo.toLowerCase().includes(term))
      );
    }
    
    return students;
  },
});
