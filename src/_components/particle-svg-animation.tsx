"use client"

import type React from "react"
import { useRef, useEffect, useState, useCallback } from "react"

interface Particle {
  x: number
  y: number
  targetX: number
  targetY: number
  color: string
  radius: number
  vx: number
  vy: number
}

interface ParticleSVGAnimationProps {
  svgSrc: string
}

export default function ParticleSVGAnimation({ svgSrc }: ParticleSVGAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number | null>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null)

  const initParticles = useCallback((ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
    const canvas = ctx.canvas
    const container = canvas.parentElement // Get the parent div to determine actual rendered size
    if (!container) return

    // Get the actual rendered dimensions of the canvas's parent
    const { width: containerWidth, height: containerHeight } = container.getBoundingClientRect()

    // Set canvas internal resolution to match its display size
    canvas.width = containerWidth
    canvas.height = containerHeight

    const tempCanvas = document.createElement("canvas")
    const tempCtx = tempCanvas.getContext("2d")
    if (!tempCtx) return

    tempCanvas.width = containerWidth
    tempCanvas.height = containerHeight

    // Calculate aspect ratios to draw the image without squeezing
    const imgAspectRatio = img.width / img.height
    const containerAspectRatio = containerWidth / containerHeight

    let drawWidth = containerWidth
    let drawHeight = containerHeight
    let offsetX = 0
    let offsetY = 0

    if (imgAspectRatio > containerAspectRatio) {
      // Image is wider than container, fit by width
      drawHeight = containerWidth / imgAspectRatio
      offsetY = (containerHeight - drawHeight) / 2
    } else {
      // Image is taller than container, fit by height
      drawWidth = containerHeight * imgAspectRatio
      offsetX = (containerWidth - drawWidth) / 2
    }

    // Draw the image maintaining its aspect ratio, centered
    tempCtx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)

    const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height)
    const data = imageData.data
    const newParticles: Particle[] = []
    const particleRadius = 1.5 // Adjusted particle size to be slightly bigger
    const pixelStep = 4 // Adjusted to 4 to lessen particles for optimization

    for (let y = 0; y < tempCanvas.height; y += pixelStep) {
      for (let x = 0; x < tempCanvas.width; x += pixelStep) {
        const i = (y * tempCanvas.width + x) * 4
        const alpha = data[i + 3]

        // Only create particles if pixel is within the drawn image bounds AND is not transparent
        if (alpha > 0 && x >= offsetX && x < offsetX + drawWidth && y >= offsetY && y < offsetY + drawHeight) {
          const r = data[i]
          const g = data[i + 1]
          const b = data[i + 2]

          newParticles.push({
            x: x, // Start directly at target position
            y: y, // Start directly at target position
            targetX: x,
            targetY: y,
            color: `rgba(${r},${g},${b},${alpha / 255})`,
            radius: particleRadius,
            vx: 0, // No initial velocity
            vy: 0, // No initial velocity
          })
        }
      }
    }
    setParticles(newParticles)
    setIsLoaded(true)
  }, [])

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (canvas) {
      const rect = canvas.getBoundingClientRect()
      setMousePos({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      })
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    setMousePos(null)
  }, [])

  const animateParticles = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

      const friction = 0.95 // Reduces particle velocity over time
      const spring = 0.02 // Controls how strongly particles move towards their target
      const subtleMovementStrength = 0.15 // Controls the intensity of the continuous jiggle

      // Adjusted interactionRadius and repulsionStrength for a noticeable but still subtle interaction
      const interactionRadius = 70 // How far the mouse affects particles
      const repulsionStrength = 1.0 // How strongly particles are pushed away

      particles.forEach((p) => {
        // Calculate distance to target
        const dx = p.targetX - p.x
        const dy = p.targetY - p.y

        // Apply spring force to pull particles towards their target
        p.vx += dx * spring
        p.vy += dy * spring

        // Add subtle random movement for the "jiggle" effect
        p.vx += (Math.random() - 0.5) * subtleMovementStrength
        p.vy += (Math.random() - 0.5) * subtleMovementStrength

        // Apply friction
        p.vx *= friction
        p.vy *= friction

        // Apply repulsion force if mouse is over the particle
        if (mousePos) {
          const dxMouse = p.x - mousePos.x
          const dyMouse = p.y - mousePos.y
          const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)

          if (distanceMouse < interactionRadius) {
            const forceDirectionX = dxMouse / distanceMouse
            const forceDirectionY = dyMouse / distanceMouse
            // Inverse square law for force falloff, adjusted for smoother interaction
            const force = ((interactionRadius - distanceMouse) / interactionRadius) * repulsionStrength

            p.vx += forceDirectionX * force
            p.vy += forceDirectionY * force
          }
        }

        // Update position
        p.x += p.vx
        p.y += p.vy

        // Draw particle as a circle
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId.current = requestAnimationFrame(() => animateParticles(ctx))
    },
    [particles, mousePos],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")

    if (!canvas || !ctx) return

    const img = new Image()
    img.src = svgSrc // Use the prop for the SVG source
    img.crossOrigin = "anonymous" // Essential for loading images from different origins onto canvas

    img.onload = () => {
      initParticles(ctx, img)
    }

    img.onerror = (err) => {
      console.error("Failed to load SVG:", err)
    }

    // Cleanup function to cancel animation frame on component unmount
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [initParticles, svgSrc]) // Re-run if svgSrc changes

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")

    if (isLoaded && ctx) {
      // Start animation only after particles are fully loaded and initialized
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
      animateParticles(ctx)
    }
  }, [isLoaded, animateParticles])

  return (
    <canvas
      ref={canvasRef}
      className="block w-full h-full" // Ensure canvas fills its parent
      onMouseMove={handleMouseMove} // Attach mouse events directly to canvas
      onMouseLeave={handleMouseLeave}
    />
  )
}
