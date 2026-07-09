import MaterialIcon from "@/components/MaterialIcon";
import {
  formatPrice,
  type Product,
  type ProductBadgeVariant,
} from "../constants";

const BADGE_STYLES: Record<ProductBadgeVariant, string> = {
  premium:
    "bg-primary-container text-on-primary-container md:bg-primary-container md:text-on-primary-container max-md:bg-primary max-md:text-white",
  organic:
    "bg-surface-container-high text-primary border border-primary/20 max-md:uppercase max-md:tracking-wider",
  gift: "bg-tertiary text-on-tertiary max-md:bg-tertiary-container max-md:text-white max-md:uppercase max-md:tracking-wider",
};

interface ProductCardProps {
  product: Product;
  onOrder: (productId: number) => void;
}

export default function ProductCard({ product, onOrder }: ProductCardProps) {
  return (
    <article className="product-card bg-surface-container-lowest border border-outline-variant/30 rounded-lg flex flex-col h-full overflow-hidden shadow-sm md:shadow-none md:p-md">
      <div className="relative mb-0 md:mb-md rounded-none md:rounded-lg overflow-hidden h-64 md:h-auto md:aspect-square bg-surface-container-low">
        <img
          alt={product.imageAlt}
          className="w-full h-full object-cover"
          src={product.image}
        />
        <span
          className={`absolute top-3 md:top-sm left-3 md:left-sm px-3 md:px-sm py-1 md:py-xs rounded-full font-label-sm text-label-sm ${BADGE_STYLES[product.badge.variant]}`}
        >
          {product.badge.label}
        </span>
      </div>

      <div className="p-4 md:p-0 flex flex-col flex-grow gap-2 md:gap-0">
        <div className="flex justify-between items-start md:block">
          <h3 className="font-headline text-headline-md text-on-surface mb-0 md:mb-xs">
            {product.name}
          </h3>
          <span className="font-headline text-headline-md text-primary md:hidden shrink-0 ml-2">
            {formatPrice(product.price, true)}
          </span>
        </div>

        <p className="text-on-surface-variant font-body-md text-body-md mb-0 md:mb-md flex-grow line-clamp-2 md:line-clamp-none">
          <span className="md:hidden">{product.descriptionMobile}</span>
          <span className="hidden md:inline">{product.description}</span>
        </p>

        <div className="flex flex-wrap gap-2 mt-2 md:hidden">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="bg-surface-container-high text-primary font-label-sm text-label-sm px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-auto pt-4 md:pt-0">
          <span className="hidden md:inline font-headline text-headline-md text-primary">
            {formatPrice(product.price)}
          </span>
          <button
            type="button"
            onClick={() => onOrder(product.id)}
            className="w-full md:w-auto bg-primary text-on-primary md:text-on-primary px-md py-4 md:py-sm rounded-lg font-label-md hover:bg-primary/90 transition-colors active:scale-95 flex justify-center items-center gap-2"
          >
            <MaterialIcon name="shopping_basket" className="md:hidden" />
            <span className="md:hidden">Đặt mua</span>
            <span className="hidden md:inline">Chọn mua</span>
          </button>
        </div>
      </div>
    </article>
  );
}
