import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import clsx from 'clsx';

type ArrowIconProps = {
    direction: 'left' | 'right' | 'up' | 'down';
    styling?: string;
};

const ArrowIcon = (props: ArrowIconProps) => {
    const customStyling = clsx(
        props.styling
            ? props.styling
            : 'text-gray-500 cursor-pointer w-10 h-10',
        props.direction === 'left' && '',
        props.direction === 'right' && 'rotate-180',
        props.direction === 'up' && 'rotate-90',
        props.direction === 'down' && 'rotate-270'
    );

    return (
        <div className={customStyling}>
            <MdKeyboardArrowLeft />
        </div>
    );
};

export default ArrowIcon;
