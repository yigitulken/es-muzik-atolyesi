import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  jsonb,
  pgEnum,
  serial,
  decimal,
} from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

export const instrumentTypeEnum = pgEnum("instrument_type", [
  "piyano",
  "yayli",
  "gitar",
  "diger",
])

export const submissionStatusEnum = pgEnum("submission_status", [
  "new",
  "reviewed",
  "contacted",
  "completed",
])

export const submissions = pgTable("submissions", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  email: varchar("email", { length: 255 }),
  instrumentType: instrumentTypeEnum("instrument_type").notNull(),
  description: text("description").notNull(),
  photos: jsonb("photos").$type<string[]>().notNull().default([]),
  source: varchar("source", { length: 50 }).notNull().default("photo_upload"),
  status: submissionStatusEnum("status").notNull().default("new"),
  priority: varchar("priority", { length: 20 }).notNull().default("normal"),
  estimatedCost: decimal("estimated_cost", { precision: 10, scale: 2 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  completedAt: timestamp("completed_at"),
})

export const notes = pgTable("notes", {
  id: serial("id").primaryKey(),
  submissionId: uuid("submission_id")
    .notNull()
    .references(() => submissions.id, { onDelete: "cascade" }),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})

export const submissionsRelations = relations(submissions, ({ many }) => ({
  notes: many(notes),
}))

export const notesRelations = relations(notes, ({ one }) => ({
  submission: one(submissions, {
    fields: [notes.submissionId],
    references: [submissions.id],
  }),
}))
