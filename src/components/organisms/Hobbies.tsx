import Image from "next/image";
import Missy from '../../assets/images/Missy.png';
import Controller from '../../assets/images/Controller.png';
import Beach from '../../assets/images/Beach.png';
import Brush from '../../assets/images/Brush.png';

const Hobbies = () => {

    return (
        <section
            className="flex flex-col px-10 pt-10 pb-5 justify-start md:flex-wrap md:flex-row md:py-5 md:px-16 xl:mx-auto xl:max-w-[1280px] gap-6 w-full relative"
            aria-label="Eginata Kasan's Hobbies"
        >
            <div className="absolute inset-x-16 top-0 border-t border-solid border-t-lightGray opacity-60"></div>
            <div className="flex flex-col gap-4">
                <h2 className="text-xl font-tokyo text-textBlack">What I Like</h2>
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col bg-accent w-[100] h-[100] rounded-full overflow-hidden">
                        <Image src={Missy} alt="My Cat, Missy" width={100} height={100} />
                    </div>
                    <div className="flex flex-row gap-4 bg-accent w-[100] h-[100] rounded-full overflow-hidden">
                        <Image src={Controller} alt="Games" width={100} height={100} />
                    </div>
                    <div className="flex flex-row gap-4 w-[100] h-[100] rounded-full overflow-hidden">
                        <Image src={Beach} alt="Hobby 1" width={100} height={100} />
                    </div>
                    <div className="flex flex-row gap-4 bg-accent w-[100] h-[100] rounded-full overflow-hidden">
                        <Image src={Brush} alt="Brush" width={100} height={100} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hobbies;