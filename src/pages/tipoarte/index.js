import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import apiArt from '../../services/apiArt'

const index = ({ tipoarte }) => {

    return (

        <Pagina titulo="Tipos de Artes">
            <ul>
                {tipoarte.data.map(item => (
                    <li  style={{ listStyle: "inside" }}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </Pagina>
    )
}

export default index

export async function getServerSideProps(context) {

    const resultado = await apiArt.get("/artwork-types")
    const tipoarte = resultado.data

    return {
        props: { tipoarte }
    }
}