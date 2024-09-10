'use client'
import { getProductsByName } from '@/lib/actions/product.actions';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CiSearch } from 'react-icons/ci';

const SearchBar = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const product = await getProductsByName(search);

        router.push(`/products/search?query=${search}`);  // Pass search term as query param
        console.log(product.length);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="flex justify-end">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex items-center p-2 pl-4 border rounded-full">
          <input
            type="text"
            placeholder={t('search')}
            className="outline-none flex-grow text-gray-600"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="p-2 bg-primary-blue hover:bg-primary-blue/80 rounded-full"
          >
            <CiSearch className="text-xl text-white" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
