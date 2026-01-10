import { getAssetUrl } from '../utils/getAssetUrl';
export const siteInfo = {
  name: "Kinder World Retreat & Rescue",
  tagline: "A KINDer World",
  subtitle: "Retreat & Rescue",
  email: "akinderworldrescue@gmail.com",
  phone: "+1-XXX-XXX-XXXX",
  location: "Our Location: our private property is conveniently located between Toronto and Montreal. Please reach out for exact address and directions.",
  facebook: "https://www.facebook.com/profile.php?id=100092383604588",
  instagram: "https://www.instagram.com/kinderworldretreatandrescue",
};

export const accommodations = [
  {
    id: 'bunkie',
    name: 'The Bunkie',
    subtitle: 'Cozy Off-Grid Cabin',
    capacity: 'Up to 3 guests',
    price: 'Contact for pricing',
    image: getAssetUrl('images/gallery/bunkiewinter.jpg'),
    description: 'Nestled beside our serene private lake, the Bunkie offers a touch of luxury while you escape to reconnect with nature in peaceful seclusion.',
    features: [
      'Private screened-in patio',
      'Full shower with lake views',
      'Two-burner propane stove',
      'Mini fridge',
      'Reclaimed & repurposed materials',
      'Completely off-grid'
    ],
    slug: '/bunkie'
  },
  {
    id: 'glamp',
    name: 'Glamp Site',
    subtitle: 'Luxury Camping Experience',
    capacity: 'Up to 4 guests',
    price: 'Contact for pricing',
    image: getAssetUrl('images/glampsite/FullSizeRender_3.jpg'),
    description: 'Experience the outdoors with comfort in our beautiful glamping setup.',
    features: [
      'Spacious tent setup',
      'Comfortable bedding',
      'Outdoor seating area',
      'Fire pit',
      'Stunning lake views',
      'Privacy in nature'
    ],
    slug: '/glamp-site'
  },
];

export const activities = [
  {
    name: 'Forest Bathing',
    icon: '🌲',
    description: 'Immerse yourself in the healing atmosphere of our forest.',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800'
  },
  {
    name: 'Paddle Boarding',
    icon: '🏄‍♀️',
    description: 'Glide across our private lake on stand-up paddleboards.',
    image: 'https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=800'
  },
  {
    name: 'Hiking Trails',
    icon: '🥾',
    description: 'Explore scenic trails through 300 acres of wilderness.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800'
  },
  {
    name: 'Sauna',
    icon: '🔥',
    description: 'Relax and rejuvenate in our traditional wood-fired sauna.',
    image: 'https://images.unsplash.com/photo-1521192520849-ebf0b8b40e4f?w=800'
  },
  {
    name: 'Wildlife Watching',
    icon: '🦫',
    description: 'Observe beavers, hummingbirds, turtles, and wild turkeys.',
    image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=800'
  },
  {
    name: 'Workshops & Retreats',
    icon: '🧘',
    description: 'Join us for mindful workshops and wellness retreats.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800'
  }
];

export const testimonials = [
  {
    name: 'Dani',
    location: 'Montreal',
    text: 'The cabin is surrounded by nature. There is so much peace and warmth, a place filled with love and tranquility. If you are looking for a place to relax and meditate, this place is perfect. Additionally, we went canoeing, kayaking, stand-up paddle boarding, and swimming in the lake, and it was amazing.',
    rating: 5
  },
  {
    name: 'Matthew',
    location: 'Toronto',
    text: 'The Bunkie had everything we needed and the bed was amazing. Completely private… we couldn\'t hear anything but the birds and we had the entire lake to ourselves. No complaints whatsoever… 10/10. Stay here!',
    rating: 5
  },
  {
    name: 'Maggie',
    location: 'Toronto',
    text: 'We had a wonderful time at the Bunkie. Julie, Patrick, and Max are lovely and warm hosts who are passionate about protecting Mother Nature and wildlife. We loved the stories about how they built their connections with the wildlife there.',
    rating: 5
  },
  {
    name: 'Claire',
    location: 'Toronto',
    text: 'Unparalleled serenity. Quite possibly the most magical setting on earth. So relaxing and cabin was adorable, cozy and very comfortable. Could not recommend more! It was so relaxing',
    rating: 5
  },
  {
    name: 'Meike',
    location: 'Germany',
    text: 'We saw beavers, hummingbirds, turtles, wild turkey and many more animals. And could swim several times a day in the warm lake and paddle with the Kajaks. Our 10-year old was in heaven.',
    rating: 5
  },
  {
    name: 'Shad',
    location: 'Ottawa',
    text: 'The Bunkie was thoughtfully equipped with all the essentials, including cookware and oil. The bathroom was pristine—cleaner than any Airbnb I\'ve stayed in before. Taking a shower while gazing out at the lake just a few meters away is a memory I will forever cherish.',
    rating: 5
  }
];

export const whyChooseUs = [
  {
    icon: '🏞️',
    title: 'Private 300 Acres',
    description: 'Vast wilderness with complete privacy and serenity'
  },
  {
    icon: '🔇',
    title: 'Zero Noise Pollution',
    description: 'Only natural sounds - birds, loons, and wildlife'
  },
  {
    icon: '🦌',
    title: 'Wildlife Sanctuary',
    description: 'A safe haven for all creatures, no hunting allowed'
  },
  {
    icon: '🌱',
    title: '100% Vegan',
    description: 'Fully vegan property honoring all living beings'
  },
  {
    icon: '⚡',
    title: 'Off-Grid Living',
    description: 'Sustainable practices in harmony with nature'
  },
  {
    icon: '💚',
    title: 'Ethical Stewardship',
    description: 'Compassion and kindness guide everything we do'
  }
];
