import TranslationForm from "@/components/TranslationLanguages";
import TranslationHistory from "@/components/TranslationHistory";
import { auth } from "@clerk/nextjs/server"

export type TranslationLanguages = {
    translation: {
        [key: string]: {
            name: string;
            nativeName: string;
            dir: "rtl" | "ltr";
        };
    };
};

const TranslatePage = async () => {
    auth().protect();
    const { userId } = auth();
    if (!userId) throw new Error("User not logged in");

    const languageEndpoints = "https://api.cognitive.microsofttranslator.com/languages?api-version=3.0";

    const response = await fetch(languageEndpoints, {
        next: {
            revalidate: 60 * 60 * 24 // 24 hours
        }
    })

    const languages = (await response.json()) as TranslationLanguages;

    return (
        <div className="px-10 xl:px-0 mb-20">
            <TranslationForm languages={languages} />
            <TranslationHistory />
        </div>
    )
}

export default TranslatePage