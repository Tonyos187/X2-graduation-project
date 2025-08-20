import { useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import X from "../../svg/X";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  withBorder?: boolean;
};

const Modal = ({
  isOpen,
  onClose,
  children,
  withBorder = true,
}: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} 
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className={`bg-Grey-08 rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square
              p-4  sm:p-6 md:p-8 relative flex flex-col items-center text-center gap-4 overflow-y-auto ${
                withBorder ? "border border-Grey-15" : ""
              }`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()} 
          >
            <button
              aria-label="Close modal"
              onClick={onClose}
              className="absolute top-3 right-3 text-White hover:text-Purple-75 transition-colors duration-200 rounded-full w-6.5 xl:w-8 h-6.5 xl:h-8 flex items-center justify-center bg-White/10"
            >
              <X className="w-[9px] h-[9px] xl:w-3 xl:h-3 text-inherit" />
            </button>

            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
               className="max-w-20 max-h-20 text-Purple-60"

              initial={{ y: -10 }}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </motion.svg>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

