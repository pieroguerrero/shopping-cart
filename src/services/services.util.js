/**
 *
 * @param {string} strBaseURL
 * @param {object} objURLParameters
 * @param {object} objRequestInit
 * @returns
 */
const callGetWithURLParams = async (
  strBaseURL,
  objURLParameters,
  objRequestInit
) => {
  const strURLWithParams = ((strBaseURL, objURLParameters) => {
    const strParameters = Object.keys(objURLParameters).reduce(
      (strPrev, strKey) => {
        if (strPrev.length > 0) {
          strPrev += "&";
        }

        strPrev += strKey + "=" + objURLParameters[strKey];
        return strPrev;
      },
      ""
    );

    return strBaseURL + (strParameters.length > 0 ? "?" + strParameters : "");
  })(strBaseURL, objURLParameters);

  const response = await fetch(strURLWithParams, objRequestInit);

  const result = await response.json();

  return result;
};

const callGet = async (strURL, objRequestInit) => {
  const response = await fetch(strURL, objRequestInit);

  const result = await response.json();

  return result;
};

const strBASE_URL = "https://fakestoreapi.com";

export { callGet, callGetWithURLParams, strBASE_URL };
