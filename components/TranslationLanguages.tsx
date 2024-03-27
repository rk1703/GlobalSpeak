"use client"

import { TranslationLanguages } from "@/app/translate/page";
import { Textarea } from "@/components/ui/textarea"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function TranslationForm({ languages }: { languages: TranslationLanguages }) {
    return (
        <div>
            <form>
                <div>
                    <Select name="inputLanguages" defaultValue="auto">
                        <SelectTrigger className="w-[280px]">
                            <SelectValue placeholder="Select a Language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Want us to figure it out?</SelectLabel>
                                <SelectItem key="auto" value="auto">Auto-Detection</SelectItem>

                            </SelectGroup>
                            <SelectGroup>
                                <SelectLabel>
                                    Languages
                                </SelectLabel>
                                {Object.entries(languages.translation).map(([key, value]) => (
                                    <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                ))}
                            </SelectGroup>

                        </SelectContent>
                    </Select>
                    <Textarea
                        placeholder="Type your message here"
                        name="input"
                        className="min-h-32 text-xl"
                    />
                </div>
                <div>
                    <Select>
                        <SelectTrigger className="w-[280px]">
                            <SelectValue placeholder="Select a Language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Want us to figure it out?</SelectLabel>
                                <SelectItem key="auto" value="auto">Auto-Detection</SelectItem>

                            </SelectGroup>
                            <SelectGroup>
                                <SelectLabel>
                                    Languages
                                </SelectLabel>
                                {Object.entries(languages.translation).map(([key, value]) => (
                                    <SelectItem key={key} value={key}>{value.name}</SelectItem>
                                ))}
                            </SelectGroup>

                        </SelectContent>
                    </Select>
                    <Textarea
                        placeholder="Type your message here"
                        name="input"
                        className="min-h-32 text-xl"
                    />
                </div>

            </form>
        </div>
    )
}

export default TranslationForm;