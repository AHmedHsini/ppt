export type TeamMember = {
  name: string
  role: string
  subtitle?: string
  photo: string
  responsibilities: string[]
  objectPosition?: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Ahmed Hsini',
    role: 'Project Manager',
    subtitle: 'Full Stack Developer',
    photo: '/team/ahmed.jpg',
    objectPosition: 'center 28%',
    responsibilities: [
    ],
  },
  {
    name: 'Emna Missaoui',
    role: 'Software & DevSecops Engineer',
    photo: '/team/emna.jpg',
    objectPosition: 'center 30%',
    responsibilities: [
    ],
  },
  {
    name: 'Yosr Samali',
    role: 'Full Stack Developer',
    photo: '/team/yosr.jpg',
    objectPosition: 'center 30%',
    responsibilities: [
    ],
  },
]
