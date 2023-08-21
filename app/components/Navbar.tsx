import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex w-full justify-between bg-rose-500 text-white py-4 px-6 fixed top-0 left-0 z-10">
      <h1>Pokémon Pedia</h1>
    </div>
  );
};

export default Navbar;
