import { encodeMessage } from '@/utils/encode_decode';
import type { MessagePayload } from "@/types"
import { useSelector } from 'react-redux';
import type { RootState } from '@/store/store';
import { useEffect, useState } from 'react';
import { Clipboard } from 'lucide-react';

type CreateJsonInput = {
    title: string;
    body: string;
    theme: string;
    from?: string;
    music?: string;
    images?: string[];
};

function createJson({
    title,
    body,
    theme,
    ...optionalFields
}: CreateJsonInput): MessagePayload {
    return {
        v: 1,
        title,
        body,
        theme,
        createdAt: Date.now(),
        ...optionalFields,
    };
}


const GenerateLink = ({ title, body }: { title: string; body: string }) => {
    const selectedTheme = useSelector((state: RootState) => state.theme);
    const BASE_URL = import.meta.env.VITE_APP_BASE_URL
    const [link, setLink] = useState("");

    const copyToClipboard = () => {
        if (!link) return;
        navigator.clipboard.writeText(link).then(() => {
            alert("Link copied to Clipboard")
        }).catch((err) => {
            console.log("Failed to copy: ", err)
        })
    }
    // const hashHomeLink = "https://parthpatel2000.github.io/HeartFeltMessage/#/";
    // const localLink = "localhost:5173/HeartFeltMessage/#/";

    useEffect(() => {
        const link_text = BASE_URL + "#/" +
            encodeMessage(
                createJson({
                    title,
                    body,
                    theme: selectedTheme,
                })
            )
        setLink(link_text);
    }, [title, body, selectedTheme, BASE_URL]);

    return (
        <div >

            <div className='flex justify-end' title="Click to copy URL">
                <Clipboard onClick={copyToClipboard} className="w-5 h-5 cursor-pointer" />
            </div>
            <div className="whitespace-pre-wrap truncate cursor-pointer" title='Click to copy URL' onClick={copyToClipboard}>
                {link}
            </div>
        </div>

    )
}

export default GenerateLink
