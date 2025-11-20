// children is a special prop that receives nested content between opening/closing tags
// Examples:
// - Text: <Salutation>Hello</Salutation>
// - JSX: <Salutation><strong>Bold text</strong></Salutation>
// - Variables: <Salutation>{message}</Salutation>

export function Salutation({ children }: { children: React.ReactNode /* Typing for children prop */ }) {
    return <p>{children}</p>;
}