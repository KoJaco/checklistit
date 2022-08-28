import { ChangeEvent } from 'react';

type TextInputProps = {
    id: string;
    type: 'text';
    value: string;
    placeholder?: string;
    // tailwind custom styling
    customInputStyling?: string;
    setUserInput: (event: ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({
    id,
    type,
    value,
    setUserInput,
    ...props
}: TextInputProps) => {
    const inputStyling =
        'appearance-none text-left p-0 pl-3 w-full text-left border border-gray-500 dark:border-white shadow-sm text-sm font-medium rounded text-gray-500 dark:text-white bg-white hover:shadow-md hover:scale-105 focus:outline-none focus:none focus:scale-105';

    return (
        <input
            type={type}
            id={id}
            value={value}
            placeholder={props.placeholder}
            className={
                props.customInputStyling
                    ? props.customInputStyling
                    : inputStyling
            }
        ></input>
    );
};

export default TextInput;
