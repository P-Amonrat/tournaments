export function shortenAddress(address: string, front?: number, back?: number) {
  const frontDigits = front ? front : 6;
  const backDigits = back || back == 0 ? back : 5;
  return `${address.substring(0, frontDigits)}...${address.substring(
    address.length - backDigits,
    address.length
  )}`;
}
