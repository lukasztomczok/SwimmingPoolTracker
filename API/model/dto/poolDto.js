class PoolDto {
  constructor(shortName, name, openTime, closeTime, exitTime, maximuNumbersOfLanes, length, width, street, city, zipCode) {
    this.shortName = shortName;
    this.name = name;
    this.openTime = openTime;
    this.closeTime = closeTime;
    this.exitTime = exitTime;
    this.maximuNumbersOfLanes = maximuNumbersOfLanes;
    this.length = length;
    this.width = width;
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
  }
}

module.exports = PoolDto;
