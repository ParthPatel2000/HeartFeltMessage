import React from 'react'
import { Textarea } from "@/components/ui/textarea";
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { themes } from '@/utils/themes';
import type { Theme } from '@/types';
import type { RootState } from '@/store/store';
import { changeTheme } from '@/store/themeState/themeSlice';

const Editor = () => {
    const [tile, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const size = 8000;
    const selectedTheme = useSelector((state: RootState) => state.theme);
    const dispatch = useDispatch();

    return (
        <div className='page'
            style={{
                background: selectedTheme.background,
                color: selectedTheme.textColor,
            }}
        >
            <div className='card'
                style={{
                    background: selectedTheme.background,
                    color: selectedTheme.textColor,
                }}>
                <div>
                    <Select

                        value={selectedTheme.name}
                        onValueChange={(value) => {
                            dispatch(changeTheme(value))

                        }}
                    >
                        <SelectTrigger className='select-trigger'>
                            <SelectValue placeholder={selectedTheme.name} />
                        </SelectTrigger>
                        <SelectContent className='select-content'>
                            {
                                themes.map((theme) => (<SelectItem className="select-item" value={theme.name}> {theme.name}</SelectItem>))
                            }
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Input
                        key={selectedTheme.name}
                        type='text'
                        value={tile}
                        placeholder='Title'
                        className='input'
                        onChange={(e) => { setTitle(e.target.value) }
                        }>

                    </Input>
                </div>
                <div className="relative ">
                    <div className="relative">
                        <Textarea
                            key={selectedTheme.name}
                            value={body}
                            placeholder="Message"
                            onChange={(e) => setBody(e.target.value)}
                            className="input h-34 pr-8 resize-none" // `resize-none` optional to prevent resizing
                        />
                        {/* Bottom-right character count */}
                        <span className="char-counter">
                            {size - (body.length + tile.length)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editor;
