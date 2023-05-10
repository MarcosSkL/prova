import { Card, Col, Row, Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import apiDeputa from '../../services/apiArt'
import Link from 'next/link'
import { data } from 'autoprefixer'

const Detalhes = ({ art }) => {

    return (
        <Pagina titulo={art.data.title}>
            <Row>

                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={"https://www.artic.edu/iiif/2/" + art.data.image_id + "/full/843,/0/default.jpg"} />
                        <Card.Body className='bg-gradient-to-tl from-indigo-100 via-indigo-400 to-blue-900 text-white'>
                            <Card.Title className='h5'>{art.data.title}</Card.Title>

                            <div className="d-flex flex-column align-items-start pt-1">
                                <Link href={"https://www.artic.edu/iiif/2/" + art.data.image_id + "/full/843,/0/default.jpg"} className='btn btn-primary text-white'>Ampliar<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg></Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="d-flex flex-column align-items-start pt-1">
                        <Link href={'/obras/'} className='btn btn-primary text-white'>Voltar</Link>
                    </div>
                </Col>
                <Col md={8}>
                    <Card>
                        <Card.Body className='bg-gradient-to-tl from-indigo-100 via-indigo-400 to-blue-900 text-white'>
                            <p><strong>Artista:</strong> {art.data.artist_display} </p>
                            <p><strong>Departamento:</strong> {art.data.department_title} </p>
                            <p><strong>Dimensão: </strong> {art.data.dimensions} </p>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </Pagina>
    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const resultado = await apiDeputa.get("/artworks/" + id)


    const art = resultado.data

    return {
        props: { art }
    }
}