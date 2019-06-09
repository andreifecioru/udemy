export const isNonEmptyString = in_string => {
  return in_string.trim().length > 0;
};

export const isValidEmail = in_string => {
  const emailPattern = new RegExp(
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
  );
  return emailPattern.test(in_string);
};

export const isValidUrl = in_string => {
  const pattern = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  const urlPattern = new RegExp(pattern);
  return urlPattern.test(in_string);
}