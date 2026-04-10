"use client"

import { Button, type ButtonProps } from "@/components/ui/button"
import { Camera } from "lucide-react"
import { usePhotoUploadModal } from "@/components/photo-upload-provider"

interface PhotoUploadButtonProps extends Omit<ButtonProps, "onClick"> {
  label?: string
  showIcon?: boolean
}

export function PhotoUploadButton({
  label = "Fotograf Gonder",
  showIcon = true,
  children,
  ...props
}: PhotoUploadButtonProps) {
  const { open } = usePhotoUploadModal()

  return (
    <Button onClick={open} {...props}>
      {showIcon && <Camera className="size-5" />}
      {children ?? label}
    </Button>
  )
}
