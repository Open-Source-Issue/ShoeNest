import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <>
      <header className="bg-[#000000] text-white rounded-full shadow-md shadow-black top-10 right-10 left-10 fixed">
        <div className="container mx-auto flex items-center justify-between p-5">
          <div>
            <h1>ShoeNest</h1>
          </div>
          <nav className="flex space-x-20">
            <Link className="listColor" href="#">
              HOME
            </Link>
            <Link className="listColor" href="#">
              COLLECTION
            </Link>
            <Link className="listColor" href="#">
              ABOUT
            </Link>
            <Link className="listColor" href="#">
              CONTACT
            </Link>
          </nav>
          <div className="flex items-center">
            <div className="hidden absolute z-[99] right-[25px] top-[25px] font-[25px] cursor-pointer"><CloseIcon /></div>
            <div className="fixed hidden top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  bg-gradient-to-br from-red-900 to-green-900 h-full w-full">
              <div className="absolute top-[50%] left-[50%]" ><SearchIcon  /></div>
              <div className="hidden absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-[50px] w-[400px]">
                <input type="text" className="h-full w-full bg-transparent border-none outline-none text-[20px] font-normal" />
                <label className="absolute top-[50%] left-0 -translate-y-1/2 text-white opacity-10 pointer-events-none">Type to Search...</label>
                <div className="absolute h-[3px] w-full bottom-0 bg-white"></div>
                <SearchIcon className="   text-white absolute w-[50px] leading-10 top-3 right-0" />
              </div>
            </div>
            <Button className="border-[#FFD700]  border-2 rounded-3xl text-white px-10" variant="secondary">
              LOGIN
            </Button>
          </div>
        </div>
      </header>
    </>
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


function ArrowLeftIcon(props) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function ArrowRightIcon(props) {
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
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function CloseIcon(props) {
  return (
    <svg
      {...props}
      viewPort="0 0 12 12" version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <line x1="1" y1="11"
        x2="11" y2="1"
        stroke="white"
        stroke-width="2" />
      <line x1="1" y1="1"
        x2="11" y2="11"
        stroke="white"
        stroke-width="2" />
    </svg>
  )
}


