import { ReactNode } from "react"

interface ModalProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  title?: string
}

const Modal = ({ children, isOpen, onClose, title = 'Add Expense' }: ModalProps) => {
  return(
    <div 
      className={`fixed w-full h-full bg-black inset-0 flex justify-center items-center transition-colors 
    ${
      (isOpen) ? 'visible': 'invisible'
    }
    `}
    onClick={onClose}>
      
      <div className="bg-white p-2">
        <div>
          <h2>{title}</h2>
        </div>
        <div className="p-2" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
      
      
    </div>
  )
}

export default Modal