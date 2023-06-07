import Image from "next/image";
import { Anchor } from "../components/ListAnchors";
import s from '../page-components/PageFooter.module.scss';

export const SocialLinksList = () => {
    const socialLinksImages: Anchor[] = [
      { ariaLabel: "facebook" },
      { ariaLabel: "youtube" },
      { ariaLabel: "twitter" },
      { ariaLabel: "pinterest" },
      { ariaLabel: "instagram" },
    ];
  
    return (
      <ul className="flex gap-1" role="list">
        {socialLinksImages.map(({ ariaLabel }, idx) => (
          <div key={idx} className={s['logo-container']}>
            <Image
              className="icon"
              src={`images/icon-${ariaLabel}.svg`}
              alt={ariaLabel!} // LEARNED: "!" assured that ariaLabel is not null or undefined
              fill
            />
          </div>
        ))}
      </ul>
    );
  };