const Text = ({ children }: { children: React.ReactNode }) => (
  <p className="[font-size: 16px] md:text-[18px] text-textBlack m-0">
    {children}
  </p>
);
const Title = ({ children }: { children: React.ReactNode }) => (
  <h1 className="[font-size: 42px] md:text-[52px] md:[line-height: 1.4] text-accent m-0 font-extrabold">
    {children}
  </h1>
);
const HeadingOne = ({ children }: { children: React.ReactNode }) => (
  <h1 className="[font-size: 32px] md:text-[40px] md:[line-height: 1.2] text-accent m-0 font-extrabold">
    {children}
  </h1>
);
const HeadingTwo = ({ children }: { children: React.ReactNode }) => (
  <h2 className="[font-size: 20px] md:text-[24px] text-textBlack m-0 font-bold">
    {children}
  </h2>
);
const Small = ({ children }: { children: React.ReactNode }) => (
  <span className="[font-size: 14px] md:text-[16px] text-textBlack m-0 font-light">
    {children}
  </span>
);

export default Object.assign(Text, { Title, HeadingOne, HeadingTwo, Small });
