import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
     <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-amber-900 mb-6">
            BrewMarket
          </h1>
          <p className="text-xl text-amber-700 mb-8 max-w-2xl mx-auto">
            Connect coffee shop owners with coffee enthusiasts. Buy premium beans, 
            equipment, and everything you need for the perfect brew.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/products">Shop Coffee</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/sell">Start Selling</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <Input 
            type="search" 
            placeholder="Search for coffee beans, equipment..." 
            className="w-full"
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Coffee Beans</h3>
            <p className="text-gray-600 mb-4">Premium beans from around the world</p>
            <Button variant="outline">Explore Beans</Button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Equipment</h3>
            <p className="text-gray-600 mb-4">Professional brewing equipment</p>
            <Button variant="outline">Browse Equipment</Button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Accessories</h3>
            <p className="text-gray-600 mb-4">Cups, filters, and more</p>
            <Button variant="outline">View Accessories</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
