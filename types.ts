
export enum Category {
  BEDDING = 'Ropa de Cama',
  BATH = 'Baño',
  TOILETRIES = 'Artículos de Aseo',
  SLIPPERS = 'Zapatillas',
  ACCESSORIES = 'Accesorios'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  material: string;
  images: string[];
  features: string[];
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  whatsapp: string;
  email: string;
  address: string;
  about: string;
  mission: string;
}
