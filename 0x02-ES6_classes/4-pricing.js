import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    Pricing.checkType(amount, Number, 'amount is not a number');
    this._amount = amount;
    Pricing.checkType(
      currency,
      Currency,
      'currency is not of type Currency',
    );
    this._currency = currency;
  }

  // Getter methods
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setter methods
  set amount(newAmount) {
    Pricing.checkType(
      newAmount,
      Number,
      'New amount not of type number',
    );
    this._amount = newAmount;
  }

  set currency(newCurrency) {
    Pricing.checkType(
      newCurrency,
      Currency,
      'New currency not of type Currency',
    );
    this._amount = newCurrency;
  }

  // Static method
  static checkType(arg, type, errMsg) {
    /**
      * Throw error if `arg` is not of type `type`
      * @param {string} arg variable to check type of
      * @param {string} type string representing type required
      * @param {string} errMsg message to show if arg is not required type
      */
    // eslint-disable-next-line valid-typeof
    if (arg.constructor !== type) throw TypeError(errMsg);
    return true;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    Pricing.checkType(amount, Number, 'amount not a number');
    Pricing.checkType(conversionRate, Number, 'conversion rate not a number');
    return amount * conversionRate;
  }
}
