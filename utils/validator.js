const isEmpty = (string) => {
  if (!string) return true;
  else return false;
};
const hasLength = (string) => {
  if(string.length < 5) return true;
  else return false;
}

export const validateLoginData = (data) => {
  let errors = {};

  if (isEmpty(data.email)) errors.email = 'Must not be empty';
  if (isEmpty(data.password)){
    errors.password = 'Must not be empty';
  } else if  (hasLength(data.password)) {
    errors.password = "Must more than 5 character";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

export const validateSignUpData = (data) => {
  let errors = {};
  if(isEmpty(data.fullName)) errors.fullName = "Name must not be empty";
  if (isEmpty(data.email)) errors.email = 'Must not be empty';
  if (isEmpty(data.password)){
    errors.password = 'Must not be empty';
  } else if  (hasLength(data.password)) {
    errors.password = "Must more than 5 character";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};