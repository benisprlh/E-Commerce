'use client';

import { Dispatch, SetStateAction } from 'react';

export default function Search({ search, setSearch }: { search: string; setSearch: Dispatch<SetStateAction<string>> }) {
  function handleSearch(e: any) {
    setSearch(e.target.value);
  }

  return (
    <div className="flex flex-row justify-center">
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w" onChange={handleSearch} />
    </div>
  );
}
