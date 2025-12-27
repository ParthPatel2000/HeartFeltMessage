import React, { useState } from 'react'
import type { Music } from '@/types'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


const musicOptions: Music[] = [
    {
        id: "calm-piano",
        title: "calm-piano",
        url: "music/calm-piano.mp3"
    },
    {
        id: "somber-guitar",
        title: "somber-guitar",
        url: "music/somber-guitar.mp3"
    },
    {
        id: "peaceful-piano",
        title: "peaceful-piano",
        url: "music/peaceful-piano.mp3"
    }
]


const MusicSelector = ({ value, onChange }: { value: Music | null, onChange: (newMusic: Music | null) => void }) => {
    return (
        <Select
            value={value?.id ?? "none"}
            onValueChange={(id) => {
                if (id === "none") { onChange(null) }
                const selected = musicOptions.find(m => m.id === id)
                if (selected) onChange(selected)
            }}
        >
            <SelectTrigger className="select-trigger">
                <SelectValue placeholder="Select Music" />
            </SelectTrigger>
            <SelectContent
                className="select-content">
                <SelectItem key={"none"} value={"none"}
                    className="select-item">
                    {"None"}
                </SelectItem>
                {musicOptions.map((music) => (
                    <SelectItem key={music.id} value={music.id}
                        className="select-item">
                        {music.title}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}


export default MusicSelector
