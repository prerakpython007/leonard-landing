"use client"

import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface Point {
  x: number
  y: number
}

interface Milestone {
  x: number
  y: number
  label: string
  info: string
  number: number
  mouseX?: number
  mouseY?: number
}

class UnevenMountain {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  width: number
  height: number
  onMilestoneHover: (milestone: Milestone) => void
  onMilestoneLeave: () => void
  animationTime: number
  animationId: number | null
  mountainPath: Point[]

  constructor(canvas: HTMLCanvasElement, onMilestoneHover: (milestone: Milestone) => void, onMilestoneLeave: () => void) {
    this.canvas = canvas
    const ctx = this.canvas.getContext("2d")
    if (!ctx) {
      throw new Error("Could not get canvas context")
    }
    this.ctx = ctx
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.onMilestoneHover = onMilestoneHover
    this.onMilestoneLeave = onMilestoneLeave
    this.animationTime = 0
    this.animationId = null
    this.mountainPath = []
    
    this.setupEventListeners()
    this.startAnimation()
  }

  startAnimation() {
    const animate = () => {
      this.animationTime += 0.02
      this.render()
      this.animationId = requestAnimationFrame(animate)
    }
    animate()
  }

  setupEventListeners() {
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect()
      const scaleX = this.canvas.width / rect.width
      const scaleY = this.canvas.height / rect.height
      const x = (e.clientX - rect.left) * scaleX
      const y = (e.clientY - rect.top) * scaleY
      
      const milestones: Milestone[] = [
        { x: this.width * 0.2, y: this.height * 0.82, label: "Initial Consultation", info: "We begin by understanding your unique legal challenges and business objectives through detailed consultation.", number: 1 },
        { x: this.width * 0.45, y: this.height * 0.45, label: "Strategic Planning", info: "Our expert team develops comprehensive legal strategies tailored specifically to your case requirements.", number: 2 },
        { x: this.width * 0.65, y: this.height * 0.25, label: "Expert Execution", info: "Implementation of legal solutions with precision, attention to detail, and unwavering commitment to excellence.", number: 3 },
        { x: this.width * 0.8, y: this.height * 0.08, label: "Peak Success", info: "Reaching the summit of legal excellence with optimal results and achieving your ultimate goals.", number: 4 }
      ]

      let foundHover = false
      milestones.forEach((milestone) => {
        const distance = Math.sqrt(Math.pow(x - milestone.x, 2) + Math.pow(y - milestone.y, 2))
        if (distance <= 15) {
          this.onMilestoneHover({ ...milestone, mouseX: e.clientX, mouseY: e.clientY })
          foundHover = true
          this.canvas.style.cursor = 'pointer'
        }
      })

      if (!foundHover) {
        this.onMilestoneLeave()
        this.canvas.style.cursor = 'default'
      }
    })

    this.canvas.addEventListener('mouseleave', () => {
      this.onMilestoneLeave()
      this.canvas.style.cursor = 'default'
    })
  }

  render() {
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.drawUnevenMountain()
    this.drawAnimatedBaseFade()
    this.drawMilestones()
    this.drawTravelingPulses()
  }

  drawUnevenMountain() {
    // Mountain that goes uphill with peak on the right side and steep descent - more uneven
    this.ctx.strokeStyle = "#00ADB5"
    this.ctx.lineWidth = 4
    this.ctx.lineCap = "round"
    this.ctx.lineJoin = "round"

    // Create much stronger gradient for more subtle fade at both ends
    const fadeGradient = this.ctx.createLinearGradient(0, 0, this.width, 0)
    fadeGradient.addColorStop(0, "rgba(0, 173, 181, 0.01)")
    fadeGradient.addColorStop(0.01, "rgba(0, 173, 181, 0.03)")
    fadeGradient.addColorStop(0.03, "rgba(0, 173, 181, 0.08)")
    fadeGradient.addColorStop(0.06, "rgba(0, 173, 181, 0.2)")
    fadeGradient.addColorStop(0.12, "rgba(0, 173, 181, 0.6)")
    fadeGradient.addColorStop(0.18, "rgba(0, 173, 181, 1)")
    fadeGradient.addColorStop(0.82, "rgba(0, 173, 181, 1)")
    fadeGradient.addColorStop(0.88, "rgba(0, 173, 181, 0.6)")
    fadeGradient.addColorStop(0.94, "rgba(0, 173, 181, 0.2)")
    fadeGradient.addColorStop(0.97, "rgba(0, 173, 181, 0.08)")
    fadeGradient.addColorStop(0.99, "rgba(0, 173, 181, 0.03)")
    fadeGradient.addColorStop(1, "rgba(0, 173, 181, 0.01)")

    this.ctx.strokeStyle = fadeGradient

    // Store mountain path for pulse animation - more uneven with additional points
    this.mountainPath = [
      { x: this.width * 0.05, y: this.height * 0.9 },
      { x: this.width * 0.12, y: this.height * 0.85 },
      { x: this.width * 0.15, y: this.height * 0.8 },
      { x: this.width * 0.18, y: this.height * 0.83 },
      { x: this.width * 0.2, y: this.height * 0.82 },
      { x: this.width * 0.25, y: this.height * 0.78 },
      { x: this.width * 0.3, y: this.height * 0.65 },
      { x: this.width * 0.33, y: this.height * 0.67 },
      { x: this.width * 0.35, y: this.height * 0.68 },
      { x: this.width * 0.38, y: this.height * 0.62 },
      { x: this.width * 0.42, y: this.height * 0.5 },
      { x: this.width * 0.45, y: this.height * 0.45 },
      { x: this.width * 0.48, y: this.height * 0.42 },
      { x: this.width * 0.52, y: this.height * 0.38 },
      { x: this.width * 0.55, y: this.height * 0.35 },
      { x: this.width * 0.58, y: this.height * 0.32 },
      { x: this.width * 0.62, y: this.height * 0.28 },
      { x: this.width * 0.65, y: this.height * 0.25 },
      { x: this.width * 0.68, y: this.height * 0.22 },
      { x: this.width * 0.72, y: this.height * 0.18 },
      { x: this.width * 0.75, y: this.height * 0.15 },
      { x: this.width * 0.77, y: this.height * 0.12 },
      { x: this.width * 0.8, y: this.height * 0.08 },
      { x: this.width * 0.82, y: this.height * 0.15 },
      { x: this.width * 0.85, y: this.height * 0.35 },
      { x: this.width * 0.87, y: this.height * 0.45 },
      { x: this.width * 0.9, y: this.height * 0.65 },
      { x: this.width * 0.92, y: this.height * 0.72 },
      { x: this.width * 0.95, y: this.height * 0.8 }
    ]

    // Draw mountain path
    this.ctx.beginPath()
    if (this.mountainPath.length > 0 && this.mountainPath[0]) {
      if (this.mountainPath[0]) {
        this.ctx.moveTo(this.mountainPath[0].x, this.mountainPath[0].y)
        for (let i = 1; i < this.mountainPath.length; i++) {
          const point = this.mountainPath[i]
          if (point !== undefined) {
            this.ctx.lineTo(point.x, point.y)
          }
        }
      }
    }
    this.ctx.stroke()

    // Mountain fill with updated path
    const gradient = this.ctx.createLinearGradient(0, this.height * 0.08, 0, this.height * 0.9)
    gradient.addColorStop(0, "rgba(0, 173, 181, 0.25)")
    gradient.addColorStop(1, "rgba(0, 173, 181, 0.08)")
    
    this.ctx.fillStyle = gradient
    this.ctx.beginPath()
    if (this.mountainPath[0]) {
      this.ctx.moveTo(this.mountainPath[0].x, this.mountainPath[0].y)
      for (let i = 1; i < this.mountainPath.length; i++) {
        const point = this.mountainPath[i]
        if (point !== undefined) {
          this.ctx.lineTo(point.x, point.y)
        }
      }
      this.ctx.lineTo(this.width * 0.95, this.height)
      this.ctx.lineTo(this.width * 0.05, this.height)
      this.ctx.closePath()
      this.ctx.fill()
    }
  }

  drawTravelingPulses() {
    // Draw 2 slower pulses with curved heads and trails
    for (let p = 0; p < 2; p++) {
      const pulseOffset = (p * 0.5)
      const progress = ((this.animationTime * 0.15 + pulseOffset) % 1)
      
      if (progress < 0.12 || progress > 0.88) continue
      
      // Calculate position along the mountain path
      const pathIndex = progress * (this.mountainPath.length - 1)
      const lowerIndex = Math.floor(pathIndex)
      const upperIndex = Math.min(lowerIndex + 1, this.mountainPath.length - 1)
      const t = pathIndex - lowerIndex
      
      if (
        lowerIndex < this.mountainPath.length &&
        upperIndex < this.mountainPath.length &&
        this.mountainPath[lowerIndex] !== undefined &&
        this.mountainPath[upperIndex] !== undefined
      ) {
        const lowerPoint = this.mountainPath[lowerIndex]
        const upperPoint = this.mountainPath[upperIndex]
        const x = lowerPoint.x + t * (upperPoint.x - lowerPoint.x)
        const y = lowerPoint.y + t * (upperPoint.y - lowerPoint.y)
        
        // Calculate direction for curved head
        let dirX = 1, dirY = 0
        if (upperIndex < this.mountainPath.length && lowerPoint && upperPoint) {
          dirX = upperPoint.x - lowerPoint.x
          dirY = upperPoint.y - lowerPoint.y
          const length = Math.sqrt(dirX * dirX + dirY * dirY)
          if (length > 0) {
            dirX /= length
            dirY /= length
          }
        }
        
        // Pulse opacity
        let pulseOpacity = 0.9
        if (progress < 0.25) pulseOpacity = (progress - 0.12) / 0.13 * 0.9
        else if (progress > 0.75) pulseOpacity = (0.88 - progress) / 0.13 * 0.9
        
        // Draw trail - smaller dots behind the pulse
        for (let trail = 1; trail <= 4; trail++) {
          const trailProgress = progress - (trail * 0.03)
          if (trailProgress < 0.12) continue
          
          const trailPathIndex = trailProgress * (this.mountainPath.length - 1)
          const trailLowerIndex = Math.floor(trailPathIndex)
          const trailUpperIndex = Math.min(trailLowerIndex + 1, this.mountainPath.length - 1)
          const trailT = trailPathIndex - trailLowerIndex
          
          if (
            trailLowerIndex >= 0 &&
            trailLowerIndex < this.mountainPath.length &&
            trailUpperIndex < this.mountainPath.length &&
            this.mountainPath[trailLowerIndex] !== undefined &&
            this.mountainPath[trailUpperIndex] !== undefined
          ) {
            const trailLowerPoint = this.mountainPath[trailLowerIndex]
            const trailUpperPoint = this.mountainPath[trailUpperIndex]
            const trailX = trailLowerPoint.x + trailT * (trailUpperPoint.x - trailLowerPoint.x)
            const trailY = trailLowerPoint.y + trailT * (trailUpperPoint.y - trailLowerPoint.y)
            
            const trailOpacity = pulseOpacity * (1 - trail * 0.25)
            const trailSize = Math.max(1, 4 - trail)
            
            // Trail dot
            this.ctx.fillStyle = `rgba(255, 255, 255, ${trailOpacity})`
            this.ctx.beginPath()
            this.ctx.arc(trailX, trailY, trailSize, 0, Math.PI * 2)
            this.ctx.fill()
          }
        }
        
        // Main pulse with curved head
        this.ctx.fillStyle = `rgba(255, 255, 255, ${pulseOpacity})`
        
        // Draw curved/teardrop shaped head
        this.ctx.beginPath()
        this.ctx.save()
        this.ctx.translate(x, y)
        this.ctx.rotate(Math.atan2(dirY, dirX))
        
        // Create teardrop/curved shape
        this.ctx.beginPath()
        this.ctx.moveTo(6, 0)
        this.ctx.bezierCurveTo(6, -2, 2, -3, 0, -2)
        this.ctx.bezierCurveTo(-4, -1, -4, 1, 0, 2)
        this.ctx.bezierCurveTo(2, 3, 6, 2, 6, 0)
        this.ctx.fill()
        
        this.ctx.restore()
        
        // Add bright center dot
        this.ctx.fillStyle = `rgba(200, 240, 255, ${pulseOpacity})`
        this.ctx.beginPath()
        this.ctx.arc(x, y, 2, 0, Math.PI * 2)
        this.ctx.fill()
      }
    }
  }

  drawAnimatedBaseFade() {
    // Create animated fade effect ONLY at the base of the mountain
    const fadeHeight = 40
    const baseY = this.height * 0.95
    
    // Multiple animated layers for a more dynamic effect
    for (let i = 0; i < 3; i++) {
      const offset = Math.sin(this.animationTime + i * 0.5) * 0.3 + 0.7
      
      const fadeGradient = this.ctx.createLinearGradient(0, baseY - fadeHeight, 0, this.height)
      fadeGradient.addColorStop(0, `rgba(0, 173, 181, ${0.15 * offset})`)
      fadeGradient.addColorStop(0.5, `rgba(0, 173, 181, ${0.25 * offset})`)
      fadeGradient.addColorStop(1, `rgba(0, 173, 181, 0)`)
      
      this.ctx.fillStyle = fadeGradient
      
      // Create wavy fade effect only at the base
      this.ctx.beginPath()
      this.ctx.moveTo(0, baseY)
      
      for (let x = 0; x <= this.width; x += 8) {
        const waveOffset = Math.sin((x / this.width) * Math.PI * 6 + this.animationTime * 2 + i) * 8
        this.ctx.lineTo(x, baseY + waveOffset)
      }
      
      this.ctx.lineTo(this.width, this.height)
      this.ctx.lineTo(0, this.height)
      this.ctx.closePath()
      this.ctx.fill()
    }
    
    // Add some floating particles at base only
    this.drawFloatingParticles()
  }

  drawFloatingParticles() {
    // Draw small animated particles only around the base
    for (let i = 0; i < 15; i++) {
      const x = (this.width * 0.1) + (this.width * 0.8 * (i / 15))
      const baseY = this.height * 0.92
      const floatOffset = Math.sin(this.animationTime * 1.5 + i * 0.3) * 15
      const y = baseY + floatOffset + Math.sin(this.animationTime + i) * 8
      
      const opacity = (Math.sin(this.animationTime * 2 + i * 0.5) + 1) * 0.25
      
      this.ctx.fillStyle = `rgba(0, 173, 181, ${opacity})`
      this.ctx.beginPath()
      this.ctx.arc(x, y, 1.5, 0, Math.PI * 2)
      this.ctx.fill()
    }
  }

  drawMilestones() {
    // 4 main phases positioned on the mountain path - no numbering
    const milestones = [
      { x: this.width * 0.2, y: this.height * 0.82 },
      { x: this.width * 0.45, y: this.height * 0.45 },
      { x: this.width * 0.65, y: this.height * 0.25 },
      { x: this.width * 0.8, y: this.height * 0.08 }
    ]

    milestones.forEach((milestone) => {
      // Simple milestone circle - no numbers
      this.ctx.strokeStyle = "#00ADB5"
      this.ctx.lineWidth = 3
      this.ctx.fillStyle = "#FFFFFF"
      
      this.ctx.beginPath()
      this.ctx.arc(milestone.x, milestone.y, 10, 0, Math.PI * 2)
      this.ctx.fill()
      this.ctx.stroke()

      // Smaller inner circle
      this.ctx.fillStyle = "#00ADB5"
      this.ctx.beginPath()
      this.ctx.arc(milestone.x, milestone.y, 5, 0, Math.PI * 2)
      this.ctx.fill()
    })
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
  }
}

