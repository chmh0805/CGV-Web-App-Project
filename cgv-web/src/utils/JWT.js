export function isLogined() {
  if (getCookie("cgvJWT") !== undefined) {
    return true;
  } else {
    return false;
  }
}

export function setCookie(name, value, options = {}) {
  options = {
    path: "/",
    ...options,
  };

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

export function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function deleteCookie(name) {
  setCookie(name, "", {
    path: "/",
    "max-age": -1,
  });
}
