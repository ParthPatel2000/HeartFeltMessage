export type MessagePayload = {
  v: 1;                    // Version of the payload structure
  title: string;            // Message title
  body: string;             // Message body
  from?: string;            // Optional sender name
  theme: string;            // Theme name or identifier
  music?: string;           // Optional background music URL or identifier
  createdAt: number;        // Timestamp in milliseconds
  images?: string[];        // Optional array of public image URLs
};

export type Music = {
  id: string;
  title: string;
  url: string;
}

export type Theme = {
  label: string;
  value: string;
};

export type ThemeName =
  | "apology"
  | "regret"
  | "confession"
  | "bold-love"
  | "playful"
  | "chaos";

