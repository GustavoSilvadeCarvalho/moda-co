export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Camiseta Nike Dri-FIT",
      price: 149.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "shirts"
    },
    {
      id: 2,
      name: "Calça Nike Cargo SB",
      price: 199.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "pants"
    },
    {
      id: 3,
      name: "Camiseta Nike Run Energy",
      price: 149.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "shirts"
    },
    {
      id: 4,
      name: "Camiseta Nike Air Jordan 85",
      price: 169.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "shirts"
    },
    {
      id: 5,
      name: "Nike Air Force",
      price: 499.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "shoes"
    },
    {
      id: 6,
      name: "Camiseta Nike Court Slam",
      price: 149.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "shirts"
    },
    {
      id: 7,
      name: "Nike SB",
      price: 399.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "shoes"
    },
    {
      id: 8,
      name: "Calça Nike Sportwear",
      price: 249.99,
      image: "/placeholder.svg?height=200&width=200",
      category: "pants"
    }
  ];
  
  