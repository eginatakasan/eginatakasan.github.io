import { UIEventHandler, useCallback, useState } from "react";

export const useScrollHandler = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  const onScroll: UIEventHandler<HTMLDivElement> = useCallback(e => {
    if ((e.target as HTMLDivElement)?.scrollTop) {
      setScrollY((e.target as HTMLDivElement)?.scrollTop);
    }
  }, []);

  return {
    scrollY,
    onScroll
  };
}