
import { Textarea } from "@/components/ui/textarea";
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { themes } from '@/utils/themes';
import type { RootState } from '@/store/store';
import { changeTheme } from '@/store/themeState/themeSlice';
import GenerateLink from "./GenerateLink";

const Editor = () => {
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const [showLink, setShowLink] = useState<boolean>(false);
    const size = 8000;
    const selectedTheme = useSelector((state: RootState) => state.theme);
    const dispatch = useDispatch();

    return (
        <div
            className="page"
            style={{
                background: selectedTheme.background,
                color: selectedTheme.textColor,
                fontFamily: selectedTheme.fontFamily,
            }}
        >
            <div
                className="card"
                style={{
                    background: selectedTheme.background,
                    color: selectedTheme.textColor,
                }}
            >
                {/* Theme Selector */}
                <div>
                    <Select
                        value={selectedTheme.name}
                        onValueChange={(value) => {
                            dispatch(changeTheme(value));
                        }}
                    >
                        <SelectTrigger
                            className="select-trigger"
                            style={{
                                borderColor: selectedTheme.borderColor,
                                color: selectedTheme.textColor,
                            }}
                        >
                            <SelectValue
                                placeholder={selectedTheme.name}
                                style={{ color: selectedTheme.textColor }}
                            />
                        </SelectTrigger>
                        <SelectContent
                            className="select-content"
                            style={{ borderColor: selectedTheme.borderColor }}
                        >
                            {themes.map((theme) => (
                                <SelectItem
                                    key={theme.name}
                                    value={theme.name}
                                    className="select-item"
                                    style={{
                                        color: theme.textColor,
                                        background: theme.background,
                                    }}
                                >
                                    {theme.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Title Input */}
                <div>
                    <Input
                        key={selectedTheme.name}
                        type="text"
                        value={title}
                        placeholder="Title"
                        className="input"
                        style={{
                            color: selectedTheme.textColor,
                            borderColor: selectedTheme.borderColor,
                        }}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* Message Textarea */}
                <div className="relative">
                    <Textarea
                        key={selectedTheme.name + "-body"}
                        value={body}
                        placeholder="Message"
                        onChange={(e) => setBody(e.target.value)}
                        className="input h-34 pr-8 resize-none"
                        style={{
                            color: selectedTheme.textColor,
                            borderColor: selectedTheme.borderColor,
                        }}
                    />
                    {/* Bottom-right character count */}
                    <span
                        className="char-counter"
                        style={{ color: selectedTheme.textColor }}
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
                style={{
                    background: selectedTheme.background,
                    color: selectedTheme.textColor,
                }}
                >
                    <GenerateLink title={title} body={body} />
                </div>
            }


        </div>
    )
}

export default Editor;
