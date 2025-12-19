import LZString from 'lz-string';
import type { MessagePayload } from '../types';

export const encodeMessage = (payload: MessagePayload): string => {
  const json = JSON.stringify(payload);
  return LZString.compressToEncodedURIComponent(json);
};

export const decodeMessage = (encoded: string): MessagePayload | null => {
  try {
    const json = LZString.decompressFromEncodedURIComponent(encoded);
    if (!json) return null;
    return JSON.parse(json);
  } catch (e) {
    console.error('Failed to decode message:', e);
    return null;
  }
};
