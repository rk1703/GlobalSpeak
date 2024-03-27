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
import { useState } from "react";
import { useFormState } from "react-dom";
import translate from "@/action/translate";

const initialState = {
    inputLanguage: "auto",
    input: "",
    outputLanguage: "hi",
    output: "",
}

export type State = typeof initialState;

function TranslationForm({ languages }: { languages: TranslationLanguages }) {

    // const [state, formAction] = useFormState(translate, initialState)
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    return (
        <div>
            <form>
                <div>
                    <Select name="inputLanguage" defaultValue="auto">
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
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <div>
                    <Select name="outputLanguage" defaultValue="hi">
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
                        disabled
                        placeholder="Type your message here"
                        name="output"
                        className="min-h-32 text-xl"
                        value={output}
                        onChange={(e) => setOutput(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    )
}

export default TranslationForm;