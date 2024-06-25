import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { RemoveScroll } from 'react-remove-scroll';
import classNames from 'classnames';

import CloseButton from '../CloseButton';

interface ModalProps {
  title?: React.ReactNode;
  className?: string;
  isOpen: boolean;
  closeModal: () => void;
  disableOutsideClick?: boolean;
  children: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  const { isOpen } = props;
  return isOpen ? <ModalConditional {...props} /> : null;
};

const ModalConditional = (props: ModalProps) => {
  const {
    title,
    className,
    isOpen,
    closeModal,
    children,
    disableOutsideClick,
  } = props;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !disableOutsideClick) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown, false);
    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [closeModal, disableOutsideClick]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <RemoveScroll enabled={isOpen}>
      <div
        className={
          'top-0 left-0 right-0 bottom-0 fixed bg-white bg-opacity-70 z-40 flex-center'
        }
        onClick={closeModal}
      >
        <div
          role={'dialog'}
          onClick={(e) => e.stopPropagation()}
          className={classNames(
            'w-full max-w-lg border border-gray-200 bg-white p-4 rounded-lg shadow-lg relative',
            className
          )}
        >
          <CloseButton
            onClick={closeModal}
            className={'top-4 right-4 absolute'}
          />
          {title && (
            <p className={'text-xl font-semibold mb-4 mr-6'}>{title}</p>
          )}
          <div>{children}</div>
        </div>
      </div>
    </RemoveScroll>,
    document.body
  );
};

export default Modal;
