export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string; //Item(Headphone, Adapter, etc.)
  brand: string;
  description: string;
  isNewArrival?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Apple USB-C Power Adpter",
    price: 299.99,
    image: "https://i.pinimg.com/736x/27/45/bd/2745bd686f81105c9b6e67639b635f20.jpg",
    category: "Adapters",
    brand: "Apple",
    description: "Discover the New Gadgets!",
    isNewArrival: true
  },
  {
    id: 2,
    name: "Samsung USB-C Power Adpter",
    price: 299.99,
    image: "https://images.samsung.com/is/image/samsung/p6pim/sg/ep-t4510xbeggb/gallery/sg-45w-power-adapter-ep-t4510-ep-t4510xbeggb-thumb-531315971",
    category: "Adapters",
    brand: "Samsung",
    description: "Elegant timepiece with clean lines and premium materials",
    isNewArrival: true
  },
  {
    id: 3,
    name: "Apple Type C-C Data Cable",
    price: 189.99,
    image: "https://chargingcable.in/cdn/shop/files/1_269dd780-561f-4bcd-9a24-7210f1166740.jpg?v=1747650760&width=1080",
    category: "Data Cables",
    brand: "Apple",
    description: "Handcrafted leather backpack for the modern professional"
  },
  {
    id: 4,
    name: "Apple Type C- Lightning Data Cable",
    price: 79.99,
    image: "https://millioncases.in/cdn/shop/files/202308301209328680.png?v=1734068811",
    category: "Data Cables",
    brand: "Apple",
    description: "Handmade ceramic vase with minimalist design",
    isNewArrival: true
  },
  {
    id: 5,
    name: "Samsung USB-C to USB-C Data Cable",
    price: 349.99,
    image: "https://m.media-amazon.com/images/I/51HTg3yHdlL.jpg",
    category: "Data Cables",
    brand: "Samsung",
    description: "Premium audio experience with noise cancellation"
  },
  {
    id: 6,
    name: "Samsung USB to C Data Cable",
    price: 49.99,
    image: "https://sellg.in/cdn/shop/products/samsungtype-ccable_1200x1200.jpg?v=1645371947",
    category: "Data Cables",
    brand: "Samsung",
    description: "Eco-friendly canvas tote for everyday use",
    isNewArrival: true
  },
  {
    id: 7,
    name: "Apple Earpods (Lightning)",
    price: 129.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_694dK2lTF9PxWemrV3vDuEQPoxIwNeo7EQ&s",
    category: "HeadPhones",
    brand: "Apple",
    description: "Modern desk lamp with adjustable brightness"
  },
  {
    id: 8,
    name: "Apple Earpods (Type C)",
    price: 159.99,
    image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/301168_o1ugut.png?tr=w-600",
    category: "HeadPhones",
    brand: "Apple",
    description: "Classic sunglasses with UV protection"
  },
  {
    id: 9,
    name: "Apple Airpods Pro",
    price: 34.99,
    image: "https://m.media-amazon.com/images/I/61k6sJaXIQL._AC_SX342_SY445_QL70_ML2_.jpg",
    category: "HeadPhones",
    brand: "Apple",
    description: "Premium paper notebooks for creative minds",
    isNewArrival: true
  },
  {
    id: 10,
    name: "Apple AirPods Max",
    price: 24.99,
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-hero-select-202409_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=WXBZVEZCOUNiUWlBYUtjZmtBc0J2MGkxeEVQUXVsbFk4WEhBc0JFOWdSN2pmMHBIdXRoME5iSzRYUmF4Y3dVRy81NGMrcU1sYkxwTFJaVHI1NEQzenBJRnRzZXYwZVJMZmZQVjdBR0RkVVNpdi91OXpsc3gvUHZvVGU1aUpOaFE",
    category: "HeadPhones",
    brand: "Apple",
    description: "Handcrafted ceramic coffee mug"
  },
  {
    id: 11,
    name: "Apple EarPods 3.5mm Headphone",
    price: 219.99,
    image: "https://qatarmobile.qa/media/catalog/product/cache/c1d0a1103f39b2e8cbde60f9f2a04464/a/p/apple_earpods_headphone_plug_1_.webp",
    category: "HeadPhones",
    brand: "Apple",
    description: "Comfortable sneakers with minimalist design"
  },
  {
    id: 12,
    name: "Samsung AKG Earbuds 3.5mm Headphone",
    price: 219.99,
    image: "https://m.media-amazon.com/images/I/71G2BYNQERL.jpg",
    category: "HeadPhones",
    brand: "Samsung",
    description: "Comfortable sneakers with minimalist design"
  },
  {
    id: 13,
    name: "Samsung AKG Earbuds Type-C Headphone",
    price: 29.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVmP5yoynEkH8zy0M3BjaP35k5rTPygT5wqQ&s",
    category: "HeadPhones",
    brand: "Samsung",
    description: "Sleek protective case for your device",
    isNewArrival: true
  },
  {
    id: 14,
    name: "BOSE Wireless Over-Ear Headphones",
    price: 29.99,
    image: "https://i.pinimg.com/1200x/43/a5/88/43a588130aaac5b1633297058434d9e5.jpg",
    category: "HeadPhones",
    brand: "BOSE",
    description: "Sleek protective case for your device",
    isNewArrival: true
  },
  {
    id: 15,
    name: "SoundCore by Anker Life Q30",
    price: 29.99,
    image: "https://i.pinimg.com/736x/51/4f/13/514f1370e5becda6811f28cb73621564.jpg",
    category: "HeadPhones",
    brand: "SoundCore",
    description: "Sleek protective case for your device",
    isNewArrival: true
  },
  {
    id: 16,
    name: "JBL Wireless Over Ear ANC Headphones ",
    price: 29.99,
    image: "https://m.media-amazon.com/images/I/41kIdIZD3xL._SY300_SX300_QL70_FMwebp_.jpg",
    category: "HeadPhones",
    brand: "JBL",
    description: "Sleek protective case for your device",
    isNewArrival: true
  },
  {
    id: 17,
    name: "Sony Wireless Noise-Cancelling Over-Ear Headphones",
    price: 29.99,
    image: "https://i.pinimg.com/736x/77/10/24/77102483f2e1c6fdf0028aa7fc76e05c.jpg",
    category: "HeadPhones",
    brand: "SONY",
    description: "Sleek protective case for your device",
    isNewArrival: true
  },
  {
    id: 18,
    name: "JBL Go 4 Blutooth Speaker",
    price: 29.99,
    image: "https://i.pinimg.com/1200x/1d/9e/00/1d9e006808b280c66796b6c3a454c70d.jpg",
    category: "Blutooth Speaker",
    brand: "JBL",
    description: "Sleek protective case for your device",
    isNewArrival: true
  },
  {
    id: 19,
    name: "Marshell Bluetooth Speaker",
    price: 29.99,
    image: "https://i.pinimg.com/736x/b6/a7/1b/b6a71b4507ab96f6f5922011109adfa1.jpg",
    category: "Blutooth Speaker",
    brand: "Marshell",
    description: "Sleek protective case for your device",
    isNewArrival: true
  },
  {
    id: 20,
    name: "BOSE Bluetooth Speaker",
    price: 29.99,
    image: "https://i.pinimg.com/1200x/e6/43/2c/e6432ca55566181d8be53fcf87fae19d.jpg",
    category: "Blutooth Speaker",
    brand: "BOSE",
    description: "Sleek protective case for your device",
    isNewArrival: true
  },
  {
    id: 21,
    name: "ANKER Bluetooth Speaker",
    price: 29.99,
    image: "https://i.pinimg.com/736x/3e/be/a0/3ebea0fa90c7bbfbb827cae5b8b303ff.jpg",
    category: "Blutooth Speaker",
    brand: "ANKER",
    description: "Sleek protective case for your device",
    isNewArrival: true
  },

];
