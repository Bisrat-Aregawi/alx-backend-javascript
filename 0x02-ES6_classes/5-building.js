export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    Building.checkType(sqft, Number, 'sqrft not a number');
    this._sqft = sqft;
  }

  // Getter methods
  get sqft() {
    return this._sqft;
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
}
