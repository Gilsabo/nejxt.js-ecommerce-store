import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getWildLifeAnimal } from '../../../database/wildLife';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import ChangeQuantityButton from './ChangeQuantityButton';

export function generateMetadata({ params }) {
  const singleAnimal = getWildLifeAnimal(Number(params.wildLifeId));
  console.log(singleAnimal);
  return {
    title: singleAnimal ? singleAnimal.name : '',
  };
}

export default function WildLifeAnimal(props) {
  const wildLifeAnimalFromObject = getWildLifeAnimal(
    Number(props.params.wildLifeId),
  );

  if (!wildLifeAnimalFromObject) {
    return notFound();
  }

  const wildLifeCookie = getCookie('wildLifePaintings');

  const wildLifeQuantities = !wildLifeCookie ? [] : parseJson(wildLifeCookie);

  const wildLifeToDisplay = wildLifeQuantities.find((wildLifeQuantity) => {
    return wildLifeQuantity.id === wildLifeAnimalFromObject.id;
  });

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
      <ChangeQuantityButton wildLife={wildLifeAnimalFromObject.id} />
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
