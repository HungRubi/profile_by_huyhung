import { useState } from 'react';
import Welcome from '../pages/Welcome';
import { navItem } from '../utils/constants';

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Mặc định item đầu tiên được active

    return (
        <div className="relative">
            <div className="flex items-center justify-between px-[10%] pt-5">
                <div className="flex items-center gap-2">
                    <h2 className='text-2xl font-bold bg-text'>
                        Hung
                    </h2>
                </div>

                <div className="flex items-center gap-20 z-5000">
                    {navItem.map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.link}`}
                            onClick={() => setActiveIndex(index)}
                            className={`
                                cursor-pointer text-sm font-bold capitalize
                                text-color item_nav py-2.5 bg-clip-text
                                ${activeIndex === index ? 'active' : ''}
                            `}
                        >
                            {item.text}
                        </a>
                    ))}
                </div>
            </div>

            <Welcome />
        </div>
    );
};

export default Navbar;
