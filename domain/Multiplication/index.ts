class Dollar {
  amount;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number) {
    this.amount *= multiplier;

    return new Dollar(this.amount);
  }
}

export default Dollar;
