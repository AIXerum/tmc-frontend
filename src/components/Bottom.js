export default function Bottom() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full bg-black text-gray-300 font-sans text-sm font-normal leading-6 flex justify-center items-center">
      <div className="w-[78%] border-t-2 border-[#474747] py-12 text-center md:text-left md:py-4">
        Copyright © The Motor Company {currentYear}. All rights reserved.
      </div>
    </div>
  );
}
