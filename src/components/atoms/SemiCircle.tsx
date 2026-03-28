const SemiCircle = ({ className }: { className?: string }) => {
  return (
    <div
      className={`w-[min(10%, 10px)] h-[40px] bg-white relative rounded-t-full ${className}`}
    ></div>
  );
};

export default SemiCircle;
