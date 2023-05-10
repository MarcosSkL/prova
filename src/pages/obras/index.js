import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import apiArt from '../../services/apiArt'

const index = ({ obras }) => {

    return (

        <Pagina titulo="Obras de Artes">

            <Row className="px-1 mx-1">
                <Col>
                    <h3>Despesas</h3>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>Detalhes</th>
                                <th>Titulo</th>
                                <th>Artista</th>
                                <th>Departamento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {obras.data.map(item => (
                                <tr>
                                    <td><Link href={'/obras/' + item.id} className='btn btn-primary text-white'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z" />
                                        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                                        <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z" />
                                    </svg></Link></td>
                                    <td>{item.title}</td>
                                    <td>{item.artist_display}</td>
                                    <td>{item.department_title}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                </Col>

            </Row>
        </Pagina>
    )
}

export default index

export async function getServerSideProps(context) {

    const resultado = await apiArt.get("/artworks")
    const obras = resultado.data

    return {
        props: { obras }
    }
}