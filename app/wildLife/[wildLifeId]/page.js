import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getWildLifeAnimal } from '../../../database/wildLife';
// import { getCookie } from '../../../util/cookies';
// import { parseJson } from '../../../util/json';
import ChangeQuantityButton from './ChangeQuantityButton';

export function generateMetadata({ params }) {
  const singleAnimal = getWildLifeAnimal(Number(params.wildLifeId));
  console.log(singleAnimal);
  return {
    title: singleAnimal ? singleAnimal.name : '',
  };
}

export default async function WildLifeAnimal(props) {
  const wildLifeAnimalFromObject = await getWildLifeAnimal(
    Number(props.params.wildLifeId),
  );

  if (!wildLifeAnimalFromObject) {
    return notFound();
  }

  // I DO NOT KNOW IF I NEED THIS CODE. WITHOUT IT WORKS FINE UNTIL NOW
  // const wildLifeCookie = getCookie('wildLifePaintings');

  // const wildLifeQuantities = !wildLifeCookie ? [] : parseJson(wildLifeCookie);

  // const wildLifeToDisplay = wildLifeQuantities.find((wildLifeQuantity) => {
  // return wildLifeQuantity.id === wildLifeAnimalFromObject.id;
  // });

  const sizesArray = JSON.parse(wildLifeAnimalFromObject.size);
  const firstSizeObject = sizesArray[0];
  const smallSize = firstSizeObject.small;
  const mediumSize = firstSizeObject.medium;
  const largeSize = firstSizeObject.large;

  console.log('wildlife', wildLifeAnimalFromObject);
  console.log('size', wildLifeAnimalFromObject.size[0]);
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
      <ChangeQuantityButton wildLifeId={wildLifeAnimalFromObject.id} />
      <div>
        <div>{wildLifeAnimalFromObject.name}</div>
        <div data-test-id="product-price">
          {wildLifeAnimalFromObject.price} euros
        </div>
        <div>small size : {smallSize}</div>
        <div>medium size :{mediumSize}</div>
        <div>large size : {largeSize}</div>
      </div>
    </div>
  );
}
