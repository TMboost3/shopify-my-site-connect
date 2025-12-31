import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductByHandle, ShopifyProduct } from "@/lib/shopify";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { Loader2, ArrowLeft } from "lucide-react";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const loadProduct = async () => {
      if (!handle) return;
      
      try {
        const productData = await fetchProductByHandle(handle);
        setProduct(productData);
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [handle]);

  const handleAddToCart = () => {
    if (!product) return;
    
    const variant = product.node.variants.edges[selectedVariant]?.node;
    
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

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex justify-center items-center h-[60vh]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Button>
        </div>
      </div>
    );
  }

  const { node } = product;
  const currentVariant = node.variants.edges[selectedVariant]?.node;
  const images = node.images.edges;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {images.length > 0 ? (
              <>
                <div className="aspect-square overflow-hidden rounded-lg bg-secondary/20">
                  <img
                    src={images[selectedImage].node.url}
                    alt={images[selectedImage].node.altText || node.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {images.length > 1 && (
                  <div className="grid grid-cols-4 gap-4">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-square overflow-hidden rounded-lg bg-secondary/20 border-2 transition-all ${
                          selectedImage === index ? 'border-accent' : 'border-transparent'
                        }`}
                      >
                        <img
                          src={image.node.url}
                          alt={image.node.altText || `${node.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="aspect-square flex items-center justify-center bg-secondary/20 rounded-lg">
                <p className="text-muted-foreground">No image available</p>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-heading text-3xl md:text-4xl font-black tracking-wide mb-4">
                {node.title.toUpperCase()}
              </h1>
              <p className="font-heading text-3xl font-bold">
                {currentVariant.price.currencyCode} {parseFloat(currentVariant.price.amount).toFixed(2)}
              </p>
            </div>

            {node.description && (
              <div className="prose prose-sm max-w-none">
                <p className="text-muted-foreground">{node.description}</p>
              </div>
            )}

            {/* Variant Selection */}
            {node.options.map((option) => (
              option.values.length > 1 && (
                <div key={option.name} className="space-y-3">
                  <label className="font-heading font-bold text-sm tracking-wide">
                    {option.name.toUpperCase()}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {option.values.map((value, index) => (
                      <Button
                        key={value}
                        variant={selectedVariant === index ? "default" : "outline"}
                        onClick={() => setSelectedVariant(index)}
                        className="font-heading font-bold"
                      >
                        {value}
                      </Button>
                    ))}
                  </div>
                </div>
              )
            ))}

            {/* Add to Cart */}
            <div className="space-y-4 pt-4">
              <Button 
                onClick={handleAddToCart}
                disabled={!currentVariant.availableForSale}
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-white font-heading font-bold text-lg"
              >
                {currentVariant.availableForSale ? 'ADD TO CART' : 'OUT OF STOCK'}
              </Button>

              {!currentVariant.availableForSale && (
                <p className="text-sm text-muted-foreground text-center">
                  This product is currently unavailable
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
