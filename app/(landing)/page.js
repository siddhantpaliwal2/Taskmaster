import {Button} from '@/components/ui/button'
import Link from '@/node_modules/next/link'
export default function LandingPage() {
  return (
    <div>
        <div className = 'space-y-4'>
          <p className = ' flex items-center justify-center'>Landing Page</p>
          <div className = ' flex items-center justify-center'>
            <Link href = "/sign-in">
            <Button>Sign In</Button>
            </Link>
          </div>
          <div className = ' flex items-center justify-center'>
            <Link href = "/sign-up">
            <Button>Sign up</Button>
            </Link>
          </div>
        </div>
    </div>
)}