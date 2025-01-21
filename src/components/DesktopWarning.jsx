import Image from "next/image";

export default function DesktopWarning() {
    return (
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md text-center">
            <Image
                src="/favicon.svg"
                alt="Company Logo"
                width={100}
                height={100}
                className="mx-auto mb-6"
            />
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Mobile Only</h1>
            <p className="text-xl mb-6 text-gray-600">
                Our platform is currently optimized for mobile devices only. Please switch to a mobile device to access our
                content.
            </p>
            <p className="bg-gray-100 p-4 rounded-lg mb-6 text-sm text-gray-500">
                We're working on bringing the full experience to desktop soon. Thank you for your patience!
            </p>
        </div>
    )
}