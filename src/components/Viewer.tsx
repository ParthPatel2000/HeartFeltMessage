import { useEffect, useState } from "react"
import type { MessagePayload } from "@/types"
import { useLocation } from "react-router-dom"
import { decodeMessage } from "@/utils/encode_decode"
import { themes } from "@/utils/themes"

const Viewer = () => {
    const [payload, setPayload] = useState<MessagePayload | null>(null)
    const currentUrl = useLocation();
    const text = currentUrl.pathname.replace(/^\/+/, "");

    useEffect(() => {
        setPayload(decodeMessage(text));
    }, [text])

    if (!payload) return null;

    const theme =
        themes.find(t => t.name === payload.theme) ?? themes[0]

    return (
        <div className="page" style={{ background: theme.background, color: theme.textColor, fontFamily: theme.fontFamily }}>
            <article className="card" style={{
                background: theme.background,
                color: theme.textColor,
                borderColor: theme.borderColor
            }}>
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