interface HoverCardProps {
  milestone: Milestone | null
  isVisible: boolean
}

function HoverCard({ milestone, isVisible }: HoverCardProps) {
  if (!isVisible || !milestone) return null

  // Background images for each milestone
  const backgroundImages: Record<number, string> = {
    1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop&crop=center",
    2: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop&crop=center", 
    3: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=200&fit=crop&crop=center",
    4: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=200&fit=crop&crop=center"
  }

  return (
    <div
      className="fixed z-[9999] bg-white rounded-xl shadow-2xl overflow-hidden w-80 border-2 border-[#00ADB5]/20 pointer-events-none"
      style={{
        left: (milestone.mouseX ?? 0) + 15,
        top: (milestone.mouseY ?? 0) - 140,
        transform: 'translateZ(0)',
      }}
    >
      {/* Background Image */}
      <div 
        className="w-full h-24 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${backgroundImages[milestone.number]})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-3 right-3 w-8 h-8 bg-[#00ADB5] rounded-full flex items-center justify-center text-white font-bold text-sm">
          {milestone.number}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h4 className="font-bold text-[#222831] text-base mb-2 leading-tight">
          {milestone.label}
        </h4>
        <p className="text-[#393E46] text-sm leading-relaxed">
          {milestone.info}
        </p>
      </div>
      
      {/* Bottom accent */}
      <div className="h-1 bg-gradient-to-r from-[#00ADB5] to-[#009ca3]" />
    </div>
  )
}

