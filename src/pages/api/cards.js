// API route to return sample card data
export default async function handler(req, res) {
  try {
    // Simulate fetching data, you can replace this with real data
    const cards = [
      { text: "해외 마케팅", icon: "/images/slide.svg" },
      { text: "퍼블리셔", icon: "/images/slide2.png" },
      { text: "캐드원(제도사)", icon: "/images/slide3.png" },
      { text: "해외 세일즈", icon: "/images/slide4.png" },
      { text: "해외 CS", icon: "/images/slide5.png" },
    ];

    // Respond with JSON data
    res.status(200).json(cards);
  } catch (error) {
    console.error("Error fetching cards:", error);
    res.status(500).json({ message: "Failed to fetch cards data" });
  }
}
