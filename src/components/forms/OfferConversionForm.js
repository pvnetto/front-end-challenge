import React from 'react';
import { Form, Button } from 'react-bootstrap';

import style from './OfferConversionForm.module.scss';


const OfferConversionForm = ({ versions, className = '', children }) => (
    <div id="offer-conversion-form" className={`${className} ${style.formContainer}`}>
        <div className={`${style.formHeader} text-center bg-primary`}>
            <h4 className="mb-1">Simular Financiamento</h4>
            <p className="m-0">Escolha a parcela que cabe no seu bolso.</p>
        </div>

        <Form className={`${style.form} bg-dark p-3`}>
            <Form.Group>
                <Form.Control as="select" placeholder="Versão" />
            </Form.Group>
            <Form.Group>
                <Form.Control type="text" placeholder="Nome" />
            </Form.Group>
            <Form.Group>
                <Form.Control type="email" placeholder="E-mail" />
            </Form.Group>
            <Form.Group>
                <Form.Control type="phone" placeholder="Telefone / WhatsApp" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Veículo na troca?</Form.Label>
                <Form.Row style={{ margin: '0' }}>
                    <Form.Check type="radio" name="exchange-vehicle" id="exchange-vehicle-yes" label="Sim" />
                    <Form.Check type="radio" name="exchange-vehicle" id="exchange-vehicle-no" label="Não" />
                </Form.Row>
            </Form.Group>
            <Form.Group>
                <Form.Label>Quero receber contato por:</Form.Label>
                <Form.Row style={{ margin: '0' }}>
                    <Form.Check style={{ marginRight: '0.8rem' }} type="checkbox" id="contact-email" label="E-mail" />
                    <Form.Check style={{ marginRight: '0.8rem' }} type="checkbox" id="contact-phone" label="Telefone" />
                    <Form.Check style={{ marginRight: '0.8rem' }} type="checkbox" id="contact-whatsapp" label="WhatsApp" />
                </Form.Row>
            </Form.Group>

            <Form.Group className="mt-4">
                <Button className="w-100 py-3" variant="primary" type="submit">
                    <strong>ESTOU INTERESSADO</strong>
                </Button>
            </Form.Group>

            <hr style={{ background: 'rgba(255, 255, 255, 0.15)' }} className="my-4" />

            <p className="mt-3"><small>Estamos comprometidos em resguardar suas
                        informações. Conheça nossa <a href="/">Política de privacidade</a>.</small></p>
        </Form>

        {children}
    </div>
);

export default OfferConversionForm;