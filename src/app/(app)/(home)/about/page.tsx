import Image from "next/image";

const Page = () => {
    return (
        <div>
            <main>
                <header>
                    <h1>About BrewMarket</h1>
                </header>
            <section>
                 <img src="/coffee_chat.webp" alt="About BrewMarket" 
                 width={500} height={500}/>
            <p>
            BrewMarket connects coffee shop owners with coffee enthusiasts. 
            Buy premium beans, equipment, and everything you need for the perfect brew.
            </p>
            </section>
            </main>
        </div>
    );
}

export default Page;