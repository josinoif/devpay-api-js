/**
 * DevPay API - Módulo principal (exemplo para pipeline CI)
 */

/**
 * Calcula a taxa aplicada a um valor (exemplo para testes).
 * @param {number} value - Valor em reais
 * @param {number} rate - Taxa decimal (ex: 0.02 = 2%)
 * @returns {number} Valor com taxa aplicada
 */
function applyRate(value, rate) {
  if (typeof value !== 'number' || typeof rate !== 'number') {
    throw new TypeError('value e rate devem ser números');
  }
  if (value < 0 || rate < 0) {
    throw new RangeError('value e rate devem ser não negativos');
  }
  return Math.round(value * (1 + rate) * 100) / 100;
}

/**
 * Valida formato de email (exemplo para testes).
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.trim());
}

module.exports = {
  applyRate,
  isValidEmail,
};
