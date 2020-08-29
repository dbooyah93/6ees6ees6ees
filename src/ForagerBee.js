class ForagerBee extends HoneyMakerBee {
  constructor() {
    super()
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(value){
    this.treasureChest.push(value);
  }
};
