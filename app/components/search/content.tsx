import { useSearchParams } from "next/navigation";

const SearchContent = () => {
  const queryParams = useSearchParams();
  const query = queryParams.toString();
  return (
    <>
      <h2>Search params: {query}</h2>
      <br />
    </>
  );
};

export default SearchContent;
