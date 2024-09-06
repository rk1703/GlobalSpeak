import { ITranslation } from "@/mongodb/models/User";
import { auth } from "@clerk/nextjs/server";
import { TimeAgoText } from "./TimeAgoText";
import DeleteTranslationButton from "./DeleteTranslationButton";

const getlanguage = (code: string) => {
    const lang = new Intl.DisplayNames(["en"], { type: "language" });
    return lang.of(code);
}

export default async function TraslationHistory() {
    const { userId } = auth();

    const response = await fetch(`https://globalspeak.rkworld.me/translationHistory?userId=${userId}`, {
        next: {
            tags: ["translationHistory"],
        }
    });

    const { translations }: { translations: Array<ITranslation> } = await response.json();

    return (
        <div>
            <h1 className="text-3xl my-5">History</h1>
            {translations.length === 0 && <p className="mb-5 text-gray-400">No translations found.</p>}

            <ul className="divide-y border rounded-md">
                {translations.map(translation => (
                    <li key={translation._id} className="flex justify-between items-center p-5 hover:bg-gray-50 relative">
                        <div>
                            <p className="text-sm mb-5 text-gray-500">{getlanguage(translation.from)}
                                {"->"}
                                {getlanguage(translation.to)}
                            </p>
                            <div className="space-y-2 pr-5">
                                <p>{translation.fromText}</p>
                                <p className="text-gray-400">{translation.toText}</p>
                            </div>
                        </div>

                        {/* Time ago */}
                        <p className="absolute top-2 right-2 text-gray-300 text-sm">
                            <TimeAgoText date={new Date(translation.timestamp).toISOString()} />
                        </p>

                        {/* Delete button */}
                        <DeleteTranslationButton id={translation._id} />
                    </li>
                ))}
            </ul>
        </div>
    )
}