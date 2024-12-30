import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiX } from 'react-icons/si'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-2xl pt-6 pb-6">
      <div className="flex flex-col md:flex-row gap-8 px-4 md:px-0">
        {/* Profile Picture */}
        <div className="relative w-[200px] h-[200px] md:w-[267px] md:h-[267px] flex-shrink-0 mx-auto md:mx-0">
          <Image
            src="/images/seb-polaroid.jpeg"
            alt="Sebastian Russo"
            fill
            className="object-cover rounded-sm"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-start text-center md:text-left">
          <h1 className="text-title tracking-tight mb-6">Sebastian Russo</h1>
          
          <p className="text-base leading-relaxed mb-6">
            My name is Seb and I&apos;m a Stanford undergrad studying computer science, neuroscience and economics.
          </p>

          <p className="text-base leading-relaxed mb-6">
            This website is a space for my thoughts. You can get in contact by visiting me on socials. 
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <Link href="https://www.linkedin.com/in/sebasrusso/" className="text-muted-foreground hover:text-foreground">
              <FaLinkedin className="h-6 w-6" />
            </Link>
            <Link href="https://x.com/sebbrusso" className="text-muted-foreground hover:text-foreground">
              <SiX className="h-6 w-6" />
            </Link>
            <Link href="https://github.com/sebrusso" className="text-muted-foreground hover:text-foreground">
              <FaGithub className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

