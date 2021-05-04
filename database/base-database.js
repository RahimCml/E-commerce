class BaseDatabase {
  constructor(model) {
    this.model = model
    this.fileName = model.name.toLowerCase()
  }
  save(objects) {
    return this.model.insertMany(objects)
  }

  load() {
    return this.model.find()
  }

  async insert(object) {
    return await this.model.create(object)
  }

  async remove(index) {
    const objects = await this.load()

    objects.splice(index, 1)
    this.save(objects)
  }

  async removeBy(property, value) {
    const objects = await this.load()

    const index = objects.findIndex((o) => o[property] == value)

    if (index == -1)
      throw new Error(
        `Cannot find ${this.model.name} instance with ${property} ${object.id}`,
      )

    objects.splice(index, 1)
    this.save(objects)
  }

  async update(object) {
    const objects = await this.load()

    const index = objects.findIndex((o) => o.id == object.id)

    if (index == -1)
      throw new Error(
        `Cannot find ${this.model.name} instance with id ${object.id}`,
      )

    objects.splice(index, 1, object)
    this.save(objects)
  }

  async find(id) {
    return (await this.load()).find((o) => o.id == id)
  }

  async findBy(property, value) {
    return (await this.load()).find((o) => o[property] == value)
  }
}

module.exports = BaseDatabase
