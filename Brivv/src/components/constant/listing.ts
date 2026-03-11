export interface Listing {
    id: number;
    title: string;
    location: string;
    price: string;
    status: string;
    image: string;
}

export const propertyListing: Listing[] = [
  {
    id: 1,
    title: "Sunset Villa Estate",
    location: "Beverly Hills, CA 90210",
    price: "$1,250,000",
    status: "PENDING",
    image: "/images/sunset-villa.png",
  },
  {
    id: 2,
    title: "Skyline Loft",
    location: "Manhattan, NY 10001",
    price: "$4,500",
    status: "PENDING",
    image: "/images/skyline-loft.png",
  },
  {
    id: 3,
    title: "The Nordic Ret...",
    location: "Portland, OR 977201",
    price: "$875,000",
    status: "LIVE",
    image: "/images/the-nordic.png",
  },
  {
    id: 4,
    title: "Willow Creek H...",
    location: "Austin, TX 78701",
    price: "$620,000",
    status: "LIVE",
    image: "/images/williow-creek.png",
  },
  {
    id: 5,
    title: "Seaside Infinity",
    location: "Malibu, CA 90265",
    price: "$2,100,000",
    status: "LIVE",
    image: "/images/seaside-infinity.png",
  },
]