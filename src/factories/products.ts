import {faker} from '@faker-js/faker'
import {v4 as uuidv4} from 'uuid'

import {AddProductInput, ProductStatus} from '@/types'


function makeFactory<T>(template: () => T): () => T {
    return template
}

export const aProductFactory = makeFactory<AddProductInput>(() => ({
    productId: uuidv4(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.number.float({min: 1, max: 1000, fractionDigits: 2}),
    medias: [""],
    status: ProductStatus.Published,
}))
