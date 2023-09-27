import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getWildLifeAnimal } from '../../../database/wildLife';

export function generateMetadata({ params }) {
  const singleAnimal = getWildLifeAnimal(Number(params.wildLifeId));

  return {
    title: singleAnimal ? singleAnimal.name : '',
  };
}

export default function WildLifeAnimal(props) {
  const wildLifeAnimalFromObject = getWildLifeAnimal(
    Number(props.params.wildLifeId),
  );
  console.log(wildLifeAnimalFromObject);
  console.log(props);

  if (!wildLifeAnimalFromObject) {
    return notFound();
  }
  return (
    <div>
      <div>
        <h1>{wildLifeAnimalFromObject.name}</h1>
        <Image
          data-test-id="product-image"
          src={`/images/${wildLifeAnimalFromObject.name}.jpg`}
          width={400}
          height={500}
          alt={wildLifeAnimalFromObject.name}
        />
      </div>
      <div>
        <div>{wildLifeAnimalFromObject.name}</div>
        <div data-test-id="product-price">
          {wildLifeAnimalFromObject.price} euros
        </div>
        <div>small size : {wildLifeAnimalFromObject.size[0].small}</div>
        <div>medium size :{wildLifeAnimalFromObject.size[0].medium}</div>
        <div>large size : {wildLifeAnimalFromObject.size[0].large}</div>
      </div>
    </div>
  );
}
