"use client"

import { TrashIcon } from "lucide-react"
import { Button } from "./ui/button"
import DeleteTranslation from "@/action/deleteTranslation"

const DeleteTranslationButton = ({ id }: { id: string }) => {

    const DeleteTranslationAction = DeleteTranslation.bind(null,id);

    return (
        <form action={DeleteTranslationAction}>
            <Button type="submit" variant={"outline"} size={"icon"} className="border-red-500 text-red-500 hover:bg-red-400 hover:text-white">
                <TrashIcon size={16} />
            </Button>
        </form>
    )
}

export default DeleteTranslationButton