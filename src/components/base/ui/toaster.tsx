"use client"

import { useEffect } from "react"
import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en.json"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/ui/toast"
import { useToast } from "@/ui/use-toast"

TimeAgo.addDefaultLocale(en)

export function Toaster() {
  const { toasts } = useToast()
  useEffect(() => {}, [])
  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
