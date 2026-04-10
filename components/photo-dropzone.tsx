"use client"

import { useCallback, useRef } from "react"
import { ImagePlus, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface UploadedPhoto {
  file: File
  preview: string
  url?: string
  uploading: boolean
  error?: string
}

interface PhotoDropzoneProps {
  photos: UploadedPhoto[]
  onAddFiles: (files: File[]) => void
  onRemove: (index: number) => void
  maxFiles?: number
}

const ACCEPTED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
]

export function PhotoDropzone({
  photos,
  onAddFiles,
  onRemove,
  maxFiles = 5,
}: PhotoDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList) return
      const remaining = maxFiles - photos.length
      if (remaining <= 0) return

      const validFiles = Array.from(fileList)
        .filter((f) => ACCEPTED_TYPES.includes(f.type))
        .slice(0, remaining)

      if (validFiles.length > 0) {
        onAddFiles(validFiles)
      }
    },
    [photos.length, maxFiles, onAddFiles]
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      handleFiles(e.dataTransfer.files)
    },
    [handleFiles]
  )

  const canAddMore = photos.length < maxFiles

  return (
    <div className="space-y-3">
      {/* Drop zone */}
      {canAddMore && (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={cn(
            "flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border p-6 transition-colors hover:border-primary/50 hover:bg-secondary/30"
          )}
        >
          <ImagePlus className="mb-2 size-8 text-muted-foreground" />
          <p className="text-sm font-medium text-foreground">
            Fotograf yuklemek icin tiklayin
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            veya surukleyip birakin (max {maxFiles} fotograf, 10MB)
          </p>
          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
            multiple
            capture="environment"
            className="hidden"
            onChange={(e) => {
              handleFiles(e.target.files)
              e.target.value = ""
            }}
          />
        </div>
      )}

      {/* Preview grid */}
      {photos.length > 0 && (
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
          {photos.map((photo, index) => (
            <div key={index} className="group relative aspect-square">
              <img
                src={photo.preview}
                alt={`Fotograf ${index + 1}`}
                className="size-full rounded-md border border-border object-cover"
              />
              {photo.uploading && (
                <div className="absolute inset-0 flex items-center justify-center rounded-md bg-black/50">
                  <Loader2 className="size-5 animate-spin text-white" />
                </div>
              )}
              {photo.error && (
                <div className="absolute inset-0 flex items-center justify-center rounded-md bg-red-500/50">
                  <span className="text-xs font-medium text-white">Hata</span>
                </div>
              )}
              <Button
                type="button"
                variant="destructive"
                size="icon"
                className="absolute -right-1.5 -top-1.5 size-5 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                onClick={() => onRemove(index)}
              >
                <X className="size-3" />
              </Button>
            </div>
          ))}
        </div>
      )}

      <p className="text-xs text-muted-foreground">
        {photos.length}/{maxFiles} fotograf yuklendi
      </p>
    </div>
  )
}

export type { UploadedPhoto }
