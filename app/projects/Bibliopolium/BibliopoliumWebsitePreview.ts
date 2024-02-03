import { type WebsitePreviewItem } from '../models/WebsitePreviewItem';
import {
  Authorization,
  HomePage,
  Book,
  AddBook,
  EditBook,
  Users,
  Cart,
  Favourites,
  Orders,
  OrderDetails,
} from './assets';

export const BibliopoliumWebsitePreview: WebsitePreviewItem[] = [
  {
    name: 'Home Page',
    image: HomePage,
    alt: 'Bibliopolium home page',
  },
  {
    name: 'Authorization',
    image: Authorization,
    alt: 'Bibliopolium authorization page',
  },
  {
    name: 'Book',
    image: Book,
    alt: 'Bibliopolium book details page',
  },
  {
    name: 'Add book',
    image: AddBook,
    alt: 'Bibliopolium add book page',
  },
  {
    name: 'Edit book',
    image: EditBook,
    alt: 'Bibliopolium edit book page',
  },
  {
    name: 'Users',
    image: Users,
    alt: 'Bibliopolium users page',
  },
  {
    name: 'Cart',
    image: Cart,
    alt: 'Bibliopolium cart page',
  },
  {
    name: 'Favourites',
    image: Favourites,
    alt: 'Bibliopolium favourite books page',
  },
  {
    name: 'Orders',
    image: Orders,
    alt: 'Bibliopolium orders page',
  },
  {
    name: 'Order details',
    image: OrderDetails,
    alt: 'Bibliopolium order details page',
  },
];
