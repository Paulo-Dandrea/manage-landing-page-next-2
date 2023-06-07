import s from "../page-components/PageFooter.module.scss";
import SvgComponent from "../styles/SvgComponent";
import { socialLinksImages } from "../styles/socialLinksImages";


export const SocialLinksList = () => {
  return (
    <ul className="flex gap-1" role="list">
      {socialLinksImages.map(({ ariaLabel, pathD }, idx) => (
        <div key={idx} className={s["logo-container"]}>
          {/* TODO: I'm not succefully aplying sizes on the svgs. */}
          <SvgComponent
            svgClassName={s["social-icon"]}
            ariaLabel={ariaLabel}
            pathD={pathD}
          />
        </div>
      ))}
    </ul>
  );
};
