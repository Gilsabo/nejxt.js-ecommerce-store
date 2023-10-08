import { Sql } from 'postgres';

const wildLifeAnimals = [
  {
    id: 1,
    name: 'bear',
    type: 'wildLife',
    price: 60,
    quantity: 0,
    size: [{ small: '25 x 25', medium: '50 x 50', large: '50 x 100' }],
  },
  {
    id: 2,
    name: 'cow-seated',
    type: 'wildLife',
    price: 80,
    quantity: 0,
    size: [{ small: '25 x 25', medium: '50 x 50', large: '50 x 100' }],
  },
  {
    id: 3,
    name: 'deer',
    type: 'wildLife',
    price: 90,
    quantity: 0,
    size: [{ small: '25 x 25', medium: '50 x 50', large: '50 x 100' }],
  },
  {
    id: 4,
    name: 'flamingo',
    type: 'wildLife',
    price: 50,
    quantity: 0,
    size: [{ small: '25 x 25', medium: '50 x 50', large: '50 x 100' }],
  },
  {
    id: 5,
    name: 'goat',
    type: 'wildLife',
    price: 40,
    quantity: 0,
    size: [{ small: '25 x 25', medium: '50 x 50', large: '50 x 100' }],
  },
  {
    id: 6,
    name: 'monkey',
    type: 'wildLife',
    price: 35,
    quantity: 0,
    size: [{ small: '25 x 25', medium: '50 x 50', large: '50 x 100' }],
  },
  {
    id: 7,
    name: 'tiger',
    type: 'wildLife',
    price: 25,
    quantity: 0,
    size: [{ small: '25 x 25', medium: '50 x 50', large: '50 x 100' }],
  },
  {
    id: 8,
    name: 'wash-bear',
    type: 'wildLife',
    price: 35,
    quantity: 0,
    size: [{ small: '25 x 25', medium: '50 x 50', large: '50 x 100' }],
  },
  {
    id: 9,
    name: 'zebra',
    type: 'wildLife',
    price: 60,
    quantity: 0,
    size: [{ small: '25 x 25', medium: '50 x 50', large: '50 x 100' }],
  },
];

export async function up(sql: Sql) {
  for (const wildLifeAnimal of wildLifeAnimals) {
    const sizeJSON = JSON.stringify(wildLifeAnimal.size); // Convert array of objects to JSON string
    await sql`
INSERT INTO wild_life_animals
  (name, type, price, quantity, size)
VALUES
    (${wildLifeAnimal.name}, ${wildLifeAnimal.type}, ${wildLifeAnimal.price}, ${wildLifeAnimal.quantity}, ${sizeJSON})
  `;
  }
}

export async function down(sql: Sql) {
  for (const wildLifeAnimal of wildLifeAnimals) {
    await sql`
  DELETE FROM wild_life_animals WHERE id = ${wildLifeAnimal.id}

  `;
  }
}
