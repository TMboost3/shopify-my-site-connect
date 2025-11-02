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
  
  const handleAddToCart = () => {
    const variant = node.variants.edges[0]?.node;
    
    if (!variant) {
      toast.error("Product unavailable");
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
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-accent">
      <CardHeader className="p-0">
        <div 
          className="aspect-square overflow-hidden bg-secondary/20 relative cursor-pointer"
          onClick={() => navigate(`/product/${node.handle}`)}
        >
          {image ? (
            <img
              src={image.url}
              alt={image.altText || node.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              No image
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 
          className="font-heading font-bold text-lg mb-2 line-clamp-2 tracking-wide cursor-pointer hover:text-accent transition-colors"
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
          className="w-full bg-accent hover:bg-accent/90 text-white font-heading font-bold"
        >
          ADD TO CART
        </Button>
      </CardFooter>
    </Card>
  );
};
