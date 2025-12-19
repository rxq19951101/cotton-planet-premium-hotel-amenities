
import { Category, Product, CompanyInfo } from './types';

export const COMPANY: CompanyInfo = {
  name: "Cotton Planet",
  tagline: "Elevando la Hospitalidad a Través del Confort Puro",
  whatsapp: "+1234567890", 
  email: "contacto@cottonplanet.com",
  address: "123 Calle de la Hospitalidad, Distrito Textil, Ciudad Global",
  about: "Cotton Planet es un proveedor líder de suministros hoteleros de alta gama, especializado en productos sostenibles a base de algodón que redefinen la experiencia del huésped. Establecidos con la visión de llevar lujo y comodidad a cada habitación, colaboramos con las marcas de hospitalidad más prestigiosas del mundo.",
  mission: "Nuestra misión es proporcionar artículos de cortesía de origen ético, excepcionalmente duraderos y lujosamente suaves que ayuden a los hoteles a dejar una impresión positiva y duradera en sus huéspedes."
};

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Sábanas Clásicas de 800 Hilos",
    category: Category.BEDDING,
    description: "Sábanas de algodón egipcio ultra suaves con acabado satinado, diseñadas para la mejor experiencia de descanso.",
    material: "100% Algodón Egipcio",
    images: ["https://picsum.photos/seed/bed1/800/600"],
    features: ["Tejido transpirable", "Hipoalergénico", "Lavable a máquina"]
  },
  {
    id: "2",
    name: "Albornoces de Terciopelo Afelpado",
    category: Category.BATH,
    description: "Lujosos albornoces con cuello esmoquin y forro interior de alta absorción.",
    material: "Mezcla de Algodón Orgánico",
    images: ["https://picsum.photos/seed/bath1/800/600"],
    features: ["Ajuste generoso", "Tecnología de secado rápido", "Tacto extra suave"]
  },
  {
    id: "3",
    name: "Kit de Aseo Ecológico",
    category: Category.TOILETRIES,
    description: "Empaque biodegradable e ingredientes naturales para hoteles conscientes del medio ambiente.",
    material: "Bambú y Extractos Naturales",
    images: ["https://picsum.photos/seed/toilet1/800/600"],
    features: ["Libre de parabenos", "Vegano", "Empaque residuo cero"]
  },
  {
    id: "4",
    name: "Zapatillas de Lujo Cerradas",
    category: Category.SLIPPERS,
    description: "Zapatillas de suela gruesa con acolchado premium para el máximo confort interior.",
    material: "Algodón Terry y Suela EVA",
    images: ["https://picsum.photos/seed/slip1/800/600"],
    features: ["Suela antideslizante", "Talla única universal", "Lavables"]
  },
  {
    id: "5",
    name: "Edredones Relleno Nube",
    category: Category.BEDDING,
    description: "Rellenos ligeros pero increíblemente cálidos para un sueño acogedor.",
    material: "Microfibra y Cubierta de Algodón",
    images: ["https://picsum.photos/seed/duvet1/800/600"],
    features: ["Laz de esquina", "Peso para todas las estaciones", "Diseño acolchado"]
  },
  {
    id: "6",
    name: "Toallas de Spa de Gran Tamaño",
    category: Category.BATH,
    description: "Toallas extra gruesas con un sofisticado borde de jacquard.",
    material: "Algodón Pima",
    images: ["https://picsum.photos/seed/towel1/800/600"],
    features: ["Ultra absorbentes", "Resistentes al desteñido", "Doble costura en bordes"]
  }
];
