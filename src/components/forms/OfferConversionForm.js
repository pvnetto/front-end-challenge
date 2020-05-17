import React from 'react';
import { Form, Button, FormCheck } from 'react-bootstrap';

import style from './OfferConversionForm.module.scss';


const OfferConversionForm = ({ versions, className = '', children }) => (
    <div id="offer-conversion-form" className={style.formContainer}>
        <div className={`${style.formHeader} text-center`}>
            <h4 className="mb-1">Simular Financiamento</h4>
            <p className="m-0"><small>Escolha a parcela que cabe no seu bolso.</small></p>
        </div>
        <Form className={`${style.form}`}>

            <hr />

            <Form.Group>
                <Form.Label>Escolha uma versão</Form.Label>
                <Form.Control as="select" >
                    {versions.map((version, idx) => <option key={idx} value={version.name}>{version.name}</option>)}
                </Form.Control>
            </Form.Group>

            <hr />
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
                <Form.Label>Número de parcelas*</Form.Label>
                <Form.Row>
                    <Form.Check type="radio" name="payment-quota" id="quota-12" label="12" />
                    <Form.Check type="radio" name="payment-quota" id="quota-24" label="24" />

                    <Form.Check type="radio" name="payment-quota" id="quota-36" label="36" />
                    <Form.Check type="radio" name="payment-quota" id="quota-48" label="48" />

                </Form.Row>
            </Form.Group>

            <Form.Group>
                <Form.Control type="text" placeholder="Valor da entrada" required />
            </Form.Group>

            <Form.Group>
                <Form.Row >
                    <Form.Check type="checkbox" id="contact-email">
                        <FormCheck.Input />
                        <FormCheck.Label>
                            <small>Desejo receber ofertas exclusivas da PG Prime.</small>
                        </FormCheck.Label>
                    </Form.Check>
                </Form.Row>
            </Form.Group>


            <Form.Group>
                <Button className="w-100 py-3" variant="primary" type="submit">
                    <strong>Simular Financiamento</strong>
                </Button>
            </Form.Group>

            <a className={style.privacyLink} href="/"><small>Política de privacidade</small></a>
        </Form>

        {children}
    </div >
);

export default OfferConversionForm;