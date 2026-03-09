export default async function handler(req, res) {
  try {
    const response = await fetch("https://account.superpartners.com/xml/jackpots");
    const xml = await response.text();

    const match = xml.match(
      /<name>Wheel of Wishes<\/name>[\s\S]*?<sum>(.*?)<\/sum>/
    );

    const jackpot = match ? match[1] : "0";

    res.status(200).json({ jackpot });
  } catch (e) {
    res.status(500).json({ jackpot: "0" });
  }
}
