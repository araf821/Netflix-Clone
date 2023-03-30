import axios from "axios";
import useFavourites from "@/hooks/useFavourites";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useCallback, useMemo } from "react";

interface FavouriteButtonProps {
  movieId: string;
}

const FavouriteButton: React.FC<FavouriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavourites } = useFavourites();
  const { data: currentUser, mutate } = useCurrentUser();

  const isFavourite = useMemo(() => {
    const list = currentUser?.favouriteIds || [];

    return list.includes(movieId);
  }, [currentUser, movieId]);

  const updateFavourites = useCallback(async () => {
    let response;

    if (isFavourite) {
      response = await axios.delete("/api/favourite", { data: { movieId } });
    } else {
      response = await axios.post("/api/favourite", { movieId });
    }

    const updatedList = response?.data?.favouriteIds;

    mutate({
      ...currentUser,
      favouriteIds: updatedList,
    });

    mutateFavourites();
  }, [movieId, isFavourite, currentUser, mutate, mutateFavourites]);

  const Icon = isFavourite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
    onClick={updateFavourites}
    className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
      <Icon className="text-white" size={20} />
    </div>
  );
};
export default FavouriteButton;
