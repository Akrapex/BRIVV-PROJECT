export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  tag?: string;
  image: string;
  beds: number;
  baths: number;
  size: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Sunset Villa Estate",
    location: "Beverly Hills, CA 90210",
    price: "$1,250,000",
    tag: "New Listing",
    image: "/images/sunset-villa.png",
    beds: 4,
    baths: 3,
    size: "3,200 sqft",
  },
  {
    id: 2,
    title: "Skyline Loft",
    location: "Manhattan, NY 10001",
    price: "$4,500",
    tag: "Price Reduced",
    image: "/images/skyline-loft.png",
    beds: 2,
    baths: 2,
    size: "1,500 sqft",
  },
  {
    id: 3,
    title: "The Nordic Ret...",
    location: "Portland, OR 977201",
    price: "$875,000",
    tag: "Price Reduced",
    image: "/images/the-nordic.png",
    beds: 2,
    baths: 2,
    size: "1,800 sqft",
  },
  {
    id: 4,
    title: "Willow Creek H...",
    location: "Austin, TX 78701",
    price: "$620,000",
    tag: "Price Reduced",
    image: "/images/williow-creek.png",
    beds: 5,
    baths: 4,
    size: "4,100 sqft",
  },
  {
    id: 5,
    title: "Seaside Infinity",
    location: "Malibu, CA 90265",
    price: "$2,100,000",
    tag: "Price Reduced",
    image: "/images/seaside-infinity.png",
    beds: 3,
    baths: 3,
    size: "2,450 sqft",
  },
  {
    id: 6,
    title: "Skyline Loft",
    location: "The Industrial L..",
    price: "$3,200",
    tag: "Price Reduced",
    image: "/images/the-industrial.png",
    beds: 1,
    baths: 1.5,
    size: "950 sqft",
  },
];
