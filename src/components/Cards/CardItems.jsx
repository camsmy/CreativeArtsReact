import { Col,Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core';
import { faQuestion, faMagnifyingGlass, faRocket, faInfoCircle, faEarthAmerica, faPlaneArrival } from '@fortawesome/free-solid-svg-icons'
library.add(faQuestion,faMagnifyingGlass, faRocket, faInfoCircle, faEarthAmerica, faPlaneArrival);

function CardItems({iconName,title,body}) {
    return (
        <Col xs={12} md={6}
        className="py-2 py-sm-3">
            <Card.Title className="card-title4 d-flex gap-4 flex-column text-center
            flex-lg-row text-lg-start">
                <FontAwesomeIcon icon={`fa-sharp ${iconName}`}
                className="card-icon" />
                {title}
            </Card.Title>
            <Card.Text className='text-center text-lg-start'>
                {body}
            </Card.Text>
        </Col>
    )
}

export default CardItems