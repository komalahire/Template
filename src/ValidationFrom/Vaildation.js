export default function validate(values) {
    let errors = {};
    if(!values.name){
        errors.name="name is required"
    }else if(values.name.length < 4){
        errors.name = 'name is invalid';
    }
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

  
    return errors;
  };