import { FC } from "react"
import "../App.sass"
import PetEditorForm from "./PetEditorForm"

interface SignupModalProps {
  showModal?: React.Dispatch<React.SetStateAction<boolean>>
  currentPet: {
    id?: string
    petName?: string
    type?: string
    adoptionStatus?: string
    breed?: string
    color?: string
    height?: string
    weight?: string
    hypoallergnic?: boolean
    bio?: string
    dietery?: string
    picture?: string
  }
}

const SignupModal: FC<SignupModalProps> = ({ showModal, currentPet}) => {
  return (
    <div className="modal-container" onClick={() => { showModal!(false) }}>
      <div className="modal-wrapper" onClick={e => { e.stopPropagation() }}>
        <svg className="close-icon" onClick={() => showModal!(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
        </svg>
        <PetEditorForm isEdit showModal={showModal} {...currentPet}/>
      </div>
    </div>
  );
}

export default SignupModal;