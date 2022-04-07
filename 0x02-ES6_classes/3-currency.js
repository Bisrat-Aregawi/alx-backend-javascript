export default class Currency {
  constructor(code, name) {
    Currency.checkType(code, 'string', `${code} not of string type`);
    this._code = code;
    Currency.checkType(name, 'string', `${name} not of string type`);
    this._name = name;
  }

  // Getter methods
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setter methods
  set code(newCode) {
    Currency.checkType(newCode, 'string', `${newCode} not of type string`);
    this._code = newCode;
  }

  set name(newName) {
    Currency.checkType(newName, 'string', `${newName} not of type string`);
    this._code = newName;
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
    if (typeof arg !== type) throw TypeError(errMsg);
    return true;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
