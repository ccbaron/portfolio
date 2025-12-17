import mongoose, { Schema, type InferSchemaType } from "mongoose";

// Single source of truth for the contact document structure.
// Mongoose enforces these constraints at the ODM level before hitting the DB.
const ContactSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 200,
    },
    subject: {
      type: String,
      required: true,
      enum: ["freelance", "job", "collaboration", "other"],
    },
    phone: { type: String, trim: true, maxlength: 30 },
    message: { type: String, required: true, maxlength: 2000 },
  },
  {
    // Automatically adds createdAt and updatedAt fields
    timestamps: true,
  },
);

export type ContactData = InferSchemaType<typeof ContactSchema>;

// Guard against "Cannot overwrite model" error in hot-reload / warm serverless starts
export const ContactModel =
  (mongoose.models.Contact as mongoose.Model<ContactData>) ||
  mongoose.model<ContactData>("Contact", ContactSchema);
