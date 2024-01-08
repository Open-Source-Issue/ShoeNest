import Link from "next/link"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from '../header/page'
import Image from "next/image"

export default function Component() {
  return (
    <div key="1" className="bg-black text-white">
      <Header />
      <div className="flex">
        <aside className="w-1/4 p-6 space-y-6 bg-black shadow-60">
          <div>
            <h2 className="text-xl font-semibold mb-3">Gender</h2>
            <ul className="space-y-2">
              <li>
                <input checked className="mr-2 text-yellow-500" type="checkbox" />
                <label htmlFor="nnxci7cja3">Men</label>
                <label htmlFor="men">Men</label>
              </li>
              <li>
                <input className="mr-2" id="women" type="checkbox" />
                <label htmlFor="women">Women</label>
              </li>
              <li>
                <input className="mr-2" id="kids" type="checkbox" />
                <label htmlFor="kids">Kids</label>
              </li>
              <li>
                <input className="mr-2" id="unisex" type="checkbox" />
                <label htmlFor="unisex">Unisex</label>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">Shoe Style</h2>
            <ul className="space-y-2">
              <li>
                <input checked className="mr-2" id="high-top" type="checkbox" />
                <label htmlFor="high-top">High Top</label>
              </li>
              <li>
                <input className="mr-2" id="low-top" type="checkbox" />
                <label htmlFor="low-top">Low Top</label>
              </li>
              <li>
                <input className="mr-2" id="slip-on" type="checkbox" />
                <label htmlFor="slip-on">Slip On</label>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Shoe Size</h2>
            <PlusIcon className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Shoe Color</h2>
            <PlusIcon className="h-6 w-6" />
          </div>
        </aside>
        <main className="w-3/4 p-6">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-400">Get the best deal on your favorite shoes.</p>
            <div className="flex items-center">
              <span className="text-gray-400 mr-4">Total Product 246 Items</span>
              <Select>
                <SelectTrigger id="sort">
                  <SelectValue className="text-black" placeholder="Relevance" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                  <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Image
                  alt="Shoe 1"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardHeader>
              <CardContent>
                <h2>Shoe 1</h2>
                <p>$100</p>
                <Button className="bg-black text-white">Add to Cart</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  alt="Shoe 2"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardHeader>
              <CardContent>
                <h2>Shoe 2</h2>
                <p>$120</p>
                <Button className="bg-black text-white">Add to Cart</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  alt="Shoe 3"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardHeader>
              <CardContent>
                <h2>Shoe 3</h2>
                <p>$150</p>
                <Button className="bg-black text-white">Add to Cart</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  alt="Shoe 4"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardHeader>
              <CardContent>
                <h2>Shoe 4</h2>
                <p>$200</p>
                <Button className="bg-black text-white">Add to Cart</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  alt="Shoe 5"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardHeader>
              <CardContent>
                <h2>Shoe 5</h2>
                <p>$250</p>
                <Button className="bg-black text-white">Add to Cart</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  alt="Shoe 6"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardHeader>
              <CardContent>
                <h2>Shoe 6</h2>
                <p>$300</p>
                <Button className="bg-black text-white">Add to Cart</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  alt="Shoe 7"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardHeader>
              <CardContent>
                <h2>Shoe 7</h2>
                <p>$350</p>
                <Button className="bg-black text-white">Add to Cart</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  alt="Shoe 8"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </CardHeader>
              <CardContent>
                <h2>Shoe 8</h2>
                <p>$400</p>
                <Button className="bg-black text-white">Add to Cart</Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
