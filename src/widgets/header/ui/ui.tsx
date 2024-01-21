import Logo from '#/logo/logo.svg';
import { List, Plus } from 'lucide-react';

export const Header = ({}) => {
  return (
    <header className="fixed flex w-full flex-row items-center px-2 py-3">
      <a
        href="/"
        className="absolute hidden h-[40px] w-[200px] cursor-pointer select-none rounded-md md:block">
        <img src={Logo.src} alt="header" />
      </a>
      <div className="mx-auto flex gap-4">
        <a href="/">
          <div className="flex cursor-pointer select-none items-center gap-1 rounded-md border-2 border-blue-700 px-2 py-1 shadow-sm shadow-blue-800 duration-300 hover:bg-blue-700 active:border-indigo-900 active:bg-indigo-900 active:shadow-indigo-900">
            <List />
            Todos
          </div>
        </a>
        <a href="/create">
          <div className="flex cursor-pointer select-none items-center gap-1 rounded-md border-2 border-blue-700 px-2 py-1 shadow-sm shadow-blue-800 duration-300 hover:bg-blue-700 active:border-indigo-900 active:bg-indigo-900 active:shadow-indigo-900">
            <Plus />
            Create todo
          </div>
        </a>
      </div>
    </header>
  );
};
