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


export type Theme = {
  name: string;
  background: string;          // page/card background
  textColor: string;           // default text color
  placeholderColor?: string;   // optional placeholder color
  fontFamily?: string;         // font for this theme
  borderColor?: string;        // input/select borders
  buttonBackground?: string;   // buttons
  buttonTextColor?: string;    
  accentColor?: string;        // highlights, links, etc.
};

