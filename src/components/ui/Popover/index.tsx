import React, { useCallback, useEffect, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';

import useClickOutside from '../../../hooks/useClickOutside';
import useEscapeKey from '../../../hooks/useEscapeKey';

interface PopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  placement?: Placement;
  isOpen?: boolean;
  defaultIsOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  onOpen?: () => void;
  onClose?: () => void;
  closeOnClickOutside?: boolean;
}

export default function Popover(props: PopoverProps) {
  const {
    trigger,
    content,
    placement = 'bottom',
    isOpen: controlledIsOpen,
    defaultIsOpen = false,
    onOpenChange,
    onOpen,
    onClose,
    closeOnClickOutside = true
  } = props;

  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [internalIsOpen, setInternalIsOpen] = useState(defaultIsOpen);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement,
    modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
  });

  const togglePopover = useCallback(() => {
    const newIsOpen = !isOpen;
    setInternalIsOpen(newIsOpen);
    onOpenChange?.(newIsOpen);
    if (newIsOpen) {
      onOpen?.();
    } else {
      onClose?.();
    }
  }, [isOpen, onOpenChange, onOpen, onClose]);

  const closePopover = useCallback(() => {
    setInternalIsOpen(false);
    onOpenChange?.(false);
    onClose?.();
  }, [onOpenChange, onClose]);

  useClickOutside(popoverRef, () => {
    if (closeOnClickOutside) {
      closePopover();
    }
  });

  useEscapeKey(closePopover);

  useEffect(() => {
    if (controlledIsOpen !== undefined) {
      setInternalIsOpen(controlledIsOpen);
    }
  }, [controlledIsOpen]);

  return (
    <>
      <div
        onClick={togglePopover}
        ref={setReferenceElement}
        aria-haspopup='true'
        aria-expanded={isOpen}
      >
        {trigger}
      </div>
      {isOpen && (
        <div
          ref={(el) => {
            setPopperElement(el);
            if (popoverRef) popoverRef.current = el;
          }}
          style={styles.popper}
          {...attributes.popper}
          className='animate-fade-in z-40 rounded-lg border border-gray-200 bg-white p-2 shadow-md'
          role='tooltip'
        >
          {content}
        </div>
      )}
    </>
  );
}
