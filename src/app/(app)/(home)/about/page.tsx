import Image from "next/image";

const Page = () => {
    return (
        <div>
            <title>About</title>
            <h1 className="flex flex-col items-center">A place where you can share your knowledge
            </h1>

            <Image src="/coffee_chat.webp"
            alt="Image of coffee chat"
            width={400}
            height={400}
            />
        </div>
    );
}

export default Page;