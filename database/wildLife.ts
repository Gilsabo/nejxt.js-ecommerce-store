import 'server-only';
import { cache } from 'react';
import { sql } from '../database/connect';
import { WildLifeAnimals } from '../migrations/00000-createTableWildLife';

export const getWildLifeAnimals = cache(async () => {
  const wildLifeAnimals = await sql<WildLifeAnimals[]>`
    SELECT * FROM wild_life_animals
  `;
  const animalsWithParsedSize = wildLifeAnimals.map((animal) => ({
    ...animal,
    size: Array.isArray(animal.size) ? animal.size : JSON.parse(animal.size),
  }));
  return animalsWithParsedSize;
});

export const getWildLifeAnimal = cache(async (id: number) => {
  const [wildLifeAnimal] = await sql<WildLifeAnimals[]>`
  SELECT * FROM wild_life_animals
  WHERE id = ${id}`;
  return wildLifeAnimal;
});
