// app/about-us/[slug]/page.tsx
import { notFound } from "next/navigation"
import Image from "next/image"
import { TEAM_MEMBERS } from "~/lib/teamData"
import { Mail, Phone } from "lucide-react"

interface Props {
  params: Promise<{
    slug: string
  }>
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params
  const member = TEAM_MEMBERS.find((m) => m.slug === slug)

  if (!member) {
    notFound()
  }

  return (
    <div className="relative min-h-screen w-full overflow-visible">
      <div className="absolute inset-0 -z-10 overflow-visible bg-[#eeeeee] pointer-events-none">
        {/* First diagonal - left to right */}
        <div
          className="absolute top-[4px] left-0 w-full h-[1600px] 
            bg-[#FEE2E2]
            "
          style={{ transformOrigin: "top left" }}
        />

        {/* Second diagonal - right to left, faded more */}
        <div
          className="absolute top-[700px] right-0 w-full h-[900px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]
            bg-[#DBEAFE]
            transform skew-y-20"
          style={{ transformOrigin: "top right" }}
        />

        {/* Third diagonal - left to right, most faded */}
        <div
          className="absolute top-[700px] left-0 w-full h-[980px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]
            bg-[#DCFCE7]
            transform -skew-y-20"
          style={{ transformOrigin: "top left" }}
        />
      </div>

      {/* Content layout */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Top Section with Image and Details */}
        <div className="flex flex-col md:flex-row items-start gap-16 mb-20">
          <div className="flex-shrink-0 w-full md:w-2/5 flex justify-center md:justify-start">
            <div className="relative w-96 h-[600px] md:w-[450px] md:h-[700px]">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="flex-1 flex flex-col space-y-10 md:pl-8">
            {/* Name */}
            <h1 className="text-6xl font-bold font-sans tracking-[7px] capitalize text-[#222831]">{member.name}</h1>

            {/* Role */}
            <p className="text-3xl font-semibold text-[#00ADB5]">{member.position}</p>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#222831]">Contact</h3>
              <p className="flex items-center gap-3 text-[#00ADB5]">
                <Mail size={22} /> {member.contact.email}
              </p>
              <p className="flex items-center gap-3 text-[#00ADB5]">
                <Phone size={22} /> {member.contact.phone}
              </p>
            </div>

            {/* Introduction */}
            <div>
              <h3 className="text-xl font-semibold text-[#222831] mb-3">Introduction</h3>
              <p className="text-[#393E46] leading-relaxed text-lg">{member.introduction}</p>
            </div>

            {/* Languages */}
         
          </div>
        </div>

        {/* Approach Section - Centered heading with content on right and components on left */}
        <div className="w-full ">
          {/* Centered APPROACH heading */}
          <div className="w-full flex justify-center ">
            <h2 className="text-[120px] font-extrabold text-white font-sans tracking-[20px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] text-center">
              APPROACH
            </h2>
          </div>
          
          {/* Content layout - components on left, paragraph on right */}
          <div className="flex flex-col md:flex-row gap-16">
            {/* Left Side - Components (Education and Specialties) */}
            <div className="w-full md:w-2/5 space-y-8">
              {/* Education Block */}
              {member.education && member.education.length > 0 && (
                <div className="bg-white/90 p-8  shadow-lg">
                  <h3 className="text-2xl font-bold text-[#222831] mb-6">Education</h3>
                  <ul className="space-y-4">
                    {member.education.map((item, index) => (
                      <li key={index} className="text-[#393E46] text-lg">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specialties Block */}
              {member.specialties && member.specialties.length > 0 && (
                <div className="bg-white/90 p-8  shadow-lg">
                  <h3 className="text-2xl font-bold text-[#222831] mb-6">Areas of Specialization</h3>
                  <div className="flex flex-wrap gap-3">
                    {member.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="px-5 py-2 text-lg rounded-full bg-[#222831] text-white"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Side - Approach Paragraph */}
            <div className="w-full md:w-3/5 flex items-center">
              <p className="text-[#222831] text-2xl leading-relaxed font-medium">
                {member.approach}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate static params
export async function generateStaticParams() {
  return TEAM_MEMBERS.map((member) => ({
    slug: member.slug,
  }))
}

// Metadata
export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const member = TEAM_MEMBERS.find((m) => m.slug === slug)

  if (!member) {
    return { title: "Team Member Not Found" }
  }

  return {
    title: `${member.name} - ${member.position} | Leonard Corporate Solutions`,
    description: member.introduction.substring(0, 160),
  }
}