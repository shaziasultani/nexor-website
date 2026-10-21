import React from 'react'

export default function TrustedIndustries() {
const logos = [
{ src: 'https://framerusercontent.com/images/gY7Fox93A9LL5fdXsnr5KmSjc.svg?width=133&height=27', width: 133 },
{ src: 'https://framerusercontent.com/images/un5aXINFXBu9n6TWkUSJwfDTIfs.svg?width=181&height=31', width: 181 },
{ src: 'https://framerusercontent.com/images/rAw0t0mg7nFcAIbiiNXW45inI8.svg?width=169&height=45', width: 169 },
{ src: 'https://framerusercontent.com/images/VbPYEwufjyulZz7XrLnOZDnLcA.svg?width=96&height=22', width: 96 },
{ src: 'https://framerusercontent.com/images/un5aXINFXBu9n6TWkUSJwfDTIfs.svg?width=181&height=31', width: 181 },
{ src: 'https://framerusercontent.com/images/0b4h13wQ3So4furL4D1zhwyKk.svg?width=198&height=60', width: 198 },
{ src: 'https://framerusercontent.com/images/rAw0t0mg7nFcAIbiiNXW45inI8.svg?width=169&height=45', width: 169 },
{ src: 'https://framerusercontent.com/images/rAw0t0mg7nFcAIbiiNXW45inI8.svg?width=169&height=45', width: 169 },
{ src: 'https://framerusercontent.com/images/2gqDzbrt719QuI29o9C1jxB8g.svg?width=89&height=26', width: 89 },
]

return ( <section className="overflow-hidden bg-[#f8f7f4] py-12 sm:py-16 md:py-20"> <div className="mb-8 px-4 text-center sm:mb-10 md:mb-12"> <h1 className="text-sm font-bold tracking-tight text-gray-900 sm:text-2xl md:text-2xl">
Trusted by 500+ Business Industries </h1> </div>

  <div className="w-full overflow-hidden">
    <div className="flex w-max animate-logo-marquee">
      {[0, 1].map((group) => (
        <div
          key={group}
          className="flex shrink-0 items-center gap-10 pr-10 sm:gap-16 sm:pr-16 md:gap-20 md:pr-20"
        >
          {logos.map((logo, index) => (
            <img
              key={`${group}-${index}`}
              src={logo.src}
              alt=""
              width={logo.width}
              className="h-auto max-w-none shrink-0 object-contain"
            />
          ))}
        </div>
      ))}
    </div>
  </div>
</section>


)
}