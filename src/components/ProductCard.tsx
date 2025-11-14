import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const navigate = useNavigate();
  const { node } = product;
  
  const variant = node.variants.edges[0]?.node;
  const isOutOfStock = !variant?.availableForSale;

  const handleAddToCart = () => {
    if (!variant) {
      toast.error("Product unavailable");
      return;
    }

    if (isOutOfStock) {
      toast.error("This item is out of stock", {
        position: "top-center"
      });
      return;
    }

    const cartItem = {
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart", {
      position: "top-center"
    });
  };

  const price = node.priceRange.minVariantPrice;
  const image = node.images.edges[0]?.node;

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border border-border hover:border-accent bg-card animate-fade-up">
      <CardHeader className="p-0">
        <div 
          className="aspect-square overflow-hidden bg-muted/30 relative cursor-pointer"
          onClick={() => navigate(`/product/${node.handle}`)}
        >
          {image ? (
            <>
              <img
                src={image.url}
                alt={image.altText || node.title}
                className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${isOutOfStock ? 'opacity-50 grayscale' : ''}`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              {isOutOfStock && (
                <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-md font-heading font-bold text-sm">
                  OUT OF STOCK
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              No image
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 
          className="font-heading font-bold text-lg mb-2 line-clamp-2 tracking-wide cursor-pointer group-hover:text-accent transition-colors"
          onClick={() => navigate(`/product/${node.handle}`)}
        >
          {node.title.toUpperCase()}
        </h3>
        {node.description && (
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {node.description}
          </p>
        )}
        <p className="font-heading text-xl font-bold">
          {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={handleAddToCart} 
          disabled={isOutOfStock}
          className="w-full bg-accent hover:bg-accent/90 text-white font-heading font-bold group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isOutOfStock ? 'OUT OF STOCK' : 'ADD TO CART'}
        </Button>
      </CardFooter>
    </Card>
  );
};
