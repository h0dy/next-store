import { SectionTitle } from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import { fetchUserFavorites } from "@/utils/actions";

const FavoritesPage = async () => {
  const favorites = await fetchUserFavorites();
  if (!favorites.length) return <SectionTitle text="You have no favorites" />;
  return (
    <div>
      <SectionTitle text="Favorites" />
      <ProductsGrid products={favorites.map((favorite) => favorite.product)} />
    </div>
  );
};

export default FavoritesPage;
