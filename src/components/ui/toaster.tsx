import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { AnimatePresence, motion } from "framer-motion"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      <AnimatePresence initial={false}>
        {toasts.map(function ({ id, title, description, action, ...props }) {
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
              style={{ width: '100%' }}
            >
              <Toast {...props}>
                <div className="grid gap-1">
                  {title && <ToastTitle>{title}</ToastTitle>}
                  {description && (
                    <ToastDescription>{description}</ToastDescription>
                  )}
                </div>
                {action}
                <ToastClose />
              </Toast>
            </motion.div>
          )
        })}
      </AnimatePresence>
      <ToastViewport />
    </ToastProvider>
  )
}
