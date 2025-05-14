/**
 * Function that analyzes any input and returns detailed type information
 * @param {any} input - Any value to be analyzed
 * @returns {object} Object containing detailed type information
 */
function analyzeData(input) {

  const type = typeof input;
  let details = {
    primitiveType: type,
    value: input,
    detailedType: null,
    size: null,
    structure: null,
    isArray: Array.isArray(input),
    isNull: input === null,
    isUndefined: input === undefined,
    isNaN: Number.isNaN(input),
    isFunction: type === 'function',
    isObject: type === 'object' && input !== null,
    isDate: input instanceof Date,
    isRegExp: input instanceof RegExp,
    isError: input instanceof Error,
    isSymbol: type === 'symbol'
  };

  // Additional type-specific details
  switch (type) {
    case 'string':
      details.detailedType = 'string';
      details.size = input.length;
      details.isEmpty = input === '';
      break;
      
    case 'number':
      details.detailedType = Number.isInteger(input) ? 'integer' : 'float';
      details.isFinite = Number.isFinite(input);
      details.isSafeInteger = Number.isSafeInteger(input);
      break;
      
    case 'boolean':
      details.detailedType = 'boolean';
      break;
      
    case 'object':
      if (input === null) {
        details.detailedType = 'null';
      } else if (Array.isArray(input)) {
        details.detailedType = 'array';
        details.size = input.length;
        details.elementTypes = input.map(item => typeof item);
      } else if (input instanceof Date) {
        details.detailedType = 'date';
        details.isoValue = input.toISOString();
      } else if (input instanceof RegExp) {
        details.detailedType = 'regexp';
        details.pattern = input.source;
        details.flags = input.flags;
      } else if (input instanceof Error) {
        details.detailedType = 'error';
        details.name = input.name;
        details.message = input.message;
      } else {
        details.detailedType = 'object';
        details.size = Object.keys(input).length;
        details.properties = Object.keys(input);
      }
      break;
      
    case 'function':
      details.detailedType = 'function';
      details.name = input.name || 'anonymous';
      details.parameterCount = input.length;
      break;
      
    case 'symbol':
      details.detailedType = 'symbol';
      details.description = input.description;
      break;
      
    default:
      details.detailedType = type;
  }

  return details;
}

// Exporta para uso em Node.js (CommonJS)
module.exports = analyzeData;

