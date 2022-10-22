let products
const grid = document.querySelector('.grid')

fetch ("https://fakestoreapi.com/products")
.then((resp)=> {
    return resp.json()
})
.then((res) => {
   
    products = res
   console.log(products[0])
   showProducts()
})

// console.log(products)

// setTimeout (() => {
//     console.log(products)
// },3000)

const showProducts = () => {

       products.forEach((el) => {
        const card = document.createElement('div')
        card.className = card
        
        const card__img = document.createElement('div')
        card__img.className = 'card__img'

        const img = document.createElement('img')
        img.src = el.image
        img.alt = 'product'

        card__img.appendChild(img)
        card.appendChild(card__img)

        const card__title = document.createElement('p')
        card__title.innerText = el.title
        card__title.className = 'card__title'
       
        const card__price = document.createElement('p')
        card__price.innerText = el.price
        card__price.className = 'card__price'

        card.appendChild(card__title)
        card.appendChild(card__price)

        const del = document.createElement('button')
        del.className = 'del'
        del.innerText = 'Delete'
        del.id = el.id

        card.appendChild(del)

        grid.appendChild(card)
    })

    const btns = document.querySelectorAll('.del')
    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
         
            deleteProduct(+e.target.id)
        })
    })

}

const deleteProduct = (id) => {
    products = products.filter ((el) => {
        if (+el.id !== id) {
            return el
        }
    })
    grid.innerHTML = ''
  showProducts()
}
