import PropTypes from 'prop-types';
import * as React from 'react';
import NumberFormat from 'react-number-format';


export const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={values => 
        onChange(
            values.formattedValue
        )
      }
    mask="_"
    format="+38 (0##) ###-##-##"
    />
  );
});




NumberFormatCustom.propTypes = {
  onChange: PropTypes.func.isRequired,
};