import { Button, NavItem, Stack } from "react-bootstrap";
import { useCart } from "../context/cart-context";
import storeData from "../data/items.json";
import { formatCurrency } from "../utils/format-currency";

type CartItemProp = {
  id: number;
  quantity: number;
};
export const CartItem = ({ id, quantity }: CartItemProp) => {

  const { removeFromCart } = useCart();
  const item = storeData.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className='d-flex align-items-center'>
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
            {item.name}{" "}
            {quantity>1 && (
                <span className="text-muted" style={{fontSize:'.65rem'}}>x{quantity}</span>
            )}
        </div>
        <div className="text-muted" style={{fontSize:'.75rem'}}>
            {formatCurrency(item.price)}
        </div>
      </div>
        <div>
            {formatCurrency(item.price*quantity)}
        </div>
        <Button onClick={() => removeFromCart(id)} size='sm' variant="outline-danger">&times;</Button>
    </Stack>
  );
};
