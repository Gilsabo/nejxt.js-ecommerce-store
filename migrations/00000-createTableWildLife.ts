import { Sql } from 'postgres';

// const wildLifeAnimals = [
//   {
//     id: 1,
//     name: 'bear',
//     type: 'wildLife',
//     price: 60,
//     quantity: 0,
//     size: [{ small: '25 x 25', medium: '50 x 50', large: '50 x 100' }],
//   },

export interface ParsedSize {
  small: string;
  medium: string;
  large: string;
}

export type WildLifeAnimals = {
  id: number;
  name: string;
  type: string;
  price: number;
  quantity: number;
  size: ParsedSize[] | string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE wild_life_animals (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar (30) NOT NULL,
      type varchar (30) NOT NULL,
      price integer,
      quantity integer,
      size JSONB
    )
  `;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE wild_life_animals
  `;
}
