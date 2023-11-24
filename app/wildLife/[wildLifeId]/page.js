import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getWildLifeAnimal } from '../../../database/wildLife';
import ChangeQuantityButton from './ChangeQuantityButton';
import styles from './wildLIfePageDynamic.module.css';

export function generateMetadata({ params }) {
  const singleAnimal = getWildLifeAnimal(Number(params.wildLifeId));
  console.log(singleAnimal);
  return {
    title: singleAnimal.name,
  };
}

export default async function WildLifeAnimal(props) {
  const wildLifeAnimalFromObject = await getWildLifeAnimal(
    Number(props.params.wildLifeId),
  );

  if (!wildLifeAnimalFromObject) {
    return notFound();
  }

  const sizesArray = JSON.parse(wildLifeAnimalFromObject.size);
  const firstSizeObject = sizesArray[0];
  const smallSize = firstSizeObject.small;
  const mediumSize = firstSizeObject.medium;
  const largeSize = firstSizeObject.large;

  console.log('wildlife', wildLifeAnimalFromObject);
  console.log('size', wildLifeAnimalFromObject.size[0]);
  return (
    <div className={styles.cartContainter}>
      <Image
        data-test-id="product-image"
        src={`/images/${wildLifeAnimalFromObject.name}.jpg`}
        width={400}
        height={500}
        alt={wildLifeAnimalFromObject.name}
      />

      <div className={styles.infoPainting}>
        <h1>{wildLifeAnimalFromObject.name}</h1>
        <div data-test-id="product-price">
          Price: {wildLifeAnimalFromObject.price} euros
        </div>
        <div>sizes</div>
        <div className={styles.size}>small : {smallSize}</div>
        <div className={styles.size}>medium :{mediumSize}</div>
        <div className={styles.size}>large : {largeSize}</div>
        <ChangeQuantityButton wildLifeId={wildLifeAnimalFromObject.id} />
      </div>
    </div>
  );
}
