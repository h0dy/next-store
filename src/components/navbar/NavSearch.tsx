"use client";
import { useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const NavSearch = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || ""
  );
  const searchValue = searchParams.get("search");

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`/products?${params.toString()}`);
  }, 500);

  useEffect(() => {
    if (!searchValue) {
      setSearch("");
    }
  }, [searchValue]);

  return (
    <Input
      type="search"
      placeholder="Search Product"
      className="max-w-xs dark:bg-muted"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
    />
  );
};

export default NavSearch;
