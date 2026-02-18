const { applyRate, isValidEmail } = require('../src/index');

describe('applyRate', () => {
  it('aplica taxa corretamente', () => {
    expect(applyRate(100, 0.02)).toBe(102);
    expect(applyRate(50, 0.01)).toBe(50.5);
  });

  it('arredonda para duas casas decimais', () => {
    expect(applyRate(10, 0.033)).toBe(10.33);
  });

  it('aceita zero', () => {
    expect(applyRate(100, 0)).toBe(100);
  });

  it('lança TypeError para argumentos não numéricos', () => {
    expect(() => applyRate('100', 0.02)).toThrow(TypeError);
    expect(() => applyRate(100, '0.02')).toThrow(TypeError);
  });

  it('lança RangeError para valores negativos', () => {
    expect(() => applyRate(-10, 0.02)).toThrow(RangeError);
    expect(() => applyRate(10, -0.02)).toThrow(RangeError);
  });
});

describe('isValidEmail', () => {
  it('aceita emails válidos', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
    expect(isValidEmail('nome.sobrenome@empresa.co')).toBe(true);
  });

  it('rejeita emails inválidos', () => {
    expect(isValidEmail('invalid')).toBe(false);
    expect(isValidEmail('@sem-local.com')).toBe(false);
    expect(isValidEmail('sem-at.com')).toBe(false);
    expect(isValidEmail('')).toBe(false);
  });

  it('rejeita não-string', () => {
    expect(isValidEmail(123)).toBe(false);
    expect(isValidEmail(null)).toBe(false);
  });
});
