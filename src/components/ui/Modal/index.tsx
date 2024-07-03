import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { RemoveScroll } from 'react-remove-scroll';
import classNames from 'classnames';

import useEscapeKey from '../../../hooks/useEscapeKey';
import CloseButton from '../CloseButton';

interface ModalProps {
  title?: React.ReactNode;
  className?: string;
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export default function Modal(props: ModalProps) {
  return props.isOpen ? <ModalConditional {...props} /> : null;
}

function ModalConditional(props: ModalProps) {
  const { title, className, isOpen, closeModal, children } = props;
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEscapeKey(closeModal);

  // Set focus to the first focusable element when the modal is opened
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll('button, a, select, textarea');
      if (focusableElements.length) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }
  }, [isOpen]);

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
}
