import { UIEventHandler, useCallback, useState } from "react";

export const useScrollHandler = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  const onScroll: UIEventHandler<HTMLDivElement> = useCallback(e => {
    setScrollY(e.target.scrollTop);
  }, []);

  return {
    scrollY,
    onScroll
  };
}