import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useFavourites = () => {
  const { data, error, isLoading } = useSWR("/api/favourites", fetcher);

  return {
    data,
    error,
    isLoading,
  };
};
export default useFavourites;
