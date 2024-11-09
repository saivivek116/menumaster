import { useContext } from "react"
import RestaurantContext from "../context/RestaurantContext"
import { createPortal } from "react-dom";
import RestaurantDetailsPage from "./RestaurantDetailsPage";
const modalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        background: 'white',
        padding: '20px',
        borderRadius: '8px',
        width: '400px',
        maxWidth: '100%',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
    },
};

export const Modal = ({ isOpen, onClose }) => {
    const { selectedRestaurant } = useContext(RestaurantContext);
    if (!isOpen) {
        return null;
    }

    return createPortal(
        <div style={modalStyles.overlay}>
            <div style={modalStyles.modal}>
                <button onClick={onClose} style={modalStyles.closeButton}>Close</button>
                <RestaurantDetailsPage restaurant={selectedRestaurant} />
            </div>
        </div>,
        document.body
    )
}


