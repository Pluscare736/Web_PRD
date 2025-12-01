export interface Banner {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const banners: Banner[] = [
  {
    id: 1,
    title: "Experience the Next Generation of Gadgets.",
    description: "Discover the New Gadgets!",
    image: "https://i.pinimg.com/1200x/fb/d7/90/fbd7900bb055dd65d12949022fca5617.jpg"
  },
  {
    id: 2,
    title: "Modern Elegance",
    description: "Where simplicity meets sophistication",
    image: "https://i.pinimg.com/736x/ee/40/8b/ee408b009921ba8643718ba8ca387b77.jpg"
  },
  {
    id: 3,
    title: "Everyday Essentials",
    description: "Thoughtfully designed for modern life",
    image: "https://i.pinimg.com/736x/88/04/d2/8804d261e5d3b4cbddaf73fc98f00842.jpg"
  },
  {
    id: 4,
    title: "Quality Craftsmanship",
    description: "Handpicked items that stand the test of time",
    image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
];
