export const FLICK_THRESHOLD = 7;

const FLOP_EMOJI = ["🍅", "🤮"];

export function getVerdict(rating, seed = 0) {
  if (rating >= 7) {
    return { type: "flick", label: "Flick", emoji: "🍿" };
  }
  if (rating < 7) {
    return {
      type: "flop",
      label: "Flop",
      emoji: FLOP_EMOJI[Math.round(Math.random())],
    };
  }
  return { type: "unrated", label: "Unrated", emoji: "🤷" };
}
