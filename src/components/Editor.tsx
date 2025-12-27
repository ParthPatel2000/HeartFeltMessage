
import { Textarea } from "@/components/ui/textarea";
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useRef, useState } from 'react';
import { themes } from '@/utils/themes';
import { changeTheme } from '@/store/themeState/themeSlice';
import type { ThemeName, Music } from "@/types";
import type { RootState } from "@/store/store";
import GenerateLink from "./GenerateLink";
import MusicSelector from "./MusicSelector";

const Editor = () => {
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const [showLink, setShowLink] = useState<boolean>(false);
    const [music, setMusic] = useState<Music | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const size = 8000;
    const theme = useSelector((state: RootState) => state.theme)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!music) return

        if (audioRef.current) {
            audioRef.current.pause()
        }

        audioRef.current = new Audio(music.url)
        audioRef.current.volume = 0.6
        audioRef.current.loop = true
        audioRef.current.play()

        return () => {
            audioRef.current?.pause()
        }
    }, [music])


    return (
        <div className="page">
            <div className="card">
                {/* Theme Selector */}
                <div>
                    <Select
                        onValueChange={(value: ThemeName) => {
                            dispatch(changeTheme(value));
                        }}>

                        <SelectTrigger
                            className="select-trigger">
                            <SelectValue
                                placeholder={theme}
                            />
                        </SelectTrigger>
                        <SelectContent
                            className="select-content"

                        >
                            {themes.map((theme) => (
                                <SelectItem
                                    key={theme.value}
                                    value={theme.value}
                                    className="select-item"
                                >
                                    {theme.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <MusicSelector value={music} onChange={setMusic} />

                {/* Title Input */}
                <div>
                    <Input

                        type="text"
                        value={title}
                        placeholder="Title"
                        className="input"

                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* Message Textarea */}
                <div className="relative">
                    <Textarea

                        value={body}
                        placeholder="Message"
                        onChange={(e) => setBody(e.target.value)}
                        className="input h-34 pr-8 resize-none"

                    />
                    {/* Bottom-right character count */}
                    <span
                        className="char-counter"

                    >
                        {size - (body.length + title.length)}
                    </span>
                </div>

                {/* Optional: example button using accentColor */}
                <button
                    className={
                        `mt-4 px-4 py-2 rounded 
                        ${showLink ? "bg-blue-500 border-2 border-blue-700" : "bg-red-500"}
                         text-white`}
                    onClick={() => setShowLink(!showLink)}
                >
                    Generate
                </button>
            </div>

            {showLink &&
                <div className="card"
                >
                    {/* PlaceHolder for Generate Link. */}
                    <GenerateLink title={title} body={body} />
                </div>
            }


        </div>
    )
}

export default Editor;
