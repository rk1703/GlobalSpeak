"use server";

import { removeTrasnslation } from "@/mongodb/models/User";
import { auth } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";

async function DeleteTranslation(id: string) {
  auth().protect();
  const { userId } = auth();

  const user = await removeTrasnslation(userId!, id);

  revalidateTag("translationHistory");

  return {
    translations: JSON.stringify(user.translations),
  };
}

export default DeleteTranslation;
