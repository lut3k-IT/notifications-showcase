import { useEffect, useRef } from 'react';
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
  const { title, className, isOpen, closeModal, children, disableOutsideClick } = props;
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Close the modal when the escape key is pressed
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

  // Set focus to the first focusable element when the modal is opened
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll('button, a, select, textarea');
      if (focusableElements.length) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <RemoveScroll enabled={isOpen}>
      <div
        className={'flex-center fixed bottom-0 left-0 right-0 top-0 z-40 bg-white bg-opacity-50 backdrop-blur-sm'}
        onClick={closeModal}
      >
        <div
          role={'dialog'}
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          className={classNames(
            'relative z-50 max-h-[100svh] w-full max-w-xl rounded-lg border border-gray-200 bg-white p-4 shadow-lg',
            className
          )}
        >
          <CloseButton
            onClick={closeModal}
            className={'absolute right-4 top-4'}
          />
          {title && (
            <div className='mb-8 mr-6'>
              {typeof title === 'string' ? <h2 className='text-xl font-semibold'>{title}</h2> : title}
            </div>
          )}
          <div>{children}</div>
        </div>
      </div>
    </RemoveScroll>,
    document.body
  );
};

export default Modal;
