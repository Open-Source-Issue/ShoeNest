import Link from "next/link"
import Header from '../ui/Header.tsx';

export function Component() {
  return (
    <div key="1" className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Experience the comfort of ShowNest shoes.
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Let your feet breathe with our new collection of shoes.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-red-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-red-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-500 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Best Sellers</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover the most popular shoes in our collection.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Product 1"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height={310}
                src="/placeholder.svg"
                width={550}
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Glimmer Lamps</h3>
                      <p className="text-gray-500 dark:text-gray-400">UV protection</p>
                      <h4 className="font-semibold text-base md:text-lg">$29.99</h4>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Leather Crossbody Bag</h3>
                      <p className="text-gray-500 dark:text-gray-400">Stylish and practical</p>
                      <h4 className="font-semibold text-base md:text-lg">$49.99</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="grid grid-cols-3 gap-4 w-full">
          <div>
            <h3 className="text-lg font-bold">Let Us Help You</h3>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Customer Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Returns & Exchanges
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Shipping Information
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-bold">Useful Links</h3>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Size Guide
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Store Locator
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              FAQs
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-bold">Company</h3>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              About Us
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Careers
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <Link href="#">
            <FacebookIcon className="h-6 w-6" />
          </Link>
          <Link href="#">
            <TwitterIcon className="h-6 w-6" />
          </Link>
          <Link href="#">
            <InstagramIcon className="h-6 w-6" />
          </Link>
          <Link href="#">
            <LinkedinIcon className="h-6 w-6" />
          </Link>
        </div>
      </footer>
      <div className="flex flex-col items-center justify-center py-4 bg-gray-100 dark:bg-gray-800 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© ShowNest. All rights reserved.</p>
        <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </div>
    </div>
  )
}


function ShoppingCartIcon(props) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
