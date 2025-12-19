export const themes = [
  { label: "Apology", value: "apology" },
  { label: "Regret", value: "regret" },
  { label: "Confession", value: "confession" },
  { label: "Bold Love", value: "bold-love" },
  { label: "Playful", value: "playful" },
  { label: "Chaos", value: "chaos" },
] as const;

export type ThemeValue = typeof themes[number]["value"];
