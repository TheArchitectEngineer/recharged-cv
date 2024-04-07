import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AuthMessages } from "@/components/auth-messages"
import { Meteors } from "@/components/Meteors"

export const Hero = ({ count }: any) => {
  return (
    <div className="mx-auto my-16 w-1/2 overflow-hidden p-16">
      <form
        action="/auth/sign-in"
        method="post"
        className="mx-auto max-w-7xl space-y-8 px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="font-extrabold tracking-tight md:text-6xl">
          AI Resume Builder
        </h2>
        <p className="mx-auto mb-4 max-w-md text-base tracking-tight  md:mt-2 md:max-w-3xl ">
          Streamline Your Professional Journey: Discover the Power of AI with
          Our Resume Builder—Craft Perfect, Personalized Resumes in Just a Few
          Clicks
        </p>
        <div>
          More than <span className="font-bold">{count * 100}</span> resumes
          created!
        </div>
        <div className="flex justify-center gap-2 text-sm">
          <span>✅ Improve your writing skills</span>
          <span>✅ Get instant feedback</span>
          <span>✅ Save time and effort</span>
        </div>
        <div id="email-target"></div>
        <div className="space-y-4">
          <div className="relative space-y-2">
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 p-2">
              <Input
                type="email"
                name="email"
                placeholder="Type your email"
                className="border-0 bg-transparent"
                required
              />
              <Button
                type="submit"
                size={"lg"}
                className="rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 text-xs font-bold uppercase text-white shadow-md transition-all hover:bg-gradient-to-tl hover:from-pink-500 hover:to-purple-700 hover:shadow-lg"
              >
                Build your resume with AI
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              If you already have an account, we&#39;ll log you in
            </p>
          </div>
          <AuthMessages />
        </div>
      </form>
      <Meteors number={5} />
    </div>
  )
}
