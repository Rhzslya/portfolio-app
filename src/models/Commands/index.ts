import mongoose, { Schema, Document } from "mongoose";

export interface ICommand extends Document {
  command: string;
  output: string;
  hidden: boolean;
}

const CommandSchema = new Schema<ICommand>({
  command: { type: String, required: true, unique: true },
  output: { type: String, required: true },
  hidden: { type: Boolean, default: false },
});

export default mongoose.models.Command ||
  mongoose.model<ICommand>("Command", CommandSchema);
