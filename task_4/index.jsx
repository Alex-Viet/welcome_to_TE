import { useCallback, useState } from "react";

const BaseBlock = ({ mouseEnterCallbak, children }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = useCallback(() => {
    setActive(true);
    mouseEnterCallbak();
  }, [mouseEnterCallbak]);

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {children}
    </div>
  );
};

export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => (
  <BaseBlock mouseEnterCallbak={mouseEnterCallbak}>
    <img src={imgSrc} alt={imgAlt} />
  </BaseBlock>
);

export const Block2 = ({ mouseEnterCallbak, content }) => (
  <BaseBlock mouseEnterCallbak={mouseEnterCallbak}>
    <p>{content}</p>
  </BaseBlock>
);

export const Block3 = ({ mouseEnterCallbak, userData }) => (
  <BaseBlock mouseEnterCallbak={mouseEnterCallbak}>
    <address>
      country: {userData.country}, street: {userData.street}
    </address>
  </BaseBlock>
);
