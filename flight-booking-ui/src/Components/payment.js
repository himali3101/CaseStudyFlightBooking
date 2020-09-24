import React, { useState } from 'react'
import axios from 'axios'

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

const __DEV__ = document.domain === 'localhost'

function Payment(props) {
    const [name, setName] = useState('Mehul')

    console.log(props.amount)
    async function displayRazorpay() {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }

        axios.post('http://localhost:1337/razorpay', { amount: parseInt(props.amount, 10) }).then((t) => {
            let data = t.data
            console.log(data)

            const options = {
                key: __DEV__ ? 'rzp_test_1KOKC7GwsXYhaI' : 'PRODUCTION_KEY',
                currency: data.currency,
                amount: data.amount,
                order_id: data.id,
                name: 'Donation',
                description: 'Thank you for nothing. Please give us some money',
                image: 'http://localhost:1337/logo.svg',
                handler: function (response) {
                    alert(response.razorpay_payment_id)
                    alert(response.razorpay_order_id)
                    alert(response.razorpay_signature)
                },
                prefill: {
                    name,
                    email: 'himali3101@gmail.com',
                    phone_number: '9999999999'
                }
            }
            const paymentObject = new window.Razorpay(options)
            paymentObject.open()
        }
        )

    }

    return (
        <div >

            <a

                onClick={displayRazorpay}
                target="_blank"
                rel="noopener noreferrer"
            >
                Donate $5
</a>
        </div>
    )
}

export default Payment