interface MountainCanvasProps {
  width?: number
  height?: number
  onMilestoneHover: (milestone: Milestone) => void
  onMilestoneLeave: () => void
}

function MountainCanvas({ width = 600, height = 400, onMilestoneHover, onMilestoneLeave }: MountainCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const mountain = new UnevenMountain(canvas, onMilestoneHover, onMilestoneLeave)

    return () => {
      mountain.destroy()
    }
  }, [width, height, onMilestoneHover, onMilestoneLeave])

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="w-full"
    />
  )
}

const Experience = () => {
  const [hoveredMilestone, setHoveredMilestone] = useState<Milestone | null>(null)
  const [canvasWidth, setCanvasWidth] = useState(1200)

  useEffect(() => {
    const updateCanvasWidth = () => {
      setCanvasWidth(window.innerWidth)
    }

    updateCanvasWidth()
    window.addEventListener('resize', updateCanvasWidth)
    return () => window.removeEventListener('resize', updateCanvasWidth)
  }, [])

  const handleMilestoneHover = (milestone: Milestone) => {
    setHoveredMilestone(milestone)
  }

  const handleMilestoneLeave = () => {
    setHoveredMilestone(null)
  }

  return (
    <section className="w-full min-h-screen bg-[#EEEEEE] py-16 md:py-24 relative">
      <div className="w-full px-0">
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#222831] mb-4">
            Your Legal Journey
          </h2>
          <p className="text-lg text-[#393E46] max-w-2xl mx-auto">
            Navigate through challenges, scale new heights, and reach the peak of legal success
          </p>
        </motion.div>

        {/* Mountain Visualization - Full Width */}
        <motion.div
          className="w-full mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MountainCanvas 
            width={canvasWidth} 
            height={500}
            onMilestoneHover={handleMilestoneHover}
            onMilestoneLeave={handleMilestoneLeave}
          />
        </motion.div>
      </div>

      {/* Hover Card */}
      {hoveredMilestone && typeof window !== 'undefined' && (
        <div
          className="fixed z-[9999] bg-white rounded-xl shadow-2xl overflow-hidden w-80 border-2 border-[#00ADB5]/20 pointer-events-none transition-opacity duration-200"
          style={{
            left: Math.min((hoveredMilestone.mouseX ?? 0) + 15, window.innerWidth - 320),
            top: Math.max((hoveredMilestone.mouseY ?? 0) - 140, 15),
          }}
        >
          {/* Background Image */}
          <div 
            className="w-full h-24 bg-cover bg-center relative"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-150700321116${hoveredMilestone.number === 1 ? '9' : hoveredMilestone.number === 2 ? '0' : hoveredMilestone.number === 3 ? '6' : '4'}-0a1dd7228f2d?w=400&h=200&fit=crop&crop=center)`
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute top-3 right-3 w-8 h-8 bg-[#00ADB5] rounded-full flex items-center justify-center text-white font-bold text-sm">
              {hoveredMilestone.number}
            </div>
          </div>
          
          {/* Content */}
          <div className="p-4">
            <h4 className="font-bold text-[#222831] text-base mb-2 leading-tight">
              {hoveredMilestone.label}
            </h4>
            <p className="text-[#393E46] text-sm leading-relaxed">
              {hoveredMilestone.info}
            </p>
          </div>
          
          {/* Bottom accent */}
          <div className="h-1 bg-gradient-to-r from-[#00ADB5] to-[#009ca3]" />
        </div>
      )}
    </section>
  )
}

export default Experience

