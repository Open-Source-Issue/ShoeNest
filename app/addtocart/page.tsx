/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CHP2EnbHur6
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="bg-[#121212] text-white min-h-screen p-8">
      <header className="flex justify-between items-center mb-12">
        <AppleIcon className="text-white h-6" />
        <nav className="flex space-x-6">
          <Link className="block text-white" href="#">
            NEW
          </Link>
          <Link className="block text-white" href="#">
            SHOP
          </Link>
          <Link className="block text-white" href="#">
            CART
          </Link>
        </nav>
        <MenuIcon className="text-white h-6" />
      </header>
      <main className="flex justify-between">
        <section className="w-2/3">
          <h1 className="text-4xl font-bold mb-2">Your Cart</h1>
          <p className="mb-8">You are eligible for free standard shipping in the US.</p>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span>Product</span>
              <span className="flex-1 text-center">Quantity</span>
              <span>Total</span>
            </div>
            <hr className="border-t border-gray-600" />
          </div>
          <div className="flex flex-col space-y-6">
            <div className="flex items-center">
              <img
                alt="Nike Basketball Kobe Bryan Yellow"
                className="h-20 w-20 mr-4"
                height="80"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="80"
              />
              <div className="flex flex-col flex-1 mr-4">
                <span className="font-bold">Nike Basketball Kobe Bryan</span>
                <span>US 7.5 / Men / Yellow</span>
                <span className="font-bold mt-1">$ 350.00</span>
                <Button className="bg-transparent text-yellow-400 border border-yellow-400 mt-2 py-1 px-2">
                  Remove
                </Button>
              </div>
              <div className="flex items-center justify-center flex-1 mr-4">
                <Button className="bg-yellow-400 text-black px-2">-</Button>
                <span className="mx-2">1</span>
                <Button className="bg-yellow-400 text-black px-2">+</Button>
              </div>
              <span className="font-bold">$ 350.00</span>
            </div>
            <div className="flex items-center">
              <img
                alt="Nike Basketball Kobe Bryan Blue"
                className="h-20 w-20 mr-4"
                height="80"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="80"
              />
              <div className="flex flex-col flex-1 mr-4">
                <span className="font-bold">Nike Basketball Kobe Bryan</span>
                <span>US 8.5 / Men / Blue</span>
                <span className="font-bold mt-1">$ 250.00</span>
                <Button className="bg-transparent text-yellow-400 border border-yellow-400 mt-2 py-1 px-2">
                  Remove
                </Button>
              </div>
              <div className="flex items-center justify-center flex-1 mr-4">
                <Button className="bg-yellow-400 text-black px-2">-</Button>
                <span className="mx-2">1</span>
                <Button className="bg-yellow-400 text-black px-2">+</Button>
              </div>
              <span className="font-bold">$ 250.00</span>
            </div>
          </div>
        </section>
        <aside className="w-1/3 pl-8">
          <div className="bg-[#1E1E1E] p-6">
            <div className="flex justify-between mb-4">
              <span className="font-bold text-lg">Total</span>
              <span className="font-bold text-lg">$ 600.00</span>
            </div>
            <p className="text-sm mb-6">
              Shipping & taxes calculated at checkout. Orders outside of the US may be subject to import fees / duties.
            </p>
            <Button className="bg-yellow-400 text-black w-full py-3">CHECKOUT</Button>
          </div>
          <div className="mt-6">
            <span className="text-sm block mb-2">We Accept</span>
            <div className="flex space-x-2">
              <CreditCardIcon className="h-6" />
              <CreditCardIcon className="h-6" />
              <AppleIcon className="h-6" />
              <CreditCardIcon className="h-6" />
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}

function AppleIcon(props) {
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
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  )
}


function CreditCardIcon(props) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
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
