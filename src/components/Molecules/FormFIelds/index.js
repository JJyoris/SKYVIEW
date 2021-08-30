import {  TextField } from "@material-ui/core";

const FormFields = ({ label, type, id, minRows }) => {
  return (
    <div>

          <TextField

            label={label}
            type={type}
            id={id}
            variant="outlined"
            multiline
            minRows={minRows}
            style ={{width: '100%', marginBottom: 10}}
          />


    </div>
  );
};

export default FormFields;
