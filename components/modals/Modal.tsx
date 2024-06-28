"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Loader2 } from "lucide-react"
import { useCallback } from "react"

interface ModalProps {
  disabled?: boolean
  onSubmit: () => void
  title?: string
  body?: React.ReactElement
  footer?: React.ReactElement
  actionLabel?: string
  secondaryAction?: () => void
  secondaryActionLabel?: string | undefined
}

export default function Modal({
  title,
  body,
  footer,
  disabled,
  actionLabel,
  onSubmit,
  secondaryAction,
  secondaryActionLabel,
}: ModalProps) {
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return
    }

    onSubmit()
  }, [disabled, onSubmit])

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return
    }

    secondaryAction()
  }, [disabled, secondaryAction])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-full flex justify-start">
          {title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader className="px-5 pb-6 border-b border-b-neutral-300">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="relative flex-auto">
          {body}
        </div>
        <DialogFooter>
          <div className="flex flex-col gap-5 flex-grow">
            <div className="flex flex-row gap-4 items-center w-full mt-4">
              {secondaryAction && secondaryActionLabel && (
              <Button
                disabled={disabled}
                onClick={handleSecondaryAction}
                className="p-6 w-full bg-white hover:bg-neutral-100 text-black font-medium border border-neutral-300"
              >
                {secondaryActionLabel}
              </Button>
            )}
              <Button
                type="submit"
                disabled={disabled}
                variant={"destructive"}
                onClick={handleSubmit}
                className="p-6 w-full"
              >
                {actionLabel}
                {disabled && (
                  <Loader2 size={18} className="animate-spin ml-2" />
                )}
              </Button>
            </div>
            {footer}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
