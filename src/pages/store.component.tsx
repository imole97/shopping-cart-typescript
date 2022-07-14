import { Col, Row } from 'react-bootstrap'
import { StoreItem } from '../components/store-item.component'
import storeData from '../data/items.json'
export const Store = () => {
    return( 
        <>
         <h1>Store</h1>
         <Row md={2} xs={1} lg={3} className='g-3'>
            {
                storeData.map(item => (
                    <Col key={item.id}><StoreItem {...item}/></Col>
                ))
            }
         </Row>
        </>
    )
}