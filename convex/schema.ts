import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

/**
 * Smart School SMS — Complete Database Schema
 * Agent 1 (Architect) | 2026-06-07
 * 30+ tables covering all 32 modules
 */
export default defineSchema({

  // ============================================
  // SYSTEM & AUTH
  // ============================================
  sessions: defineTable({
    name: v.string(),           // "2026-27"
    startDate: v.string(),
    endDate: v.string(),
    isActive: v.boolean(),
  }),

  roles: defineTable({
    name: v.string(),           // super_admin, admin, teacher, student, parent, accountant, receptionist, librarian
    displayName: v.string(),
    permissions: v.array(v.string()),
    isSystem: v.boolean(),
  }),

  users: defineTable({
    email: v.string(),
    passwordHash: v.string(),
    roleId: v.id("roles"),
    staffId: v.optional(v.id("staff")),
    studentId: v.optional(v.id("students")),
    parentId: v.optional(v.id("parents")),
    isActive: v.boolean(),
    lastLogin: v.optional(v.number()),
  }).index("by_email", ["email"]),

  schoolSettings: defineTable({
    schoolName: v.string(),
    address: v.string(),
    city: v.string(),
    state: v.string(),
    country: v.string(),
    phone: v.string(),
    email: v.string(),
    website: v.optional(v.string()),
    logoUrl: v.optional(v.string()),
    currency: v.string(),         // "USD ($)"
    currencySymbol: v.string(),   // "$"
    language: v.string(),
    timezone: v.string(),
    academicYear: v.string(),
    sessionId: v.id("sessions"),
    feesDueDays: v.number(),
    studentPhotoRequired: v.boolean(),
    attendanceType: v.string(),   // "daily", "subject-wise"
    biometricEnabled: v.boolean(),
    whatsappNumber: v.optional(v.string()),
  }),

  // ============================================
  // FRONT OFFICE
  // ============================================
  enquiries: defineTable({
    name: v.string(),
    phone: v.string(),
    email: v.optional(v.string()),
    address: v.optional(v.string()),
    classId: v.optional(v.id("classes")),
    numberOfChild: v.optional(v.number()),
    reference: v.optional(v.string()),
    source: v.optional(v.string()),
    enquiryDate: v.string(),
    followUpDate: v.optional(v.string()),
    status: v.string(),          // active, won, passive, lost, dead
    note: v.optional(v.string()),
    description: v.optional(v.string()),
    assignedTo: v.optional(v.id("users")),
  }).index("by_status", ["status"]),

  visitors: defineTable({
    purpose: v.string(),
    meetingWith: v.string(),
    name: v.string(),
    phone: v.string(),
    idProof: v.optional(v.string()),
    numberOfPersons: v.number(),
    date: v.string(),
    inTime: v.string(),
    outTime: v.optional(v.string()),
    note: v.optional(v.string()),
  }).index("by_date", ["date"]),

  phoneCalls: defineTable({
    name: v.string(),
    phone: v.string(),
    date: v.string(),
    description: v.optional(v.string()),
    nextFollowUpDate: v.optional(v.string()),
    callDuration: v.optional(v.string()),
    note: v.optional(v.string()),
    callType: v.string(),          // incoming, outgoing
  }),

  postalDispatch: defineTable({
    title: v.string(),
    referenceNo: v.optional(v.string()),
    toTitle: v.optional(v.string()),
    fromTitle: v.optional(v.string()),
    date: v.string(),
    address: v.optional(v.string()),
    note: v.optional(v.string()),
    attachmentUrl: v.optional(v.string()),
  }),

  postalReceive: defineTable({
    title: v.string(),
    referenceNo: v.optional(v.string()),
    toTitle: v.optional(v.string()),
    fromTitle: v.optional(v.string()),
    date: v.string(),
    address: v.optional(v.string()),
    note: v.optional(v.string()),
    attachmentUrl: v.optional(v.string()),
  }),

  complaints: defineTable({
    complaintType: v.string(),
    source: v.optional(v.string()),
    complaintBy: v.string(),
    phone: v.string(),
    date: v.string(),
    description: v.optional(v.string()),
    actionTaken: v.optional(v.string()),
    assignedTo: v.optional(v.id("users")),
    note: v.optional(v.string()),
  }),

  // ============================================
  // ACADEMIC STRUCTURE
  // ============================================
  classes: defineTable({
    name: v.string(),            // "Class 1", "Class 2"
    numericName: v.optional(v.number()),
    teacherId: v.optional(v.id("staff")),
    sessionId: v.id("sessions"),
    isActive: v.boolean(),
  }).index("by_session", ["sessionId"]),

  sections: defineTable({
    name: v.string(),            // "A", "B", "C"
    classId: v.id("classes"),
    classTeacherId: v.optional(v.id("staff")),
    capacity: v.optional(v.number()),
    isActive: v.boolean(),
  }).index("by_class", ["classId"]),

  subjects: defineTable({
    name: v.string(),
    code: v.optional(v.string()),
    subjectType: v.string(),     // theory, practical
    isActive: v.boolean(),
  }),

  subjectGroups: defineTable({
    name: v.string(),
    classId: v.id("classes"),
    sectionId: v.id("sections"),
    sessionId: v.id("sessions"),
    subjects: v.array(v.object({
      subjectId: v.id("subjects"),
      teacherId: v.optional(v.id("staff")),
      fullMark: v.optional(v.number()),
      passMark: v.optional(v.number()),
    })),
  }).index("by_class_section", ["classId", "sectionId"]),

  timetable: defineTable({
    classId: v.id("classes"),
    sectionId: v.id("sections"),
    subjectId: v.id("subjects"),
    teacherId: v.id("staff"),
    day: v.string(),             // Monday, Tuesday...
    startTime: v.string(),
    endTime: v.string(),
    sessionId: v.id("sessions"),
  }).index("by_class_section", ["classId", "sectionId"]),

  // ============================================
  // STUDENTS
  // ============================================
  categories: defineTable({
    name: v.string(),            // General, SC, ST, OBC
    description: v.optional(v.string()),
    isActive: v.boolean(),
  }),

  houses: defineTable({
    name: v.string(),            // Red House, Blue House
    description: v.optional(v.string()),
    isActive: v.boolean(),
  }),

  parents: defineTable({
    fatherName: v.optional(v.string()),
    motherName: v.optional(v.string()),
    guardianName: v.optional(v.string()),
    guardianRelation: v.optional(v.string()),
    fatherPhone: v.optional(v.string()),
    motherPhone: v.optional(v.string()),
    guardianPhone: v.optional(v.string()),
    fatherEmail: v.optional(v.string()),
    motherEmail: v.optional(v.string()),
    guardianEmail: v.optional(v.string()),
    fatherPhotoUrl: v.optional(v.string()),
    motherPhotoUrl: v.optional(v.string()),
    guardianPhotoUrl: v.optional(v.string()),
    fatherOccupation: v.optional(v.string()),
    motherOccupation: v.optional(v.string()),
    annualIncome: v.optional(v.number()),
    isActive: v.boolean(),
  }),

  students: defineTable({
    admissionNo: v.string(),
    rollNo: v.optional(v.string()),
    firstName: v.string(),
    lastName: v.string(),
    classId: v.id("classes"),
    sectionId: v.id("sections"),
    sessionId: v.id("sessions"),
    gender: v.string(),          // male, female, other
    dateOfBirth: v.string(),
    categoryId: v.optional(v.id("categories")),
    houseId: v.optional(v.id("houses")),
    religion: v.optional(v.string()),
    bloodGroup: v.optional(v.string()),
    nationality: v.optional(v.string()),
    admissionDate: v.string(),
    photoUrl: v.optional(v.string()),
    parentId: v.id("parents"),
    address: v.optional(v.string()),
    city: v.optional(v.string()),
    state: v.optional(v.string()),
    pinCode: v.optional(v.string()),
    phone: v.optional(v.string()),
    email: v.optional(v.string()),
    previousSchool: v.optional(v.string()),
    previousClass: v.optional(v.string()),
    nationalId: v.optional(v.string()),
    localId: v.optional(v.string()),
    rteAdmission: v.optional(v.boolean()),
    medicalHistory: v.optional(v.string()),
    note: v.optional(v.string()),
    isActive: v.boolean(),
    isAlumni: v.boolean(),
  })
    .index("by_class_section", ["classId", "sectionId"])
    .index("by_admission_no", ["admissionNo"])
    .index("by_session", ["sessionId"]),

  studentDocuments: defineTable({
    studentId: v.id("students"),
    title: v.string(),
    documentUrl: v.string(),
    uploadedAt: v.number(),
  }).index("by_student", ["studentId"]),

  // ============================================
  // FEES
  // ============================================
  feeGroups: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    isActive: v.boolean(),
  }),

  feeTypes: defineTable({
    name: v.string(),
    code: v.optional(v.string()),
    description: v.optional(v.string()),
    isActive: v.boolean(),
  }),

  feeMasters: defineTable({
    classId: v.id("classes"),
    sectionId: v.optional(v.id("sections")),
    feeGroupId: v.id("feeGroups"),
    feeTypeId: v.id("feeTypes"),
    amount: v.number(),
    dueDate: v.optional(v.string()),
    sessionId: v.id("sessions"),
    isActive: v.boolean(),
  }).index("by_class", ["classId"]),

  feeDiscounts: defineTable({
    name: v.string(),
    code: v.optional(v.string()),
    discountType: v.string(),    // percentage, fixed
    discountAmount: v.number(),
    description: v.optional(v.string()),
    isActive: v.boolean(),
  }),

  studentFees: defineTable({
    studentId: v.id("students"),
    feeMasterId: v.id("feeMasters"),
    amount: v.number(),
    discountId: v.optional(v.id("feeDiscounts")),
    discountAmount: v.number(),
    paidAmount: v.number(),
    dueAmount: v.number(),
    status: v.string(),          // paid, partial, unpaid
    sessionId: v.id("sessions"),
    dueDate: v.optional(v.string()),
  })
    .index("by_student", ["studentId"])
    .index("by_status", ["status"]),

  feePayments: defineTable({
    studentId: v.id("students"),
    studentFeeId: v.id("studentFees"),
    amount: v.number(),
    paymentDate: v.string(),
    paymentMode: v.string(),     // cash, cheque, online, bank
    transactionId: v.optional(v.string()),
    chequeNo: v.optional(v.string()),
    bankName: v.optional(v.string()),
    note: v.optional(v.string()),
    collectedBy: v.id("users"),
    receiptNo: v.string(),
  })
    .index("by_student", ["studentId"])
    .index("by_date", ["paymentDate"]),

  // ============================================
  // ATTENDANCE
  // ============================================
  studentAttendance: defineTable({
    studentId: v.id("students"),
    classId: v.id("classes"),
    sectionId: v.id("sections"),
    date: v.string(),
    status: v.string(),          // present, absent, late, half_day, holiday
    note: v.optional(v.string()),
    sessionId: v.id("sessions"),
  })
    .index("by_date", ["date"])
    .index("by_student", ["studentId"])
    .index("by_class_date", ["classId", "date"]),

  studentLeaves: defineTable({
    studentId: v.id("students"),
    fromDate: v.string(),
    toDate: v.string(),
    reason: v.string(),
    leaveType: v.optional(v.string()),
    status: v.string(),          // pending, approved, rejected
    approvedBy: v.optional(v.id("users")),
    note: v.optional(v.string()),
    applyDate: v.string(),
  }).index("by_student", ["studentId"]),

  // ============================================
  // EXAMINATIONS
  // ============================================
  examGroups: defineTable({
    name: v.string(),
    examType: v.string(),        // written, mcq, practical
    description: v.optional(v.string()),
    sessionId: v.id("sessions"),
    isActive: v.boolean(),
  }),

  examSchedules: defineTable({
    examGroupId: v.id("examGroups"),
    classId: v.id("classes"),
    sectionId: v.id("sections"),
    subjectId: v.id("subjects"),
    date: v.string(),
    startTime: v.string(),
    endTime: v.string(),
    roomNo: v.optional(v.string()),
    fullMark: v.number(),
    passMark: v.number(),
    sessionId: v.id("sessions"),
  }).index("by_exam_group", ["examGroupId"]),

  examResults: defineTable({
    studentId: v.id("students"),
    examScheduleId: v.id("examSchedules"),
    marksObtained: v.optional(v.number()),
    grade: v.optional(v.string()),
    remarks: v.optional(v.string()),
    isAbsent: v.boolean(),
    sessionId: v.id("sessions"),
  })
    .index("by_student", ["studentId"])
    .index("by_schedule", ["examScheduleId"]),

  grades: defineTable({
    name: v.string(),            // A+, A, B, C
    minPercentage: v.number(),
    maxPercentage: v.number(),
    gradePoint: v.optional(v.number()),
    description: v.optional(v.string()),
    isActive: v.boolean(),
  }),

  // ============================================
  // ANNUAL CALENDAR
  // ============================================
  holidayTypes: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    isActive: v.boolean(),
  }),

  holidays: defineTable({
    name: v.string(),
    holidayTypeId: v.id("holidayTypes"),
    fromDate: v.string(),
    toDate: v.string(),
    description: v.optional(v.string()),
    sessionId: v.id("sessions"),
  }).index("by_session", ["sessionId"]),

  // ============================================
  // LESSON PLAN
  // ============================================
  lessons: defineTable({
    name: v.string(),
    classId: v.id("classes"),
    sectionId: v.id("sections"),
    subjectId: v.id("subjects"),
    sessionId: v.id("sessions"),
  }).index("by_class_subject", ["classId", "subjectId"]),

  topics: defineTable({
    name: v.string(),
    lessonId: v.id("lessons"),
    description: v.optional(v.string()),
    date: v.optional(v.string()),
    status: v.string(),          // pending, complete
  }).index("by_lesson", ["lessonId"]),

  // ============================================
  // STAFF / HR
  // ============================================
  departments: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    isActive: v.boolean(),
  }),

  designations: defineTable({
    name: v.string(),
    departmentId: v.id("departments"),
    description: v.optional(v.string()),
    isActive: v.boolean(),
  }).index("by_department", ["departmentId"]),

  staff: defineTable({
    staffId: v.string(),         // staff ID number
    firstName: v.string(),
    lastName: v.string(),
    role: v.string(),            // admin, teacher, accountant, librarian, receptionist
    departmentId: v.optional(v.id("departments")),
    designationId: v.optional(v.id("designations")),
    gender: v.string(),
    dateOfBirth: v.optional(v.string()),
    dateOfJoining: v.string(),
    phone: v.string(),
    email: v.string(),
    address: v.optional(v.string()),
    city: v.optional(v.string()),
    state: v.optional(v.string()),
    qualification: v.optional(v.string()),
    experience: v.optional(v.string()),
    basicSalary: v.optional(v.number()),
    epfNo: v.optional(v.string()),
    contractType: v.string(),    // permanent, contract
    workShift: v.optional(v.string()),
    photoUrl: v.optional(v.string()),
    bloodGroup: v.optional(v.string()),
    religion: v.optional(v.string()),
    maritalStatus: v.optional(v.string()),
    nationality: v.optional(v.string()),
    fatherName: v.optional(v.string()),
    motherName: v.optional(v.string()),
    accountTitle: v.optional(v.string()),
    bankAccountNo: v.optional(v.string()),
    bankName: v.optional(v.string()),
    ifscCode: v.optional(v.string()),
    socialSecurityNo: v.optional(v.string()),
    nationalId: v.optional(v.string()),
    localId: v.optional(v.string()),
    isActive: v.boolean(),
  })
    .index("by_email", ["email"])
    .index("by_role", ["role"]),

  staffAttendance: defineTable({
    staffId: v.id("staff"),
    date: v.string(),
    status: v.string(),          // present, absent, late, half_day, holiday
    note: v.optional(v.string()),
  })
    .index("by_date", ["date"])
    .index("by_staff", ["staffId"]),

  leaveTypes: defineTable({
    name: v.string(),
    daysAllowed: v.number(),
    description: v.optional(v.string()),
    isActive: v.boolean(),
  }),

  staffLeaves: defineTable({
    staffId: v.id("staff"),
    leaveTypeId: v.id("leaveTypes"),
    applyDate: v.string(),
    fromDate: v.string(),
    toDate: v.string(),
    reason: v.string(),
    status: v.string(),          // pending, approved, rejected
    approvedBy: v.optional(v.id("users")),
    note: v.optional(v.string()),
  }).index("by_staff", ["staffId"]),

  payroll: defineTable({
    staffId: v.id("staff"),
    paymentMonth: v.string(),    // "2026-06"
    basicSalary: v.number(),
    allowances: v.array(v.object({ name: v.string(), amount: v.number() })),
    deductions: v.array(v.object({ name: v.string(), amount: v.number() })),
    grossSalary: v.number(),
    netSalary: v.number(),
    paymentDate: v.optional(v.string()),
    paymentMode: v.optional(v.string()),
    status: v.string(),          // pending, paid
    note: v.optional(v.string()),
  }).index("by_staff", ["staffId"]),

  // ============================================
  // COMMUNICATE
  // ============================================
  notices: defineTable({
    title: v.string(),
    description: v.string(),
    date: v.string(),
    publishDate: v.string(),
    attachmentUrl: v.optional(v.string()),
    isPublic: v.boolean(),
    createdBy: v.id("users"),
    targetRoles: v.array(v.string()),
  }).index("by_date", ["date"]),

  emailLogs: defineTable({
    title: v.string(),
    message: v.string(),
    sentTo: v.string(),
    sentDate: v.string(),
    status: v.string(),
    type: v.string(),            // email, sms
    createdBy: v.id("users"),
  }).index("by_date", ["sentDate"]),

  emailTemplates: defineTable({
    name: v.string(),
    subject: v.optional(v.string()),
    message: v.string(),
    type: v.string(),            // email, sms
    isActive: v.boolean(),
  }),

  // ============================================
  // LIBRARY
  // ============================================
  bookCategories: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    isActive: v.boolean(),
  }),

  books: defineTable({
    title: v.string(),
    bookNumber: v.string(),
    isbn: v.optional(v.string()),
    publisher: v.optional(v.string()),
    author: v.optional(v.string()),
    categoryId: v.optional(v.id("bookCategories")),
    language: v.optional(v.string()),
    price: v.optional(v.number()),
    quantity: v.number(),
    rackNo: v.optional(v.string()),
    description: v.optional(v.string()),
    isActive: v.boolean(),
  }).index("by_book_number", ["bookNumber"]),

  bookIssues: defineTable({
    bookId: v.id("books"),
    memberId: v.string(),        // student or staff ID
    memberType: v.string(),      // student, staff
    issueDate: v.string(),
    dueDate: v.string(),
    returnDate: v.optional(v.string()),
    fine: v.optional(v.number()),
    note: v.optional(v.string()),
    status: v.string(),          // issued, returned, overdue
  })
    .index("by_member", ["memberId"])
    .index("by_status", ["status"]),

  // ============================================
  // INVENTORY
  // ============================================
  itemCategories: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    isActive: v.boolean(),
  }),

  itemStores: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    isActive: v.boolean(),
  }),

  items: defineTable({
    name: v.string(),
    itemCategoryId: v.id("itemCategories"),
    storeId: v.id("itemStores"),
    description: v.optional(v.string()),
    unit: v.optional(v.string()),
    isActive: v.boolean(),
  }).index("by_category", ["itemCategoryId"]),

  itemStocks: defineTable({
    itemId: v.id("items"),
    quantity: v.number(),
    purchaseDate: v.string(),
    purchasePrice: v.optional(v.number()),
    supplierName: v.optional(v.string()),
    description: v.optional(v.string()),
  }).index("by_item", ["itemId"]),

  itemIssues: defineTable({
    itemId: v.id("items"),
    issueTo: v.string(),
    issueToType: v.string(),     // student, staff
    issueDate: v.string(),
    quantity: v.number(),
    returnDate: v.optional(v.string()),
    note: v.optional(v.string()),
    status: v.string(),          // issued, returned
  }).index("by_item", ["itemId"]),

  // ============================================
  // HOMEWORK
  // ============================================
  homework: defineTable({
    classId: v.id("classes"),
    sectionId: v.id("sections"),
    subjectId: v.id("subjects"),
    homeworkDate: v.string(),
    submissionDate: v.string(),
    description: v.string(),
    attachmentUrl: v.optional(v.string()),
    createdBy: v.id("users"),
    marks: v.optional(v.number()),
    sessionId: v.id("sessions"),
  }).index("by_class_section", ["classId", "sectionId"]),

  // ============================================
  // TRANSPORT
  // ============================================
  routes: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    isActive: v.boolean(),
  }),

  vehicles: defineTable({
    vehicleNumber: v.string(),
    vehicleModel: v.optional(v.string()),
    year: v.optional(v.string()),
    driverName: v.optional(v.string()),
    driverPhone: v.optional(v.string()),
    licenseNumber: v.optional(v.string()),
    note: v.optional(v.string()),
    routeId: v.optional(v.id("routes")),
    isActive: v.boolean(),
  }),

  pickupPoints: defineTable({
    name: v.string(),
    routeId: v.id("routes"),
    address: v.optional(v.string()),
    pickupTime: v.optional(v.string()),
    dropTime: v.optional(v.string()),
    isActive: v.boolean(),
  }).index("by_route", ["routeId"]),

  transportFees: defineTable({
    routeId: v.id("routes"),
    pickupPointId: v.optional(v.id("pickupPoints")),
    feeAmount: v.number(),
    sessionId: v.id("sessions"),
    isActive: v.boolean(),
  }),

  studentTransport: defineTable({
    studentId: v.id("students"),
    routeId: v.id("routes"),
    vehicleId: v.optional(v.id("vehicles")),
    pickupPointId: v.optional(v.id("pickupPoints")),
    sessionId: v.id("sessions"),
    isActive: v.boolean(),
  }).index("by_student", ["studentId"]),

  // ============================================
  // HOSTEL
  // ============================================
  hostels: defineTable({
    name: v.string(),
    type: v.string(),            // boys, girls, mixed
    address: v.optional(v.string()),
    intakeCapacity: v.optional(v.number()),
    description: v.optional(v.string()),
    isActive: v.boolean(),
  }),

  roomTypes: defineTable({
    name: v.string(),
    capacity: v.number(),
    description: v.optional(v.string()),
    isActive: v.boolean(),
  }),

  hostelRooms: defineTable({
    hostelId: v.id("hostels"),
    roomTypeId: v.id("roomTypes"),
    roomNo: v.string(),
    capacity: v.number(),
    costPerMonth: v.optional(v.number()),
    description: v.optional(v.string()),
    isActive: v.boolean(),
  }).index("by_hostel", ["hostelId"]),

  studentHostel: defineTable({
    studentId: v.id("students"),
    hostelId: v.id("hostels"),
    roomId: v.id("hostelRooms"),
    sessionId: v.id("sessions"),
    fromDate: v.string(),
    toDate: v.optional(v.string()),
    isActive: v.boolean(),
  }).index("by_student", ["studentId"]),

  // ============================================
  // INCOME & EXPENSES
  // ============================================
  incomeHeads: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    isActive: v.boolean(),
  }),

  incomes: defineTable({
    incomeHeadId: v.id("incomeHeads"),
    name: v.string(),
    amount: v.number(),
    date: v.string(),
    note: v.optional(v.string()),
    attachmentUrl: v.optional(v.string()),
    createdBy: v.id("users"),
  }).index("by_date", ["date"]),

  expenseHeads: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    isActive: v.boolean(),
  }),

  expenses: defineTable({
    expenseHeadId: v.id("expenseHeads"),
    name: v.string(),
    amount: v.number(),
    date: v.string(),
    note: v.optional(v.string()),
    attachmentUrl: v.optional(v.string()),
    createdBy: v.id("users"),
  }).index("by_date", ["date"]),

  // ============================================
  // BEHAVIOUR RECORDS
  // ============================================
  incidents: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    point: v.number(),           // positive/negative
    isActive: v.boolean(),
  }),

  studentBehaviours: defineTable({
    studentId: v.id("students"),
    incidentId: v.id("incidents"),
    date: v.string(),
    note: v.optional(v.string()),
    sessionId: v.id("sessions"),
  }).index("by_student", ["studentId"]),

  // ============================================
  // ONLINE COURSES
  // ============================================
  courseCategories: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    isActive: v.boolean(),
  }),

  onlineCourses: defineTable({
    name: v.string(),
    categoryId: v.id("courseCategories"),
    image: v.optional(v.string()),
    fees: v.optional(v.number()),
    startDate: v.optional(v.string()),
    endDate: v.optional(v.string()),
    description: v.optional(v.string()),
    instructorId: v.optional(v.id("staff")),
    status: v.string(),
    isActive: v.boolean(),
  }),

  // ============================================
  // ONLINE EXAMS
  // ============================================
  questionBanks: defineTable({
    subjectId: v.id("subjects"),
    question: v.string(),
    optionA: v.string(),
    optionB: v.string(),
    optionC: v.optional(v.string()),
    optionD: v.optional(v.string()),
    answer: v.string(),
    marks: v.number(),
    difficulty: v.optional(v.string()),
    createdBy: v.id("users"),
  }).index("by_subject", ["subjectId"]),

  onlineExams: defineTable({
    title: v.string(),
    subjectId: v.id("subjects"),
    classId: v.id("classes"),
    sectionId: v.optional(v.id("sections")),
    startDate: v.string(),
    endDate: v.string(),
    startTime: v.string(),
    endTime: v.string(),
    duration: v.number(),        // minutes
    totalMarks: v.number(),
    passMark: v.number(),
    instructions: v.optional(v.string()),
    sessionId: v.id("sessions"),
    isActive: v.boolean(),
  }),

  // ============================================
  // FRONT CMS
  // ============================================
  events: defineTable({
    title: v.string(),
    fromDate: v.string(),
    toDate: v.string(),
    description: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    isPublic: v.boolean(),
  }),

  galleries: defineTable({
    title: v.string(),
    imageUrl: v.string(),
    description: v.optional(v.string()),
    date: v.string(),
    isPublic: v.boolean(),
  }),

  newsArticles: defineTable({
    title: v.string(),
    slug: v.string(),
    content: v.string(),
    excerpt: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    publishDate: v.string(),
    isPublic: v.boolean(),
    author: v.optional(v.string()),
  }).index("by_slug", ["slug"]),

  // ============================================
  // ALUMNI
  // ============================================
  alumni: defineTable({
    name: v.string(),
    email: v.optional(v.string()),
    phone: v.optional(v.string()),
    admissionNo: v.optional(v.string()),
    passingYear: v.optional(v.string()),
    profession: v.optional(v.string()),
    company: v.optional(v.string()),
    description: v.optional(v.string()),
    photoUrl: v.optional(v.string()),
    isActive: v.boolean(),
  }),

  alumniEvents: defineTable({
    title: v.string(),
    fromDate: v.string(),
    toDate: v.string(),
    description: v.optional(v.string()),
    venue: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
  }),

  // ============================================
  // DOWNLOAD CENTER
  // ============================================
  downloads: defineTable({
    title: v.string(),
    availableFor: v.string(),    // all, student, teacher, parent
    fileUrl: v.string(),
    date: v.string(),
    isActive: v.boolean(),
    createdBy: v.id("users"),
  }),

  // ============================================
  // CHAT
  // ============================================
  chats: defineTable({
    fromUserId: v.id("users"),
    toUserId: v.id("users"),
    message: v.string(),
    sentAt: v.number(),
    isRead: v.boolean(),
  })
    .index("by_from", ["fromUserId"])
    .index("by_to", ["toUserId"]),

});
