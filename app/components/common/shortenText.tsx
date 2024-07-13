export function shortenText(text: string, front?: number, back?: number) {
  const frontDigits = front ? front : 6;
  const backDigits = back || back == 0 ? back : 5;
  return text.length >= 10
    ? `${text.substring(0, frontDigits)}...${text.substring(
        text.length - backDigits,
        text.length
      )}`
    : text;
}
