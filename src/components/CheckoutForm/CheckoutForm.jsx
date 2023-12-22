import { useState } from "react"



const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    (() => {
        'use strict'

        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()

    return (
        <form form onSubmit={handleConfirm} class="row g-3 needs-validation border m-2 border-warning" novalidate >
            <div class="col-md-4">
                <label for="validationCustom01" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="validationCustom01" value={name} onChange={({ target }) => setName(target.value)} required />
                <div class="valid-feedback">
                    Bien!
                </div>
            </div>
            <div class="col-md-4">
                <label for="validationCustom02" class="form-label">Telefono</label>
                <input type="text" class="form-control" id="validationCustom02" value={phone} onChange={({ target }) => setPhone(target.value)} required />
                <div class="valid-feedback">
                    Bien!
                </div>
            </div>
            <div class="col-md-6">
                <label for="validationCustom03" class="form-label">Email</label>
                <input type="email" class="form-control" value={email} onChange={({ target }) => setEmail(target.value)} id="validationCustom03" required />
                <div class="invalid-feedback">
                    Complete su E-mail
                </div>
            </div>
            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                    <label class="form-check-label" for="invalidCheck">
                        Acepte los terminos y condiciones
                    </label>
                    <div class="invalid-feedback">
                        Debe aceptarlos antes de continuar
                    </div>
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-warning m-1" type="submit">Crear Orden</button>
            </div>
        </form >



    )
}

export default CheckoutForm