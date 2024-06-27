import { useSearchParams } from "next/navigation";

const SearchBody = () => {
  const queryParams = useSearchParams();
  const query = queryParams.toString();
  return (
    <>
      <h2>Search params: {query}</h2>
      <br />
    </>
  );
};

export default SearchBody;
