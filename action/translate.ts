'use server'

import { State } from "@/components/TranslationLanguages";
import { auth } from "@clerk/nextjs/server";

async function translate(prevState: State,formData: FormData) {
    auth().protect();
    const{userId} = auth();
    if(!userId) throw new Error("User not logged in");

    const rawFormData = {
        input: formData.get("input") as string,
        inputLanguage: formData.get("inputLanguage") as string,
        output: formData.get("output") as string,
        outputLanguage: formData.get("outputLanguage") as string,
    }
}

export default translate;