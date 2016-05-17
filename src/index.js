/**
 * Create an error with status code and source
 * @param  {number} code     status code
 * @param  {string | object} error object or error message
 * @param  {object} source   error source
 * @return {Error}          Error object with statusCode and source
 */
function error(code, errOrMsg, source) {
  var error = errOrMsg;
  if (typeof errOrMsg == 'string') {
    error = new Error(errOrMsg);
  }

  error.statusCode = code;

  if (source) error.source = source;

  error.toString = function() {
    return `[${error.statusCode}]:${error.message}`;
  };

  error.toResult = function() {
    return error.source.new(error);
  }

  return error;
}


module.exports = {
  error: error,
  createError: error
}
