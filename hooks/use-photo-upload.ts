"use client"

import { useState, useCallback } from "react"
import type { UploadedPhoto } from "@/components/photo-dropzone"

export function usePhotoUpload() {
  const [photos, setPhotos] = useState<UploadedPhoto[]>([])

  const addFiles = useCallback(async (files: File[]) => {
    const newPhotos: UploadedPhoto[] = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      uploading: true,
    }))

    setPhotos((prev) => [...prev, ...newPhotos])

    // Upload each file
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const formData = new FormData()
      formData.append("file", file)

      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        })

        if (!res.ok) {
          const data = await res.json()
          throw new Error(data.error || "Yukleme basarisiz")
        }

        const data = await res.json()

        setPhotos((prev) =>
          prev.map((p) =>
            p.file === file ? { ...p, uploading: false, url: data.url } : p
          )
        )
      } catch (err) {
        setPhotos((prev) =>
          prev.map((p) =>
            p.file === file
              ? {
                  ...p,
                  uploading: false,
                  error:
                    err instanceof Error ? err.message : "Yukleme basarisiz",
                }
              : p
          )
        )
      }
    }
  }, [])

  const removePhoto = useCallback((index: number) => {
    setPhotos((prev) => {
      const photo = prev[index]
      if (photo?.preview) {
        URL.revokeObjectURL(photo.preview)
      }
      return prev.filter((_, i) => i !== index)
    })
  }, [])

  const reset = useCallback(() => {
    photos.forEach((p) => {
      if (p.preview) URL.revokeObjectURL(p.preview)
    })
    setPhotos([])
  }, [photos])

  const uploadedUrls = photos
    .filter((p) => p.url && !p.error)
    .map((p) => p.url!)

  const isUploading = photos.some((p) => p.uploading)
  const hasErrors = photos.some((p) => p.error)

  return {
    photos,
    addFiles,
    removePhoto,
    reset,
    uploadedUrls,
    isUploading,
    hasErrors,
  }
}
