import mongoose, { Schema, Document } from "mongoose";
import connectDb from "../db";

export interface ITranslation extends Document {
  timestamp: Date;
  fromText: string;
  from: string;
  toText: string;
  to: string;
}

interface IUser extends Document {
  userId: string;
  translations: Array<ITranslation>;
}

const translationSchema = new Schema<ITranslation>({
  timestamp: { type: Date, default: Date.now },
  fromText: String,
  from: String,
  toText: String,
  to: String,
});

const userSchema = new Schema<IUser>({
  userId: String,
  translations: [translationSchema],
});

//   Checking for existing schema
const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export async function addOrUpdateUser(
  userId: string,
  translation: {
    fromText: string;
    from: string;
    toText: string;
    to: string;
  }
): Promise<IUser> {
  const filter = { userId: userId };
  const update = {
    $set: { userId: userId },
    $push: { translations: translation },
  };
  await connectDb();

  const options = { upsert: true, new: true, setDefaultsOnInsert: true };

  try {
    const user: IUser | null = await User.findOneAndUpdate(
      filter,
      update,
      options
    );
    if (!user) {
      throw new Error("User not found and was not created.");
    }

    return user;
  } catch (err) {
    console.error("Error adding or updating user:", err);
    throw err;
  }
}

export async function getTranslations(
  userId: string
): Promise<Array<ITranslation>> {
  await connectDb();

  try {
    const user: IUser | null = await User.findOne({ userId: userId });
    if (user) {
      user.translations.sort(
        (a: ITranslation, b: ITranslation) =>
          b.timestamp.getTime() - a.timestamp.getTime()
      );
      return user.translations;
    } else {
      console.log(`No user found with id ${userId}.`);
      return [];
    }
  } catch (err) {
    console.error("Error adding or updating user:", err);
    throw err;
  }
}

export async function removeTrasnslation(
  userId: string,
  translationId: string
): Promise<IUser> {
  await connectDb();

  try {
    const user: IUser | null = await User.findOneAndUpdate(
      { userId: userId },
      { $pull: { translations: { _id: translationId } } },
      { new: true }
    );
    if (!user) {
      throw new Error("User not found and was not created.");
    }

    return user;
  } catch (err) {
    console.error("Error removing translation:", err);
    throw err;
  }
}
