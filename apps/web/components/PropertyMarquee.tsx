import { Button } from "@workspace/ui/components/button";
import { Marquee } from "@workspace/ui/components/marquee";
import { ArrowRight, Bath, Bed, Heart, MapPin } from "lucide-react";

interface MarqueeProperty {
  id: number;
  title: string;
  area: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  size: number;
  image: string;
  propertyType: string;
}

const properties: MarqueeProperty[] = [
  {
    id: 1,
    title: "Luxury Penthouse",
    area: "Downtown Dubai",
    price: 2500000,
    bedrooms: 3,
    bathrooms: 3,
    size: 2800,
    image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    propertyType: "Penthouse",
  },
  {
    id: 2,
    title: "Modern Villa",
    area: "Emirates Hills",
    price: 3200000,
    bedrooms: 5,
    bathrooms: 5,
    size: 5500,
    image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    propertyType: "Villa",
  },
  {
    id: 3,
    title: "Smart Apartment",
    area: "Dubai Marina",
    price: 1800000,
    bedrooms: 2,
    bathrooms: 2,
    size: 1450,
    image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    propertyType: "Apartment",
  },
  {
    id: 4,
    title: "Beach Villa",
    area: "Palm Jumeirah",
    price: 5500000,
    bedrooms: 6,
    bathrooms: 7,
    size: 7200,
    image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    propertyType: "Villa",
  },
];

function PropertyMarqueeCard({
  image,
  title,
  area,
  price,
  propertyType,
  bedrooms,
  bathrooms,
  size,
}: {
  image: string;
  title: string;
  area: string;
  price: number;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  size: number;
}) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group/card animate-fade-in-up">
      <div className="flex gap-4 p-4">
        {/* Image */}
        <div
          className="w-24 h-24 rounded-lg shrink-0 bg-linear-to-br transition-transform duration-300"
          style={{ background: image }}
        />

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <div>
              <h3 className="font-semibold text-foreground truncate">
                {title}
              </h3>
              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="w-3 h-3" />
                <span className="text-xs">{area}</span>
              </div>
            </div>
            <Button size="icon-sm" variant="ghost">
              <Heart />
            </Button>
          </div>

          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm font-bold text-primary">
              AED {(price / 1000000).toFixed(1)}M
            </span>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
              {propertyType}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex text-xs text-muted-foreground gap-3">
              <div className="flex items-center gap-1">
                <Bed className="w-3 h-3" />
                <span>{bedrooms}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="w-3 h-3" />
                {bathrooms}
              </div>
              <div>{size} sqft</div>
            </div>
            <Button size="sm" variant="outline">
              View Details
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PropertyMarquee() {
  return (
    <div className="relative flex max-w-lg mx-auto h-150 w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="w-full">
        {properties.map((property) => (
          <PropertyMarqueeCard key={property.id} {...property} />
        ))}
      </Marquee>
    </div>
  );
}
