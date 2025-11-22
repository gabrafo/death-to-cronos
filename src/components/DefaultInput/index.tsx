type DefaultInputProps = {
    id: string;
    labelText?: string;
    type: "text" | "number" | "search"; /* Defining the type of the props object */
} & React.ComponentProps<"input">; /* Extending the props object with all standard input attributes using TypeScript intersection */

export function DefaultInput({ id, labelText, type, ...rest }: DefaultInputProps) { {/* Destructuring the props object to get the type property */}
    return (
        <> {/* Fragment is a invisible wrapper, which does not create an element in HTML for itself */}
        {
            /* Conditional rendering: only render the label if labelText is provided */
            labelText ? <label htmlFor={id}>{labelText}</label> : ""
        }
        <input id={id} type={type} {...rest} />
        </>
    );
}