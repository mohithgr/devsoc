export default function Container({ children, className = "" }) {
    return (
        <div className={` p-2 max-w-400 mx-auto ${className}`}>
            {children}
        </div>
    );
}