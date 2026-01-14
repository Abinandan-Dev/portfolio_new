import Image from "next/image";
export default function Navbar() {
  return (

<nav className="w-full flex justify-center py-2 sticky top-0 z-50 px-4 ">
  <div className="flex items-center gap-8 bg-white shadow-sm rounded-full px-6">
    
    {/* Profile */}
    {/* <div className="flex items-center gap-2">
      <Image
        src="/images/profile.png"
        alt="Abinandan"
        width={32}
        height={32}
        className="rounded-full object-cover"
      />
    </div> */}

    {/* Links */}
    <ul className="hidden md:flex gap-6 text-sm text-gray-600">
      <li className="cursor-pointer hover:text-black">Home</li>
      <li className="cursor-pointer hover:text-black">About</li>
      <li className="cursor-pointer hover:text-black">Projects</li>
      <li className="cursor-pointer hover:text-black">Blogs</li>
    </ul>

    {/* Button */}
    <button className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm">
      Contact
    </button>
  </div>
</nav>
  )
}