export interface Brand {
  id: string;
  name: string;
  logoText: string;
  italic?: boolean;
}

export const MOCK_BRANDS: Brand[] = [
  { id: '1', name: 'Nike', logoText: 'NIKE', italic: true },
  { id: '2', name: 'Adidas', logoText: 'ADIDAS', italic: true },
  { id: '3', name: 'Samsung', logoText: 'SAMSUNG', italic: true },
  { id: '4', name: 'RedBull', logoText: 'RedBull', italic: true },
  { id: '5', name: 'Spotify', logoText: 'Spotify', italic: true },
];
