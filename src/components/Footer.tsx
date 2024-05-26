export const Footer = ({bg}: { bg: string }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-4 text-gray-300 text-center" style={{backgroundColor: bg}}>
            &copy; {currentYear} Bug Report. All rights reserved.
        </footer>
    );
}
