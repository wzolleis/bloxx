import faker from 'faker'


class RandomValues {
    arrayElement<T>(anArray: T[]): T {
        return faker.random.arrayElement(anArray)
    }

    name(): string {
        return faker.name.findName()
    }

    randomNumber(): number {
        return Math.floor(Math.random() * 100)
    }
}

export default new RandomValues()