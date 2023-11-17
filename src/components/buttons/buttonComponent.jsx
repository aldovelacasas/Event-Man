import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'; // Importa el ícono de la papelera
import PropTypes from "prop-types"

const IconButtonsComponent = ({onClick}) => {
  return (
    <IconButton onClick={onClick}>
      <DeleteIcon /> {/* Muestra el ícono de la papelera */}
    </IconButton>
  );
};

IconButtonsComponent.propTypes = {
    onClick: PropTypes.func.isRequired, // Verifica que onClick sea una función requerida
  };

export default IconButtonsComponent;
