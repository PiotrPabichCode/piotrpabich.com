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
    alt: 'Authorization page',
  },
  {
    name: 'Book',
    image: Book,
    alt: 'Book details page',
  },
  {
    name: 'Add book',
    image: AddBook,
    alt: 'Add book page',
  },
  {
    name: 'Edit book',
    image: EditBook,
    alt: 'Edit book page',
  },
  {
    name: 'Users',
    image: Users,
    alt: 'Users page',
  },
  {
    name: 'Cart',
    image: Cart,
    alt: 'Cart page',
  },
  {
    name: 'Favourites',
    image: Favourites,
    alt: 'Favourite books page',
  },
  {
    name: 'Orders',
    image: Orders,
    alt: 'Orders page',
  },
  {
    name: 'Order details',
    image: OrderDetails,
    alt: 'Order details page',
  },
];
