// app/about-us/[slug]/metadata.ts
import { TEAM_MEMBERS } from "~/lib/teamData"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
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

export async function generateStaticParams() {
  return TEAM_MEMBERS.map((member) => ({
    slug: member.slug,
  }))
}