import * as React from 'react';
import { useFormControl } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
export const InputHelperText = () => {
  const { error } = useFormControl() || {};
    const style = error ? { display: 'block' } : { display: 'none' };
  const helperText = React.useMemo(() => {
    if (error) {
      return 'Error';
    }

    return ' ';
  }, [error]);

  return <FormHelperText style={style}>{helperText}</FormHelperText>;
}
