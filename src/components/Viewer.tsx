import { useEffect, useState } from "react"
import type { MessagePayload } from "@/types"
import { useLocation } from "react-router-dom"
import { decodeMessage } from "@/utils/encode_decode"
import { themes } from "@/utils/themes"
import { useDispatch } from "react-redux"
import { changeTheme } from "@/store/themeState/themeSlice"


const Viewer = () => {
    const [payload, setPayload] = useState<MessagePayload | null>(null)
    const currentUrl = useLocation();
    const text = currentUrl.pathname.replace(/^\/+/, "");
    const dispatch = useDispatch();

    useEffect(() => {
        setPayload(decodeMessage(text));
    }, [text])

    if (!payload) return null;

    const theme =
        themes.find(t => t.value === payload.theme) ?? themes[0]
    dispatch(changeTheme(theme.value));

    return (
        <div className="page">
            <article className="card">
                <h1 className="text-2xl sm:text-3xl font-semibold mb-4 break-words">
                    {payload.title}
                </h1>

                <div className="whitespace-pre-wrap text-base sm:text-lg leading-relaxed break-words">
                    {payload.body}
                </div>

                {payload.from && (
                    <footer className="mt-6 text-right italic opacity-75">
                        — {payload.from}
                    </footer>
                )}
            </article>
        </div>

    )
}

export default Viewer
