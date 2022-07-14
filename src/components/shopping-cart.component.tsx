import { Offcanvas, Stack } from "react-bootstrap"
import { useCart } from "../context/cart-context"
import { CartItem } from "./cart-item.component"
import storeData from '../data/items.json'
import { formatCurrency } from "../utils/format-currency"

type ShoppingCartProp = {
    isOpen: boolean
}
export const ShoppingCart = ({isOpen}:ShoppingCartProp) => {

    const{closeCart, cartItems} = useCart()

  

    return(
        <>
        <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item=>{
                        return <CartItem key={item.id} {...item}/>
                    })}
                    <div className="ms-auto fw-bold fs-5">
                        Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                              const item = storeData.find((i) => i.id === cartItem.id)
                              return total + (item?.price || 0) *cartItem.quantity
                        },0)
                        )}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    )
}